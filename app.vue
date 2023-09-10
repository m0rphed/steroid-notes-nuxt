<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div>
    <NuxtLayout>
      <nav class="flex align-center gap-4 p-4 bg-gray-700">
        <NuxtLink
          to="/" class="
            text-gray-400
            n-link-base
            cursor-pointer
            hover:text-green-400
            transition-colors
            duration-300
            ease-in-out
          "
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/upload" class="
            text-gray-400
            n-link-base
            cursor-pointer
            hover:text-green-400
            transition-colors
            duration-300
            ease-in-out
          "
        >
          Upload
        </NuxtLink>
      </nav>

      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
