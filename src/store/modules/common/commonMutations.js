export default {
  SET_CONFIG_SYSTEM (state, data) {
    if (data.success) {
      const dataPurposes = []
      const dataDepositType = []
      const dataService = [{
        id: 0,
        text: 'Tất cả'
      }]
      const dataConfigMcc = []
      data.data.purposes.map(e => {
        dataPurposes.push({ id: e.code, text: e.name })
      })
      data.data.services.map(e => {
        dataService.push({ id: e.code, text: e.name, active: e.orderActive, contractType: e.contractType, depositType: e.depositType, devices: e.devices })
      })
      data.data.businessFields.map(e => {
        dataConfigMcc.push({ id: e.code, text: e.name })
      })
      state.dataConfigPurposes = dataPurposes
      state.dataConfigService = dataService
      state.dataConfigMcc = dataConfigMcc
      state.depositType = dataDepositType
    }
  },

  SET_CONFIG_CCRP (state, data) {
    if (data.success) {
      const dataLocation = []
      data.data.map(e => {
        dataLocation.push({ id: e.code, text: e.name })
      })
      state.dataConfigLocation = dataLocation
    }
  },

  SET_CONFIG_REGION (state, data) {
    if (data.success) {
      const dataRegion = []
      data.data.map(e => {
        dataRegion.push({ id: e.code, text: e.name })
      })
      state.dataConfigRegion = dataRegion
    }
  },

  RETURN_DATA_UPLOAD_IMG () {}
}
