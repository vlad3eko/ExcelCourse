export function parse(value = '') {
  if (value.startsWith('=')) {
    console.log(1)
    try {
      console.log(2)
      return eval(value.slice(1))
    } catch (e) {
      console.log(3, e)
      return value
    }
  }
  console.log(4)
  return value
}
