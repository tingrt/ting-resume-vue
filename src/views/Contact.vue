<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex mb-5>
        <h1 class="display-2 font-weight-regular mb-3">
          Contact Me
        </h1>
      </v-flex>
    </v-layout>

    <v-layout wrap>
      <v-flex
          mb-5 xs10 offset-xs1 md8 offset-md2
      >
        <v-card flat class="mt-2" v-for="item in contactArr" :key="item.title">
          <v-card-title>
            <div>
              <div class="font-weight-bold" style="font-size: 1.3rem;">{{item.title}}</div>
              <span style="font-size: 1.2rem;">{{item.text}}</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout class="mt-5">
      <div>
        <router-link to="/work" style="text-decoration: none;">
          <v-btn round color="info" style="min-width: 1rem;">
            <v-icon>chevron_left</v-icon>
          </v-btn>
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <div>
        <router-link to="/" style="text-decoration: none;">
          <v-btn round color="info" style="min-width: 1rem;">
            <v-icon>chevron_right</v-icon>
          </v-btn>
        </router-link>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      contactArr: [
        {title: 'Mobile', text: '0444 532 444'},
        {title: 'Email', text: 'tingren2016@gmail.com'},
        {title: 'Github', text: 'https://github.com/tingrt'},
        {
          title: '',
          text: 'Currently I am seeking a frontend ReactJS or VueJS developer role, and I am also happy to jump into other popular Javascript frameworks such as Angular, etc.'
        },
      ]
    })
  }
</script>

<style>

</style>
