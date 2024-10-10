<script setup lang="ts">
import { imageDefaultProps, imageStylePropsNames } from '../../common/defaultProps'
import { useCompCommon } from '../../hooks/useCompCommon'
import type { AllComponentProps } from '../../types/props'

const props = withDefaults(defineProps<AllComponentProps>(), { ...imageDefaultProps })
const { handleClick, styleProps, isAnimation } = useCompCommon(props, imageStylePropsNames)
</script>

<template>
  <img
    :src="props.src"
    :style="styleProps"
    :draggable="false"
    @click.prevent="handleClick"
    :class="['image-comp', isAnimation ? 'shake-animation' : '']"
  />
</template>

<style scoped lang="less">
.image-comp {
  max-width: 100%;
  height: 100%;
}

.shake-animation {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }
  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
