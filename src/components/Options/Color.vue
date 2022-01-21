<script setup>
const props = defineProps(['options']);
const emit = defineEmits(['updatedSeletedOpt']);
</script>
<template>
    <div class="flex flex-wrap justify-center">
        <div
            v-for="opt in props.options"
            :key="opt.text"
            class="border p-2 rounded m-2 cursor-pointer w-[200px] h-[200px] flex justify-center items-center flex-col"
            @click="emit('updatedSeletedOpt', opt)"
        >
            <div class="w-28">
                <img
                    v-if="opt.imgUrl"
                    class="block w-full"
                    :src="opt.imgUrl"
                    alt=""
                />
            </div>
            <h4 class="font-bold text-xl mt-4">{{ opt.text }}</h4>
        </div>
    </div>
</template>
