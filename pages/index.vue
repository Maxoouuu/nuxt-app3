<template>
    <div>
        <Header />

        <div class="container" style="padding: 30px 0 0 0">
            <SearchBar />
        </div>

        <div class="container">
            <iframe width="750px" height="425" src="https://www.youtube.com/embed/dZC4T4UiU1c"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
        </div>

        <!-- <div class="container" style="padding: 50px 0 100px 0">
            <Account v-if="user" />
            <Auth v-else />
        </div> -->

        <div>
            Counter: {{ counter }}
            <button @click="counter++">
                +
            </button>
            <button @click="counter--">
                -
            </button>
        </div>

    </div>
</template>
  

<script setup>
/* const user = useSupabaseUser(); */
/* const { search, onCreate } = useSearch(); */

/* Tests */
/* const foo = useFoo(); */

/* export { search } from './useSearch.ts'; */

/* console.log ({ search }) */
const counter = useState('counter', () => Math.round(Math.random() * 1000))

</script>