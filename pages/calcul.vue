<template>
    <label class="block text-sm w-full font-medium text-gray-700">
      <input
        type="text"
        ref="townRef"
        placeholder="Recherchez une ville..."
        class="search-click mt-1 w-full text-sm placeholder-gray-400 rounded-md border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        @keydown.enter="searchTown($event)"
        :value="town"
      />
    </label>
    <!-- create a field that will show the information of the variable ClosestInfo -->
    <div class="container mx-auto bg-gray-300 p-8 my-8">
      <h1 class="font-bold text-black text-4xl text-center">Closest town</h1>
      <h2 class="font-bold text-black">Town research : {{ town }}</h2>
      <p class="font-bold text-black">Closest center : {{ ClosestInfo }}</p>
    </div>
  </template>
  
  <script setup>
  const centerList = [
    {
      id: 1,
      name: "CHU d'Angers",
      city: "Angers",
    },
    {
      id: 2,
      name: "Clinique Mirambeau",
      city: "Anglet",
    },
    {
      id: 3,
      name: "CHRU de Besançon",
      city: "Besançon",
    },
    {
      id: 4,
      name: "Chu Clermont Ferrand",
      city: "Clermont-Ferrand",
    },
    {
      id: 5,
      name: "CHU de Dijon",
      city: "Dijon",
    },
    {
      id: 6,
      name: "Chu de Lyon",
      city: "Lyon",
    },
    {
      id: 7,
      name: "Nantes University Hospital",
      city: "Nantes",
    },
    {
      id: 8,
      name: "Aphp Hopital Saint Antoine",
      city: "Paris",
    },
    {
      id: 9,
      name: "CH Henri Laborit (Poitiers)",
      city: "Poitiers",
    },
    {
      id: 10,
      name: "Centre hospitalier Guillaume Regnier Rennes",
      city: "Rennes",
    },
    {
      id: 11,
      name: "CH du Rouvray - Rouen",
      city: "Rouen",
    },
    {
      id: 12,
      name: "CHU de Tours / CHRU de Tours",
      city: "Tours",
    },
  ];
  const town = ref("");
  const searchTown = (e) => {
    town.value = e.target.value;
  };
  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };
  const getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);
    var dLon = deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    d = Math.round(d * 100) / 100;
    return d;
  };
  const getDistance = async (town, center) => {
    const townResponse = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${town}&key=AIzaSyDzc37KmWbEX4oCjTINZ8TUBdHN08svwDY`
    );
    const centerResponse = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${center}&key=AIzaSyDzc37KmWbEX4oCjTINZ8TUBdHN08svwDY`
    );
    const townData = await townResponse.json();
    const centerData = await centerResponse.json();
    const townLat = townData.results[0].geometry.location.lat;
    const townLng = townData.results[0].geometry.location.lng;
    const centerLat = centerData.results[0].geometry.location.lat;
    const centerLng = centerData.results[0].geometry.location.lng;
    const distance = getDistanceFromLatLonInKm(townLat, townLng, centerLat, centerLng);
    return distance;
  };
  const getClosestCenter = async (town) => {
    let closestCenter = "";
    let distance = 0;
    for (let i = 0; i < centerList.length; i++) {
      const center = centerList[i];
      const distanceToCenter = await getDistance(town, center.city);
      if (distanceToCenter < distance || distance === 0) {
        distance = distanceToCenter;
        closestCenter = center.name;
      }
    }
    return { closestCenter, distance };
  };
  const ClosestInfo = ref("");
  watchEffect(async () => {
    if (town.value) {
      const { closestCenter, distance } = await getClosestCenter(town.value);
      ClosestInfo.value = `${closestCenter} (${distance}km)`;
    }
  });
  </script>