<script setup>
const props = defineProps(['options']);
const emit = defineEmits(['updatedSeletedOpt']);
</script>
<template>
    <div
        v-for="opt in props.options"
        :key="opt.text"
        class="border flex items-center justify-between px-4 py-1 rounded mb-3 cursor-pointer"
        @click="emit('updatedSeletedOpt', opt)"
    >
        <div>
            <h3 class="font-bold text-xl">{{ opt.text }}</h3>
            <p v-if="opt.description" class="capitalize text-sm">
                {{ opt.description }}
            </p>
        </div>
        <div class="w-16">
            <img
                v-if="opt.imgUrl"
                class="block w-full"
                :src="opt.imgUrl"
                alt=""
            />
        </div>
    </div>
</template>
