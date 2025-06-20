import { $ } from 'core/dom'

export function resizeHandler($root, event) {
  const $resizer = $(event.target)
  // const $parent = $resizer.$el.parentNode // Плохо
  // const $parent = $resizer.$el.closest('.column') // Плохо но лучше
  const $parent = $resizer.closest('[data-type="resizable"]')
  const coords = $parent.getCoords()
  const type = $resizer.data.resize
  const sideProp = type === 'col' ? 'bottom' : 'right'
  let value

  $resizer.css({
    opacity: 1,
    [sideProp]: '-5000px',
  })

  document.onmousemove = (e) => {
    if (type === 'col') {
      const delta = Math.floor(e.pageX - coords.right)
      value = coords.width + delta
      $resizer.css({ right: -delta + 'px' })
    } else {
      const delta = Math.floor(e.pageY - coords.bottom)
      value = coords.height + delta
      $resizer.css({ bottom: -delta + 'px' })
    }
  }

  document.onmouseup = () => {
    document.onmousemove = null
    document.onmouseup = null

    if (type === 'col') {
      $parent.css({ width: Math.floor(value) + 'px' })
      $root.findAll(`[data-col="${$parent.data.col}"]`).forEach((el) => (el.style.width = value + 'px'))
    } else {
      $parent.css({ height: Math.floor(value) + 'px' })
    }

    $resizer.css({
      opacity: 0,
      bottom: 0,
      right: 0,
    })
  }
}
