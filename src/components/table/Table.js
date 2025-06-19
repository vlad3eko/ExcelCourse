import { ExcelComponent } from '../../core/ExcelComponent'
import { createTable } from '@/components/table/table.template'
import { $ } from 'core/dom'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    })
  }

  toHTML() {
    return createTable()
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      const $resizer = $(event.target)
      // const $parent = $resizer.$el.parentNode // Плохо
      // const $parent = $resizer.$el.closest('.column') // Плохо но лучше
      const $parent = $resizer.closest('[data-type="resizable"]')
      const coords = $parent.getCoords()
      const type = $resizer.data.resize
      console.log(type)

      const cells = this.$root.findAll(`[data-col="${$parent.data.col}"]`)

      document.onmousemove = (e) => {
        if (type === 'col') {
          const delta = Math.floor(e.pageX - coords.right)
          const value = coords.width + delta
          $parent.css({
            width: Math.floor(value) + 'px',
          })
          cells.forEach((el) => (el.style.width = value + 'px'))
        } else {
          const delta = Math.floor(e.pageY - coords.bottom)
          const value = coords.height + delta
          $parent.css({
            height: Math.floor(value) + 'px',
          })
          cells.forEach((el) => (el.style.height = value + 'px'))
        }
      }

      document.onmouseup = () => {
        document.onmousemove = null
      }
    }
  }
}

/*
 Range: 0 ms – 8.35 s
 Rendering673 ms
 Painting548 ms
 System443 ms
 Scripting124 ms
 Total8,351 ms
 */

/*
* Range: 0 ms – 12.95 s
 Rendering684 ms
 Painting569 ms
 System447 ms
 Scripting71 ms
 Total12,951 ms*/
