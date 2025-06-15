import { $ } from '../../core/dom'

export class Excel {
  constructor(selector, option) {
    this.$el = $(selector)
    this.component = option.components || []
  }

  getRoot() {
    const $root = $.create('div', 'excel')
    this.component = this.component.map((Component) => {
      const $el = $.create('div', Component.className)
      const component = new Component($el)
      // DEBUG
      // if (component.name) {
      //   window['c' + component.name] = component
      // }
      $el.html(component.toHTML())
      $root.append($el)
      return component
    })

    return $root
  }

  render() {
    this.$el.append(this.getRoot())
    this.component.forEach((component) => component.init())
  }
}
