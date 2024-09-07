import type { App } from 'vue'
import TextComp from './TextComp.vue'

TextComp.install = (app: App) => {
  app.component(TextComp.name as string, TextComp)
}

export default TextComp
