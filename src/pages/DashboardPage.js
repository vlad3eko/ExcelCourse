import { Page } from '@core/Page'
import { $ } from '@core/dom'
import { createRecordTable, getAllRecords } from './dashboard.functions'

export class DashboardPage extends Page {
  getRoot() {
    const now = Date.now().toString()
    return $.create('div', 'db').html(`
        <div class="db__header">
          <h1>Excel Dashboard 07.06.25</h1>
        </div>

        <div class="db__new">
          <div class="db__view">
            <a class="db__create" href="#excel/${now}">
              Новая <br />
              Таблица
            </a>
          </div>
        </div>

        <div class="db__table db__view">
          ${createRecordTable()}
        </div>
    `)
  }
}
