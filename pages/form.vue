<template>
    <div>
        <div class="grid h-screen place-items-center gap-4">
            <form action="" class="gap-4">
                <!-- Email   -->
                <div class="relative">
                    <input type="email" id="default_filled"
                        class="block rounded-t-lg my-4 px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" " />
                    <label for="default_filled"
                        class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Email</label>
                </div>
                <!-- Centre d'intérêt + ADD -->
                <div class="flex gap-2 my-4">
                    <select id="interest"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option disabled selected>Centre d'intérêts</option>
                        <option value="1">tennis</option>
                        <option value="2">jeux</option>
                        <option value="3">escalade</option>
                        <option value="4">vélo</option>
                    </select>
                    <button v-on:click.self="Add" class="border-green-300 rounded-lg border-2 px-2">Add</button>
                </div>
                <!-- Template To Do  -->
                <ul class="my-4"> <!-- v-for="interest in interests" :key="interest.id" -->
                    <li>
                        <div class="flex justify-between hover:bg-slate-100 p-2">
                            <!-- {{ interests }} -->
                            test
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </button>
                        </div>
                    </li>
                </ul>
                <!-- Valider -->
                <button type="submit" class="border-green-600 rounded-lg border-2 w-full py-1.5">Valider</button>
            </form>
        </div>
    </div>
</template>

<script setup>

</script>