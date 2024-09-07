import type { App } from 'vue'
import EditWrapper from './EditWrapper.vue'

EditWrapper.install = (app: App) => {
  app.component(EditWrapper.name as string, EditWrapper)
}

export default EditWrapper
