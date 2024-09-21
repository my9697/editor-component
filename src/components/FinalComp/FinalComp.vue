<template>
  <div class="final-page" :style="page && page.props">
    <div v-for="item in components" :key="item.id" :id="`component-${item.id}`">
      <component :is="item.name" v-bind="item.props" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ComponentData, PageData } from '../../common/defaultProps'

defineProps<{
  page: PageData
  components: ComponentData[]
}>()
</script>
