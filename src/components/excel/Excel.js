import {$} from "../../core/dom";

export class Excel {
	constructor(selector, option) {
		this.$el = document.querySelector(selector)
		this.component = option.components || []
	}

	getRoot() {
		const $root = $.create('div', 'excel')

		this.component.forEach(Component => {
			const $el = $.create('div', Component.className)
			const component = new Component($el)
			$el.innerHTML = component.toHTML()
			$root.append($el)
		})

		return $root
	}

	render() {
		this.$el.append(this.getRoot())
	}
}

