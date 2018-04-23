<template>

    <v-app style="background: white">

      <ayx-vue-toolbar app></ayx-vue-toolbar>
        <v-content>
          <v-container class="pt-1">

            <ayx-vue-nav></ayx-vue-nav>

            <v-divider></v-divider>

            <ayx-vue-page-one v-if="page == 'One'"></ayx-vue-page-one>
            <ayx-vue-page-two v-if="page == 'Two'"></ayx-vue-page-two>
            <ayx-vue-page-three v-if="page == 'Three'"></ayx-vue-page-three>

          </v-container>
        </v-content>

    </v-app>

</template>

<script>

  import AyxVueToolbar from './components/AyxVueToolbar.vue';
  import AyxVueNav from './components/AyxVueNav.vue';
  import AyxVuePageOne from './components/AyxVuePageOne.vue';
  import AyxVuePageTwo from './components/AyxVuePageTwo.vue';
  import AyxVuePageThree from './components/AyxVuePageThree.vue';

  export default {
    components: {
        AyxVueToolbar,
        AyxVueNav,
        AyxVuePageOne,
        AyxVuePageTwo,
        AyxVuePageThree
    },
    computed: {
      page() {
        return this.$store.state.ui.page
      }
    }
  }

</script>
