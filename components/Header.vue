<template>
    <div class="navbar bg-base-100">
        <div class="navbar-start">
            <a href="/" class="btn btn-ghost normal-case text-xl">Home</a>
        </div>
        <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal p-0">
                <li>
                    <NuxtLink to="/search">Search</NuxtLink>
                </li>
                <li tabindex="0">
                    <a>
                        Posts
                        <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            viewBox="0 0 24 24">
                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                    </a>
                    <ul class="p-2">
                        <li>
                            <NuxtLink to="/posts/1">Post 1</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/posts/2">Post 2</NuxtLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NuxtLink to="/edit">Edit</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/distance">Distance</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/maquette">Maquette</NuxtLink>
                </li>
                
            </ul>
        </div>
        <div class="navbar-end">
            <div class="dropdown dropdown-end dropdown-hover ">
                <label tabindex="0" class="btn m-1">Se connecter</label>
                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <NuxtLink to="/account">Mon profil</NuxtLink>
                    </li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>