<template>

  <v-tabs fixed centered class="mb-2" v-model="page">
    <v-tabs-bar class="transparent">
      <v-tabs-slider class="blue"></v-tabs-slider>    
          <v-tabs-item
            v-for="p in pages"
            :key="p.id"
            :href="`#${p.name}`"
            class="primary--text">
            <span style="font-size: 12px;">{{ p.name }}</span>
          </v-tabs-item>
    </v-tabs-bar>
  </v-tabs>

</template>

<script>

  export default {
    name: 'AyxVueNav',
    computed: {
      page: {
        get () {
          return this.$store.state.ui.page
        },
        set (value) {
          this.$store.commit('updatePage', value)
        }
      },
      pages() {
        return this.$store.state.config.pages
      }
    },
    methods: {
      setPage(p) {
        this.$store.commit('updatePage',p)
      }
    }
  }
</script>

