<template>
  <div>
    <nav class="align-center flex gap-4 bg-gray-700 p-4">
      <NuxtLink
        to="/"
        class="n-link-base cursor-pointer text-gray-400 transition-colors duration-300 ease-in-out hover:text-green-400"
      >
        Home
      </NuxtLink>
      <NuxtLink
        to="/upload"
        class="n-link-base cursor-pointer text-gray-400 transition-colors duration-300 ease-in-out hover:text-green-400"
      >
        Upload
      </NuxtLink>
      <NuxtLink
        to="/editor"
        class="n-link-base cursor-pointer text-gray-400 transition-colors duration-300 ease-in-out hover:text-green-400"
      >
        Editor
      </NuxtLink>
    </nav>
    <NuxtPage />
    <UNotifications />
  </div>
</template>
