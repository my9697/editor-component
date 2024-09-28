<script setup lang="ts">
import {
  imageStylePropsNames
} from '../../common/defaultProps'
import { useCompCommon } from '../../hooks/useCompCommon'
import type { ImageComponentProps } from '../../types/props'

const props = withDefaults(defineProps<ImageComponentProps>(), {})
const { handleClick, styleProps } = useCompCommon(props, imageStylePropsNames)
</script>

<template>
  <div class="image-comp">
    <img :style="styleProps" :src="props.src" @click="handleClick" />
  </div>
</template>


<style scoped lang="less">
.image-comp {
  width: 100%;
  height: 100%;
}
</style>
