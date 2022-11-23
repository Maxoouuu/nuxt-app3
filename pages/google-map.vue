<template>
  <iframe
    id="map"
    class="container margin-auto mx-auto my-2 h-screen w-full"
    :src="src"
    frameborder="0"
    style="border: 0"
    allowfullscreen
    />
    <!-- onload="addMarker()" -->
</template>

<script setup>
const data = [
  {
    id: 1,
    name: "Hôpital Saint-Antoine",
    city: "Paris",
    adress: "184 Rue du Faubourg Saint-Antoine",
  },
  {
    id: 2,
    name: "Hôpital Saint-Anne",
    city: "Paris",
    adress: "1 Rue Cabanis",
  },
  {
    id: 3,
    name: "Hôpital Pitié-Salpétrière",
    city: "Paris",
    adress: "47-83 Bd de l'Hôpital",
  },
  {
    id: 4,
    name: "Hôpital Européen Georges Pompidou",
    city: "Paris",
    adress: "20 Rue Leblanc",
  },
  {
    id: 5,
    name: "Hôpital Ambroise-Paré",
    city: "Boulogne-Billancourt",
    adress: "9 avenue Charles de Gaulle",
  },
];
var src = `https://www.google.com/maps/embed/v1/place?key=${"AIzaSyDzc37KmWbEX4oCjTINZ8TUBdHN08svwDY"}&region=fr&zoom=12`;
// for each hospital in data, add a marker on the map
/* for (const hospital of data) {
  src += `&q=${hospital.adress}+${hospital.city}`;
} */

// for each data.length add url to api src
for (let i = 0; i < data.length; i++) {
  src += `&q=${data[i].adress}+${data[i].city}`;
}

// for each hospital in the dataset add a marker on the google map
/* src += `&q=${data[0].adress}+${data[0].city}`; */

// Add multiple marker on a google map
/* src += `&q=${data[0].adress}+${data[0].city}|${data[1].adress}+${data[1].city}`; */

// Add multiple marker of the dataset on a google map
/* src += `&q=${data[0].adress}+${data[0].city}|${data[1].adress}+${data[1].city}|${data[2].adress}+${data[2].city}|${data[3].adress}+${data[3].city}|${data[4].adress}+${data[4].city}`; */

// Add multiple marker at the address of the dataset on the google map api
/*  function addMarker (data) => {
  for (const hospital of data) {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: `${hospital.adress}+${hospital.city}` }, (results, status) => {
      if (status === "OK") {
        addMarker(results[0].geometry.location);
      } else {
        alert("Geocode was not successful for the following reason: " + status);
      }
    });
  }
} */
</script>
