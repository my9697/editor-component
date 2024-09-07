<script setup lang="ts">
import type { VNode } from 'vue'

interface RenderType {
  content: string | VNode
  fontFamily: string
}

const props = defineProps<RenderType>()
</script>

<template>
  <div :style="{ fontFamily: props.fontFamily }">{{ props.content }}</div>
</template>

<style scoped lang="less"></style>
