import { ExcelComponent } from 'core/ExcelComponent'

export class Toolbar extends ExcelComponent {
  static className = 'excel__toolbar'

  constructor($root, options) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click'],
      ...options,
    })
  }
  toHTML() {
    return `
	   <div class="button">
  <span class="material-symbols-outlined">
   format_bold
  </span>
   </div>
   <div class="button">
   <span class="material-symbols-outlined">
   format_italic
  </span>
   </div>
   <div class="button">
    <span class="material-symbols-outlined">
     strikethrough_s
    </span>
   </div>
   <div class="button">
   <span class="material-symbols-outlined">
      text_format
    </span>
  </div>
   <div class="button">
    <span class="material-symbols-outlined">
     colors
    </span>
  </div>
  <div class="button">
  <span class="material-symbols-outlined">
  border_all
  </span>
  </div>
    <div class="button">
  <span class="material-symbols-outlined">
  vertical_align_bottom
  </span>
  </div>
   <div class="button">
   <span class="material-symbols-outlined">
   format_align_left
  </span>
   </div>
   <div class="button">
   <span class="material-symbols-outlined">
   format_align_center
  </span>
   </div>
   <div class="button">
   <span class="material-symbols-outlined">
   format_align_right
  </span>
   </div>
	`
  }

  onClick(event) {
    console.log(event.target)
  }
}
