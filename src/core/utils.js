// Pure functions
import { defaultStyles } from '@/constants'

export function capitalize(string) {
  if (typeof string !== 'string') {
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function range(start, end) {
  if (start > end) {
    /* eslint-disable */
    ;[end, start] = [start, end]
    /* eslint-disable */
  }
  return new Array(end - start + 1).fill('').map((_, index) => start + index)
}

export function storage(key, data = null) {
  if (!data) {
    return JSON.parse(localStorage.getItem(key))
  }
  localStorage.setItem(key, JSON.stringify(data))
}

export function isEqual(a, b) {
  if (typeof a === 'object' && b === 'object') {
    return JSON.stringify(a) === JSON.stringify(b)
  }
  return a === b
}

export function camelToDashCase(str) {
  return str.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`)
}

export function toInlineStyles(styles = {}) {
  return Object.keys(styles)
    .map((key) => `${camelToDashCase(key)}: ${styles[key]}`)
    .join(';')
}

export function debounce(fn, wait) {
  let timeout
  return function (...arg) {
    const later = () => {
      clearTimeout(timeout)
      fn.apply(this, arg)
      // fn(...arg)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export function clone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

export function preventDefault(event) {
  event.preventDefault()
}
