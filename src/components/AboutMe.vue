<template>
  <v-container>
    <v-layout
        text-xs-center
        wrap
    >
      <v-flex xs12>
        <v-img
            :src="require('../assets/avata.jpg')"
            class="my-3"
            contain
            height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-regular mb-3">
          Ting Ren
        </h1>
        <p style="font-size: 2rem;">
          Frontend Developer
        </p>
      </v-flex>

      <v-flex
          mb-5
          xs12
      >
        <p class="font-weight-regular mb-3" style="text-align: left; font-size: 1.3rem;">I am a frontend developer with
          a passion for frontend new technologies and frameworks. After obtaining my Bachelor’s and Master's degree, I
          worked as a
          frontend developer for 3+ years in multinational corporations: Infosys Technologies and Annik Consulting, and
          have worked on some big projects for clients like U.S. department store J. C. Penney, Toyota and
          Panasonic.</p>
        <p class="font-weight-regular mb-3" style="text-align: left; font-size: 1.3rem;">During my maternity break
          looking after two kids, I have been actively keep up with the frontend trends, and have learned and used the
          latest version of ReactJS and VueJS to create a couple of personal projects. Also I took the Certificate IV in
          Web-Based Technologies course at Tafe to brush up skills.</p>
        <p class="font-weight-regular mb-3" style="text-align: left; font-size: 1.3rem;">Currently I am seeking a
          frontend ReactJS or VueJS developer role, and I am very keen to jump into other popular Javascript frameworks
          such as Angular, etc.</p>
      </v-flex>

    </v-layout>

    <v-layout>
      <div>
        <transition name="slide-left" mode="out-in">
          <router-link to="/" style="text-decoration: none;">
            <v-btn round color="info" style="min-width: 1rem;">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </router-link>
        </transition>
      </div>

      <v-spacer></v-spacer>

      <div>
        <transition name="slide-right" mode="out-in">
          <router-link to="/skills" style="text-decoration: none;">
            <v-btn round color="info" style="min-width: 1rem;">
              <v-icon>chevron_right</v-icon>
            </v-btn>
          </router-link>
        </transition>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data: () => ({})
  }
</script>

<style>

</style>
