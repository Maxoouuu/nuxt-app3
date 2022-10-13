<template>
    <div class="absolute top-0 left-O h-screen w-screen bg-center bg-cover bg-no-repeat"
        :style="{ backgroundImage: `url(${image})` }">

        <theheader />
        <div class="flex h-screen justify-center items-center mx-32">
            <p class="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ab iusto eveniet inventore adipisci ullam
                consequuntur dolor asperiores provident voluptates, esse vitae officia ea tempora atque cum, fuga nam
                excepturi.
            </p>
        </div>

    </div>
    <div>
        <p class="text-white">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis autem rem dolores
            praesentium perferendis odit
            accusamus, delectus libero necessitatibus suscipit, dolorem reiciendis eius officiis pariatur dolore
            excepturi! Error, autem modi.</p>
    </div>
</template>

<script setup>

let images = ref(['/assets/img/home-2.jpeg',
    '/assets/img/home-3.jpeg',
    '/assets/img/home-4.jpeg',
    '/assets/img/home-5.jpeg',
    '/assets/img/home-min.jpeg'])

let image = ref('/assets/img/home-min.jpeg')
let indeximg = 0

function changeImage() {
    if (indeximg === images.value.length) {
        indeximg = 0;
    }
    image.value = images.value[indeximg];
    indeximg++;
}

setInterval(changeImage, 5000);

</script>