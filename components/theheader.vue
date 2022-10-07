<template> 
<!-- login form modal-->
<loginform />

  <div class="navbar bg-gradient-to-b from-black z-50 mx-auto px-10 py-4 sticky top-0"> <!-- lg:max-w-screen-lg -->
  <!-- navbar start -->
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost mr-5 lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><NuxtLink to="/about">A propos</NuxtLink></li>
          <li><a>Patients</a></li>
          <li><a>Médecins</a></li>
          <li><a>Promoteurs</a></li>
        </ul>
      </div>
      <Logo />
    </div>
    
    <!-- navbar end -->
    <div class="navbar-end">

      <div class="hidden lg:flex">
      <ul class="menu menu-horizontal p-0">
        <li><NuxtLink to="/about" class="whitespace-nowrap text-white">A propos</NuxtLink></li>
        <li><a class="text-white">Patients</a></li>
        <li><a class="text-white">Médecins</a></li>
        <li><a class="text-white">Promoteurs</a></li>
      </ul>
    </div>

      <label for="my-login" class="text-white ml-5 btn-sm btn btn-primary btn-outline modal-button">Se connecter</label>
    </div>

</div>
</template>