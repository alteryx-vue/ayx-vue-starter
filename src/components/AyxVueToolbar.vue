<template>

  <v-toolbar app dense fixed color="grey lighten-2">
    <img src="icon.png" :alt="appTitle" height="24">
    <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-bottom-sheet>
    
      <v-btn icon slot="activator">
          <v-icon medium>info_outline</v-icon>
      </v-btn>

      <v-card tile>
        <v-list two-line dark>
          <v-subheader>Version:<span class="ml-2 blue--text text--lighten-2">{{ curVersion }}</span></v-subheader>

          <v-list-tile href="https://github.com/alteryx-vue/ayx-vue-starter" target="_blank">
            <v-list-tile-avatar>
              <v-avatar size="32px" tile>
                <img src="public/github.png">
              </v-avatar>
            </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>View project on GitHub</v-list-tile-title>
                <v-list-tile-sub-title>github.com/alteryx-vue/ayx-vue-starter</v-list-tile-sub-title>
              </v-list-tile-content>
          </v-list-tile>

          <v-divider></v-divider>

          <v-list-tile href="https://vuejs.org" target="_blank">
            <v-list-tile-avatar>
              <v-avatar size="32px" tile>
                <img src="public/vuejs.png">
              </v-avatar>
            </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Powered by Vue.js</v-list-tile-title>
                <v-list-tile-sub-title>Progressive JavaScript Framework</v-list-tile-sub-title>
              </v-list-tile-content>
          </v-list-tile>

          <v-divider></v-divider>

          <v-list-tile href="https://next.vuetifyjs.com" target="_blank">
            <v-list-tile-avatar>
              <v-avatar size="32px" tile>
                <img src="public/vuetify.png">
              </v-avatar>
            </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Built using Vuetify</v-list-tile-title>
                <v-list-tile-sub-title>Semantic Material Design Component Framework for Vue.js</v-list-tile-sub-title>
              </v-list-tile-content>
          </v-list-tile>

        </v-list>
      </v-card>
    </v-bottom-sheet>


  </v-toolbar>

</template>

<script>
  export default {
    name: 'AyxVueToolbar',
    data () {
      return {
        toolbarClass: 'grey--text'
      }
    },
    computed: {
      appTitle() {
        return this.$store.state.config.appTitle
      },
      curVersion() {
          return this.$store.state.config.appVersion
      }
    }
  }
</script>

