<template>
    <div>
        <div
            @click="emit('clearItem')"
            class="fixed w-full h-screen top-0 left-0 bg-dark-100 opacity-20"
        ></div>
        <div
            class="-translate-x-1/2 -translate-y-1/2 fixed bg-white left-1/2 top-1/2 transform w-[550px] min-h-[400px] rounded p-4 flex flex-col"
        >
            <!--  -->

            <h1 class="font-bold capitalize text-gray-800">
                {{ options.text }}
            </h1>
            <section class="my-6 flex-grow">
                <Model
                    @updatedSeletedOpt="vl => updatedSeletedOpt(vl)"
                    :options="options.options"
                    v-if="steps.currentStep === 0"
                />
                <Color
                    v-else-if="steps.currentStep === 1"
                    @updatedSeletedOpt="vl => updatedSeletedOpt(vl)"
                    :options="options.options"
                />
                <Stroge
                    v-else-if="steps.currentStep === 2"
                    @updatedSeletedOpt="vl => updatedSeletedOpt(vl)"
                    :options="options.options"
                />
            </section>
            <div class="py-2 w-full flex justify-end">
                <button
                    class="py-2 px-4 bg-red-400 rounded mr-2"
                    @click="handleBack"
                >
                    Back
                </button>
                <button class="py-2 px-4 bg-green-400 rounded">Next</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, watch, watchEffect } from 'vue';
import Model from './Model.vue';
import Color from './Color.vue';
import Stroge from './Stroge.vue';
const props = defineProps(['selectedItem']);
const emit = defineEmits(['clearItem']);
const steps = ref({
    totalStep: 0,
    currentStep: 0,
});
const seletedOptions = ref([]);

watchEffect(() => {
    if (props.selectedItem.options) {
        steps.value = {
            totalStep: Object.keys(props.selectedItem.options).length,
            currentStep: 0,
        };
    }
});

const options = computed(() => {
    if (!props.selectedItem.options) return {};
    const opt = props.selectedItem.options;
    const val = Object.values(opt)[steps.value.currentStep];
    return val;
});

function updatedSeletedOpt(val) {
    seletedOptions.value.push(val);
    const { currentStep, totalStep } = steps.value;
    if (currentStep < totalStep) {
        steps.value = {
            totalStep,
            currentStep: currentStep + 1,
        };
    }
}
function handleBack() {
    const { currentStep, totalStep } = steps.value;
    if (currentStep > 0) {
        steps.value = {
            totalStep,
            currentStep: currentStep - 1,
        };
    }
}
</script>
