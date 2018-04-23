<template>

  <div>

    <div class="title text-xs-center my-3">
      Page <span class="light-blue--text text--darken-3">{{ page }}</span> with some text inputs
    </div>

    <form>
      <v-text-field
        label="Some URL"
        v-model="url"
        :error-messages="urlErrors">
      </v-text-field>
      <v-text-field
        label="Some Username"
        v-model="username"
        :error-messages="usernameErrors">
      </v-text-field>
      <v-text-field
        type="password"
        label="Some Password"
        v-model="password"
        :error-messages="passwordErrors">
      </v-text-field>
      <v-btn
        color="primary"
        @click="connect"
        :loading="loading">
        connect
      </v-btn>
    </form>

  </div>

</template>

<script>

import { required } from 'vuelidate/lib/validators';

  export default {
    name: 'AyxVuePageOne',
    validations: {
      url: { required },
      username: { required },
      password: { required }
    },
    data () {
      return {
        loading: false,
      }
    },
    computed: {
      page() {
        return this.$store.state.ui.page
      },
      url: {
        get () {
          return this.$store.state.ui.url
        },
        set (value) {
          this.$store.commit('updateUrl', value)
        }
      },
      username: {
        get () {
          return this.$store.state.ui.username
        },
        set (value) {
          this.$store.commit('updateUsername', value)
        }
      },
      password: {
        get () {
          return this.$store.state.ui.password
        },
        set (value) {
          this.$store.commit('updatePassword', value)
        }
      },
      urlErrors () {
        const errors = []
        if (!this.$v.url.$dirty) return errors
        !this.$v.url.required && errors.push('Some URL is required.')
        return errors
      },
      usernameErrors () {
        const errors = []
        if (!this.$v.username.$dirty) return errors
        !this.$v.username.required && errors.push('Some Username is required.')
        return errors
      },
      passwordErrors () {
        const errors = []
        if (!this.$v.password.$dirty) return errors
        !this.$v.password.required && errors.push('Some Password is required.')
        return errors
      }
    },
    methods: {
      connect() {

        // validate form
        this.$v.$touch()
        this.loading = true

        // do something
        alert('You would probably uses axios here for authorization or something')

        // when done, turn off the button loader
        this.loading = false
        
      }
    }
  }
</script>