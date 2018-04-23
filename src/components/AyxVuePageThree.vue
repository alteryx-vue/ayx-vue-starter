<template>

  <div>

    <div class="title text-xs-center my-3">
      Page <span class="light-blue--text text--darken-3">{{ page }}</span> with some random stuff
    </div>

    <div>
      <div class="subheader">Buttons</div>
      <v-btn color="success">Success</v-btn>
      <v-btn color="error">Error</v-btn>
      <v-btn color="warning">Warning</v-btn>
      <v-btn color="info">Info</v-btn>
    </div>

    <v-divider class="my-2"></v-divider>

    <div>
    <div class="subheader">Switch</div>
      <v-switch
        label="Toggle me.."
        v-model="toggle"
      ></v-switch>
    </div>

<v-divider class="my-2"></v-divider>

  <v-layout>
    <v-flex xs12>
      <v-card>
        <v-card-media src="./public/alteryxomnibus.jpg" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">The Alteryx Omnibus</h3>
            <div>This is a card...Would ya just look at it?</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="light-blue darken-3">Share</v-btn>
          <v-btn flat color="light-blue darken-3">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>

  </div>

</template>

<script>
  export default {
    name: 'AyxVuePageThree',
    data() {
      return {
        toggle: false
      }
    },
    computed: {
      page() {
        return this.$store.state.ui.page
      }
    }
  }
</script>