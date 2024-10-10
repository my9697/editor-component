<script setup lang="ts">
import { imageDefaultProps, imageStylePropsNames } from '../../common/defaultProps'
import { useCompCommon } from '../../hooks/useCompCommon'
import type { AllComponentProps } from '../../types/props'

const props = withDefaults(defineProps<AllComponentProps>(), { ...imageDefaultProps })
const { handleClick, styleProps } = useCompCommon(props, imageStylePropsNames)
</script>

<template>
  <img
    :src="props.src"
    :style="styleProps"
    :draggable="false"
    @click.prevent="handleClick"
    :class="['image-comp']"
  />
</template>

<style scoped lang="less"></style>
