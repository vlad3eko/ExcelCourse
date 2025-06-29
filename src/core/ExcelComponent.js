import { DomListener } from './DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.unsubscribers = []

    this.prepare()
  }

  // Настраивает компонент до init
  prepare() {}
  // Возвращает шаблон компонетна
  toHTML() {
    return ''
  }

  // Уведомляем слушателей про событие event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // Подписываемся на событие event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  // Инициализируем компонент
  // Добавляем дом слушатели
  init() {
    this.initDomListeners()
  }

  // Удаляем компонент
  // Чистим слушатели
  destroy() {
    this.removeDomListeners()
    this.unsubscribers.forEach((unsub) => unsub())
  }
}
