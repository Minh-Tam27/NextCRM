import { CalendarService } from '../../../services/calendar.service'

export default {
  calendars ({ commit }, params) {
    return CalendarService.getCalendarByUser(params)
      .then(user => console.log())
      .catch(error => commit('toast/NEW', { type: 'error', message: error.message }, { root: true }))
  }
}
