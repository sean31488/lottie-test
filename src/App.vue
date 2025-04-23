<template>
  <div class="flex flex-wrap">
    <div v-for="animation in animations"
         :key="animation.key"
         class="max-h-[50vh] w-[50vw] border-b border-r border-gray-300 p-4">
      <p>{{ animation.key }}</p>
      <Vue3Lottie :animation-data="animation.value" />
    </div>
  </div>
</template>

<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import _ from 'lodash'

const jsonFiles = import.meta.glob(
  '/src/assets/json-files/**',
  { import: 'default', eager: true }
)

const animations = _.map(jsonFiles, (value, key) => ({ key, value }))
</script>

<style lang="scss" scoped>

</style>
