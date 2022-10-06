<template>
    <div>
        <Header />

        <div class="container" style="padding: 30px 0 0 0">
            <SearchBar /> <!-- class="max-w-lg my-8" -->
        </div>
    </div>

    <div>
        Counter: {{ counter }}
        <button @click="counter++">
            +
        </button>
        <button @click="counter--">
            -
        </button>
    </div>

</template>
  
<script setup>
const counter = useState('counter', () => Math.round(Math.random() * 1000))

</script>