<template>
    <div>
        <Header />

        
    </div>
</template>
  
<script setup>
const { data } = await useFetch('https://maps.googleapis.com/maps/api/distancematrix/json?origins=Washington%2C%20DC&destinations=New%20York%20City%2C%20NY&units=imperial&key=AIzaSyDzc37KmWbEX4oCjTINZ8TUBdHN08svwDY')
console.log(JSON.stringify(data._rawValue.rows))

</script>