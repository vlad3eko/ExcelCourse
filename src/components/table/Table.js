import { ExcelComponent } from '@/core/ExcelComponent'
import { createTable } from '@/components/table/table.template'
import { resizeHandler } from '@/components/table/table.resize'
import { shouldResize } from '@/components/table/table.functions'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown'],
    })
  }

  toHTML() {
    return createTable(20)
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.$root, event)
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
