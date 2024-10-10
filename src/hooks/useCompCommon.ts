import type { AllComponentProps } from '../types/props'
import { pick } from 'lodash-es'
import { computed, ref } from 'vue'

export const useCompCommon = (props: Partial<AllComponentProps>, styleNames: string[]) => {
  const styleProps = computed(() => pick(props, styleNames))

  const isAnimation = ref(false)
  const handleClick = () => {
    if (props.actionType === 'url' && props.url) {
      window.location.href = props.url
    } else if (props.actionType === 'animation') {
      isAnimation.value = true
    }
  }

  return { styleProps, handleClick, isAnimation }
}
