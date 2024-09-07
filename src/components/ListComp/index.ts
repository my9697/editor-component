import type { App } from 'vue'
import ListComp from './ListComp.vue'

ListComp.install = (app: App) => {
  app.component(ListComp.name as string, ListComp)
}

export default ListComp
