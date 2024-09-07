import type { App } from 'vue'
import ListComp from './src/components/ListComp.vue'
import PropsTable from './src/components/PropsTable.vue'
import EditWrapper from './src/components/EditWrapper.vue'
import Uploader from './src/components/Uploader.vue'
import TemplateList from './src/components/TemplateList.vue'
import TextComp from './src/components/TextComp.vue'

const components = [ListComp, PropsTable, EditWrapper, Uploader, TemplateList, TextComp]

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name as string, component)
  })
}

export { ListComp, install, PropsTable, EditWrapper, Uploader, TemplateList, TextComp }

export default {
  install
}
