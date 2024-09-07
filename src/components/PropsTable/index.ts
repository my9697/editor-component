import type { App } from 'vue'
import PropsTable from './PropsTable.vue'

PropsTable.install = (app: App) => {
  app.component(PropsTable.name as string, PropsTable)
}

export default PropsTable
