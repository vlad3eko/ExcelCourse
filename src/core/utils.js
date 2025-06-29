// Pure functions
export function capitalize(string) {
  if (typeof string !== 'string') {
    return 'fail'
  } else {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
}

export function range(start, end) {
  if (start > end) {
    /* eslint-disable */
    ;[end, start] = [start, end]
    /* eslint-disable */
  }
  return new Array(end - start + 1).fill('').map((_, index) => start + index)
}
