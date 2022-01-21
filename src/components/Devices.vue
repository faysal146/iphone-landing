<script setup>
const props = defineProps(['data']);
const emit = defineEmits(['selectItem']);
</script>

<template>
    <div
        class="flex flex-col items-center min-w-[270px] px-4 py-3 mb-8 border rounded shadow-sm"
    >
        <div class="flex-grow">
            <img class="w-60 block" :src="props.data.imgUrl" alt="" />
        </div>
        <h3 class="text-center font-bold capitalize text-lg text-gray-800">
            {{ props.data.text }}
        </h3>
        <button
            class="mt-3 bg-green-400 font-bold w-full py-2 rounded block text-gray-800"
            @click="emit('selectItem', props.data)"
        >
            Choose Now
        </button>
    </div>
</template>
