<template>
    <div>
        <div class="flex justify-center text-center text-3xl pb-6">Equipe</div>
        <div class="max-w-4xl grid grid-cols-4 gap-4 mx-auto">

            <div v-for="member in team" :key="member.id">
                <img :src="`${member.image}`" :alt="`${member.name}`" class="w-100 max-w-50">
                <div>
                    <h4 class="text-xl">{{ member.name }}</h4>
                    <h5 class="text-[14px]">{{ member.title }}</h5>
                    <p class="text-[14px]">{{ member.profession }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const team = ref([
    {
        image: "/assets/img/alexis.png",
        name: "Alexis Bourla",
        title: "CEO",
        profession: "Psychiatre",
    },
    {
        image: "/assets/img/alexis.png",
        name: "Jean-François Ramadier",
        title: "CTO",
        profession: "Ingénieur en IA",
    },
    {
        image: "/assets/img/alexis.png",
        name: "Redwan Maatoug",
        title: "Scientific advisor",
        profession: "Psychiatre et chercheur en neurosciences",
    },
    {
        image: "/assets/img/alexis.png",
        name: "Michel Gennaoui",
        title: "Scientific director",
        profession: "Nephrologue",
    },
])

</script>