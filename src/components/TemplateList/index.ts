import type { App } from 'vue'
import TemplateList from './TemplateList.vue'

TemplateList.install = (app: App) => {
  app.component(TemplateList.name as string, TemplateList)
}

export default TemplateList
