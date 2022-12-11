<script setup lang="ts">
const router = useRouter();
const name = ref('');

const handleGo = () => {
  if (name.value) {
    router.push({ name: 'Hi', params: { name: name.value } });
  }
};
</script>

<template>
  <div flex h-full items-center justify-center flex-col>
    <h3 text-3xl>Hello World</h3>
    <p text-coolGray>Deploy by Zeabur.</p>
    <input
      v-model="name"
      type="text"
      mt-8
      p="x-4 y-1"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      placeholder="What's your name?"
      @keyup.enter="handleGo"
    />
    <button
      m-3
      text-sm
      rounded
      inline-block
      bg-teal-600
      text-white
      cursor-pointer
      hover:bg-teal-700
      p="x-4 y-1"
      class="disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50"
      :disabled="!name"
      @click="handleGo"
    >
      Go
    </button>
  </div>
</template>
