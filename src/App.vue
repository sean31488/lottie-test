<template>
  <div class="pt-[74px]">
    <div class="fixed inset-x-0 top-0 z-10 overflow-auto bg-gray-300 p-2 text-lg opacity-80">
      <div class="flex">
        <div class="flex-none border-r border-gray-500 pr-4">
          <label class="block pl-2 pr-5">
            <input v-model="widthType" type="radio" value="wFull">
            width 100%
          </label>
          <label class="pl-2">
            <input v-model="widthType" type="radio" value="wCustom">
            width:
            <input
              v-model="widthModel"
              class="w-20 rounded border bg-white"
              @focus="widthType = 'wCustom'"> px
          </label>
        </div>
        <div class="px-4">
          <label>
            background: <input v-model="background" class="w-32 rounded border bg-white">
          </label>
        </div>
      </div>
    </div>
    <div v-for="animation in animations" :key="animation.key" class="border-b border-gray-400">
      <p class="border-b border-gray-200">{{ animation.key }}</p>
      <div :style="{ background }">
        <Vue3Lottie :animation-data="animation.value" :width="width" class="max-w-full" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { Vue3Lottie } from 'vue3-lottie'
import _ from 'lodash'
import { computed, ref } from 'vue'

const jsonFiles = import.meta.glob(
  '/src/assets/json-files/**',
  { import: 'default', eager: true }
)
const animations = _.map(jsonFiles, (value, key) => ({ key, value }))

const widthType = ref('wCustom')
const widthModel = ref('300')
const width = computed(() => widthType.value === 'wFull' ? '100%' : `${widthModel.value}px`)

const background = ref('#ffffff')
</script>

<style lang="scss" scoped>

</style>
