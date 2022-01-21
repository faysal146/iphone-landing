<script setup>
import { ref, watch } from 'vue';
import Devices from './components/Devices.vue';
import Options from './components/Options/Index.vue';
const data = [
    {
        text: 'IPhones',
        imgUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-family-hero?wid=470&hei=556&fmt=png-alpha&.v=1631220221000',
        options: {
            model: {
                text: 'Select IPhone Model',
                options: [
                    {
                        text: 'IPhone 13 Pro',
                        description: '6.1-inch display¹',
                        imgUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-blue-select?wid=470&hei=556&fmt=png-alpha&.v=1631652954000',
                    },
                    {
                        text: 'IPhone 13 Pro Max',
                        description: '6.7-inch display¹',
                        imgUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-blue-select?wid=470&hei=556&fmt=png-alpha&.v=1631652955000',
                    },
                ],
            },
            color: {
                text: 'Configure Color',
                options: [
                    {
                        text: 'Sierra Blue',
                        imgUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-blue-select?wid=470&hei=556&fmt=png-alpha&.v=1631652955000',
                    },
                    {
                        text: 'Silver',
                        imgUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-silver-select?wid=470&hei=556&fmt=png-alpha&.v=1631652956000',
                    },
                    {
                        text: 'Gold',
                        imgUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-gold-select?wid=470&hei=556&fmt=png-alpha&.v=1631652956000',
                    },
                    {
                        text: 'Graphite',
                        imgUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=470&hei=556&fmt=png-alpha&.v=1631652956000',
                    },
                ],
            },
            storage: {
                text: 'Select Stroge',
                options: [
                    {
                        text: '128GB²',
                    },
                    {
                        text: '256GB²',
                    },
                    {
                        text: '512GB²',
                    },
                    {
                        text: '1TB²',
                    },
                ],
            },
        },
    },
    {
        text: 'AirPods',
        imgUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861342000',
    },
    {
        text: 'Apple Watch',
        imgUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ML893_VW_34FR+watch-45-alum-starlight-nc-nike7s_VW_34FR_WF_CO?wid=375&hei=356&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1632171390000%2C1631662263000',
    },
    {
        text: 'MackBook',
        imgUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202110?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1632788573000',
    },
    {
        text: 'IPad',
        imgUrl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-11-select-202104?wid=970&amp;hei=1020&amp;fmt=png-alpha&amp;.v=1617067379000',
    },
];
const selectedItem = ref(null);

function setSelectedItem(item) {
    selectedItem.value = item;
}
</script>

<template>
    <main class="container p-2 mx-auto">
        <h2 class="font-bold capitalize">Apple Pro Fro Everyone</h2>
        <div class="py-4 mt-10 text-center capitalize">
            <h1 class="text-3xl font-bold">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <h3 class="text-xl mt-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Placeat, eum.
            </h3>
        </div>
        <section class="flex flex-wrap my-10 py-2 justify-center space-x-3">
            <template v-for="item in data" :key="item.text">
                <Devices :data="item" @selectItem="setSelectedItem" />
            </template>
        </section>
        <teleport to="#model">
            <transition name="fade">
                <Options
                    v-if="selectedItem != null"
                    :selectedItem="selectedItem"
                    @clearItem="() => setSelectedItem(null)"
                />
            </transition>
        </teleport>
    </main>
</template>

<style>
#model {
    @apply relative;
}
body {
    /* @apply bg- */
}
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
