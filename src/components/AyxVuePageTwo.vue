<template>

  <div>

    <div class="title text-xs-center my-3">
      Page <span class="light-blue--text text--darken-3">{{ page }}</span> with a select and some checkboxes
    </div>

    <v-layout row wrap>
      <v-flex xs12>
        <v-select
          :items="states"
          v-model="dropSelection"
          label="Select a State"
          auto
          prepend-icon="map"
          hide-details
        ></v-select>
      </v-flex>
      <v-flex xs12 class="my-3"></v-flex>
      <v-flex xs12>
        <v-list dense two-line>
          <v-subheader>Some Chex</v-subheader>
          <template v-for="option in options">
            <v-list-tile :key="option.id">
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ option.name }}
                </v-list-tile-title>
                <v-list-tile-sub-title>
                    {{ option.description }}
                </v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-checkbox v-model="optSelection" :value="option.id" @change="updateSelections()"></v-checkbox>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider></v-divider>
          </template>
        </v-list>
      </v-flex>
    </v-layout>

  </div>

</template>

<script>
  export default {
    name: 'AyxVuePageTwo',
    data() {
      return {
        options: [
          {id: '1', name: 'Blue', description: 'The color blue'},
          {id: '2', name: 'Yellow', description: 'The color yellow'},
          {id: '3', name: 'Green', description: 'The color green'}
        ],
        states: [
          'Alabama', 'Alaska', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
        ],
        optSelection: this.$store.state.ui.selections
      }
    },
    computed: {
      page() {
        return this.$store.state.ui.page
      },
      dropSelection: {
        get () {
          return this.$store.state.ui.dropSelection
        },
        set (value) {
          this.$store.commit('updateDropSelection', value)
        }
      }
    },
    methods: {
      updateSelections() {
          this.$store.commit('updateSelections',this.optSelection)
        }
    }
  }
</script>