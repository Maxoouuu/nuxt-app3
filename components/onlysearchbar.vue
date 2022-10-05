<template>
  <div class="w-full relative">
    <div
      class="flex flex-row items-center bg-white relative border-2 border-black overflow-hidden rounded-md justify-between h-16">
      <div class="basis-5/10 flex flex-row items-center relative border-r-2 border-black h-16">
        <span class="px-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="" width="1.5em" height="1.5em" viewBox="0 0 512 512">
            <title>Search</title>
            <path d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z" fill="none"
              stroke="currentColor" stroke-miterlimit="10" stroke-width="32" />
            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32"
              d="M338.29 338.29L448 448" />
          </svg>
        </span>

        <input type="text" class="text-xl pl-1 w-2/3 py-3 focus:outline-none" placeholder="Dépression, anxiété..."
          v-model="search">
        <a v-if="search != ''" @click="search = ''" class="absolute right-3 text-2xl text-primary cursor-pointer">
          x</a>
      </div>

      <div class="basis-3/10 flex flex-row items-center pr-5 relative h-16">
        <span class="px-2">
          <svg class="fill-gray-400" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em"
            viewBox="0 0 512 512">
            <path d="M448 64L64 240.14h200a8 8 0 018 8V448z" fill="none" stroke="currentColor" stroke-linecap="round"
              stroke-linejoin="round" stroke-width="32" />
          </svg>
        </span>

        <input type="text" class="w-1/2 text-xl px-2 focus:outline-none" placeholder="Paris, Lyon..." v-model="city">
        <p class="text-sm leading-4 text-gray-500 text-left pr-2 whitespace-nowrap">{{ distance }} km</p>
        <a v-if="city != ''" @click="city = ''" class="absolute right-3 text-2xl text-primary cursor-pointer">
          x</a>

        <div class="pb-2">
          <input id="default-range" type="range"
            class="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer" v-model="distance" min="0" max="50"
            step="10">
        </div>
      </div>
      <div class="flex bg-yellow-200 h-full border-l-2 border-black items-center">
        <button class="basis-2/10 font-bold text-2xl px-4" @click="$emit('setevent', search, city)">
          Rechercher
        </button>
      </div>
    </div>

    <div v-if="advancedsearch" class="absolute right-3 text-sm pt-2 link link-hover">Recherche avancée</div>

    <!-- résultat de la recherche sur les conditions -->
    <!-- <div v-if="newconditions.length > 0"
      class="w-full absolute z-50 bg-white border-2 border-gray-300 mt-1 max-height-48 overflow-hidden overflow-y-scroll rounded-md shadow-md">
      <div class="px-3 py-2 cursor-pointer hover:bg-gray-100" v-for="condition in newconditions">
        <div class="flex flex-row justify-between px-5">
          <span @click="selectResult(condition)" @mousedown.prevent>
            {{ condition.groupname }}
          </span>
          <span class="badge badge-outline text-primary text-medium">
            {{ condition.count }} {{ condition.count > 1 ? 'études' : 'étude' }}</span>
        </div>
      </div>
    </div> -->
  </div>

</template>


<script setup>

const props = defineProps(['cond', 'advancedsearch'])
const { cond, advancedsearch } = toRefs(props)




const supabase = useSupabaseClient()

const conditions = ref([])

const getConditions = async () => {
  try {
    const { data, error } = await supabase
      .from('viewconditions')
      .select(`groupid, groupname, count`)
    if (error) throw error
    conditions.value = data
  } catch (error) {
    alert("Error downloading conditions: ", error.message)
  }
}

getConditions()


let newconditions = ref([])
let search = ref('')
let city = ref('')
let distance = ref(10)

search.value = cond.value   /* init du champ de recherche sur les conditions */

let conditionselected = ref('')

watch(search, () => {
  newconditions.value = []
  if (search.value != conditionselected.value) {
    conditions.value.forEach(element => {
      if (element.groupname
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .includes(search.value
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, ''))
        && search.value != "") {
        newconditions.value.push(element)
      }
    })
  }
})

function selectResult(condition) {
  search.value = condition.groupname
  conditionselected.value = condition.groupname
  newconditions.value = []
}

</script>
