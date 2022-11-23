<template>
  <div id="map" onload="initMap()"></div>
</template>

<script setup>

// fonction init map google
function initMap() {
    const map = `https://www.google.com/maps/embed/v1/place?key=${"AIzaSyDzc37KmWbEX4oCjTINZ8TUBdHN08svwDY"}`;
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Paris
   map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: uluru,
  });

  addMarker({lat:11,lng:100})
  addMarker({lat:11,lng:100})

  // Add Marker function
  function addMarker(coords) {
    const marker = new google.maps.Marker({
      position: coords,
      map: map,
    });
  }
  
  window.initMap = initMap;
}
</script>
