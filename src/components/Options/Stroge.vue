<script setup>
const props = defineProps(['options']);
const emit = defineEmits(['updatedSeletedOpt']);
</script>
<template>
    <div class="flex flex-wrap justify-center">
        <div
            v-for="opt in props.options"
            :key="opt.text"
            class="border p-2 rounded m-2 cursor-pointer w-[190px] h-[120px] flex justify-center items-center flex-col"
            @click="emit('updatedSeletedOpt', opt)"
        >
            <h4 class="font-bold text-xl">{{ opt.text }}</h4>
        </div>
    </div>
</template>
