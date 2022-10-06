<template>
    <form action="/" method="post" @submit.prevent="onCreate">
        <div class="form-control">
            /Components/SearchBar.vue : 
            <div class="input-group">
                <input type="text" placeholder="Search…" class="input input-bordered" v-model="search" />
                <button class="btn btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
        </div>
    </form>
    <!-- Tests -->
    <p>Votre dernière recherche : {{ search }} </p>
</template>

<script setup>
/* const { search, onCreate } = useSearch(); */

// Tests
const search = useSearch()

</script>