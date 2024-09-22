import { type App } from 'vue'
import ImageComp from './components/ImageComp'
import TextComp from './components/TextComp'
import FinalComp from './components/FinalComp'

const components = [ImageComp, TextComp, FinalComp]

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name as string, component)
  })
}

export { install, ImageComp, TextComp, FinalComp }

export default {
  install
}

export {
  type ComponentData,
  type PageData,
  commonDefaultProps,
  imageDefaultProps,
  imageStylePropsNames,
  isEditingProp,
  shapeDefaultProps,
  shapeStylePropsNames,
  textDefaultProps,
  textStylePropNames,
  transformToComponentProps
} from './common/defaultProps'
