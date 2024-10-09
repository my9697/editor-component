<script setup lang="ts">
import { imageDefaultProps, imageStylePropsNames } from '../../common/defaultProps'
import { useCompCommon } from '../../hooks/useCompCommon'
import type { ImageComponentProps } from '../../types/props'

const props = withDefaults(defineProps<ImageComponentProps>(), { ...imageDefaultProps })
const { handleClick, styleProps, isAnimation } = useCompCommon(props, imageStylePropsNames)
</script>

<template>
  <component
    :is="tag"
    @click="handleClick"
    :style="styleProps"
    :class="['image-comp', isAnimation ? 'shake-animation' : '']"
  >
    <img :src="props.src" />
  </component>
</template>

<style scoped lang="less">
.image-comp {
  width: 100%;
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
