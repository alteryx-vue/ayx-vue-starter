import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

// import axios from 'axios'
// (npm install --save axios) if you'd like to use axios for http requests 
import {store} from './store.js'
import App from './App.vue'

Vue.use(Vuetify)
Vue.use(Vuelidate)

// render app
const app = new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

window.Alteryx.Gui = window.Alteryx.Gui || {}

window.Alteryx.Gui.BeforeLoad = function (manager, AlteryxDataItems, json) {

  // let UI know to wait for decryption on auth config items
  store.state.config.decrypting.password = true

  // encrypt passwords ( thanks to GitHub user CodeSomeAlteryx )
  const handleEncryptedConfigField = (configFieldName) => {
    const encryptedDataItem = new AlteryxDataItems.SimpleString(configFieldName, { password: true })
    encryptedDataItem.fromJson(
      resolvedDecryptionValue => {
        store.state.ui[configFieldName] = resolvedDecryptionValue
        store.state.config.decrypting[configFieldName] = false
      },
      rejectedDecryption => {
        store.state.config.decrypting[configFieldName] = false
      },
      store.state.ui[configFieldName]
    )
    manager.addDataItem(encryptedDataItem)
  }

  // ensure that arrays stay arrays...
  const forceArray = (field) => {
    return (typeof field == 'string') ? [field] : ((typeof field == 'undefined') ? ([]) : (field))
  }

  // get peristed state from Alteryx Designer XML Config and pass to Vuex store
  store.state.ui = json.Configuration || store.state.ui
  store.state.ui.selections = forceArray(store.state.ui.selections)
  handleEncryptedConfigField('password')

}

window.Alteryx.Gui.GetConfiguration = (configObj) => {

  // fill in data items with latest values so encryption pass encrypts them
  window.Alteryx.Gui.Manager.getDataItem('password').setValue(store.state.ui.password)

  window.Alteryx.Gui.Manager.toJson(
    resolvedJson => {
      // resolvedJson has encrypted elements in it
      // give Vuex store to the Alteryx Designer XML config
      // console.log('Get Configuration: ' + JSON.stringify(resolvedJson.Configuration))
      window.Alteryx.JsEvent(JSON.stringify({
        Event: 'GetConfiguration',
        Configuration: {
          Configuration: { ...store.state.ui, ...resolvedJson.Configuration},
          Annotation: store.state.config.appTitle
        }
      }))
    },
    rejectedJson => {},
    false // macroMode - is this a macro backend tool? No.
  )

}
