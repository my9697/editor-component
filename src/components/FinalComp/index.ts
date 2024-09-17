import type { App } from 'vue'
import FinalComp from './FinalComp.vue'

FinalComp.install = (app: App) => {
  app.component(FinalComp.name as string, FinalComp)
}

export default FinalComp
