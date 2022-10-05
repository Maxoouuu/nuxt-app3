<template>
    <div>
        <Header />

        <div class="container" style="padding: 30px 0 0 0">
            <SearchBar />
            <Test />
            
            <!-- <form @submit.prevent="onCreate">
                <div class="form-control">
                    /Pages/index.vue : {{ foo }}
                    <div class="input-group">
                        <input type="text" placeholder="Search…" class="input input-bordered" v-model="search"
                            name="search" id="search" />
                        <button type="submit" class="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </form> -->
        </div>

        <div class="container" style="padding: 50px 0 100px 0">
            <Account v-if="user" />
            <Auth v-else />
        </div>

    </div>
</template>
  

<script setup>
const user = useSupabaseUser();

const foo = useFoo();

/* export { search } from './useSearch.ts';
 */
const { search, onCreate } = useSearch();

/* console.log ({ search }) */

</script>