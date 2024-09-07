import type { App } from 'vue'
import ImageComp from './ImageComp.vue'

ImageComp.install = (app: App) => {
  app.component(ImageComp.name as string, ImageComp)
}

export default ImageComp
