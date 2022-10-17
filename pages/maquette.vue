<template>
    <div>
        <div class="absolute top-0 left-O h-screen w-screen bg-center bg-cover bg-no-repeat">

            <slide v-for="i in 5" :key="i" class="h-screen w-screen bg-center bg-cover bg-no-repeat">
                <img :src="`./assets/img/${i}-home.jpeg`" @load="changeImage"/>
            </slide>

            <theheader />
            <div class="flex h-screen justify-center items-center mx-32">
                <p class="text-white">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ab iusto eveniet inventore adipisci
                    ullam
                    consequuntur dolor asperiores provident voluptates, esse vitae officia ea tempora atque cum, fuga
                    nam
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
    </div>
</template>

<script setup>

let images = ref(['/assets/img/1-home.jpeg',
    '/assets/img/2-home.jpeg',
    '/assets/img/3-home-4.jpeg',
    '/assets/img/4-home.jpeg'
])

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