<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <div flex h-full items-center justify-center flex-col>
    <h3 text-3xl>Hi, {{ route.params.name }}</h3>
    <p text-coolGray>Deploy by Zeabur.</p>
  </div>
</template>
