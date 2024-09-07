import type { App } from 'vue'
import ImageComp from './src/components/ImageComp.vue'
import TextComp from './src/components/TextComp.vue'

const components = [ImageComp, TextComp]

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name as string, component)
  })
}

export { install, ImageComp, TextComp }

export default {
  install
}
