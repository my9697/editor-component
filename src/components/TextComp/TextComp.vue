<script setup lang="ts">
import { defineProps } from 'vue'
import { textDefaultProps, textStylePropNames } from '../../common/defaultProps'
import { useCompCommon } from '../../hooks/useCompCommon'
import type { TextComponentProps } from '../../types/props'

const props = withDefaults(defineProps<TextComponentProps>(), {
  ...textDefaultProps
})

const { styleProps, handleClick, isAnimation } = useCompCommon(props, textStylePropNames)
</script>

<template>
  <component
    :is="tag"
    @click="handleClick"
    :style="styleProps"
    :class="['text-comp', isAnimation ? 'shake-animation' : '']"
  >
    {{ text }}
  </component>
</template>

<style scoped lang="less">
.text-comp {
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
