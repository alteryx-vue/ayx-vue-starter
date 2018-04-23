import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		config: {
			appTitle: 'Alteryx Vue Starter',
			appVersion: 'v1.0.0',
			icon: 'icon.png',
			pages: [
			  { id: 0, name: 'One', icon: 'power_settings_new' },
			  { id: 1, name: 'Two', icon: 'folder_open' },
			  { id: 2, name: 'Three', icon: 'filter_list' },
			],
			decrypting: {
				password: false
			}
		},
		ui: {
			selections: [],
			dropSelection: 'North Carolina',
			page: 'One',
			url: 'https://example.domain.com',
			username: 'DefaultUsername',
			password: ''
		}
	},
	mutations: {
	  updatePage (state, v) {
	  	state.ui.page = v
	  },
	  updateSelections (state, v) {
	  	state.ui.selections = v
	  },
	  updateDropSelection (state, v) {
	  	state.ui.dropSelection = v
	  },
	  updateUrl (state, v) {
	    state.ui.url = v
	  },
	  updateUsername (state, v) {
	    state.ui.username = v
	  },
	  updatePassword (state, v) {
	    state.ui.password = v
	  }
	}
})
