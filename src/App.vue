<template>
  <v-app>
    <v-navigation-drawer
        v-model="drawer"
        :mini-variant.sync="mini"
        hide-overlay
        stateless
        dark
        app
    >
      <v-layout column fill-height>
        <v-toolbar flat class="transparent">
          <v-list class="pa-0">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img :src="require('./assets/avata.jpg')" id="logo">
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title>Ting Ren</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-btn
                    icon
                    @click.stop="mini = !mini"
                >
                  <v-icon>chevron_left</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>
        </v-toolbar>


        <v-list class="pt-0" dense>
          <v-divider></v-divider>

          <v-list-tile
              v-for="item in items"
              :key="item.title"
              @click=""
          >
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>
                <router-link :to="item.route" style="text-decoration: none; color: inherit;">{{ item.title }}
                </router-link>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-spacer></v-spacer>
        <v-list>
          <v-list-tile>
            <v-list-tile-action v-if="mini">
              <v-btn icon>
                <v-icon>chevron_right</v-icon>
              </v-btn>
            </v-list-tile-action>
            <v-list-tile-action v-if="!mini">
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-layout>

    </v-navigation-drawer>

    <v-content>
      <router-view/>
    </v-content>


  </v-app>
</template>

<script>
  export default {
    name: 'App',
    components: {
    },
    data() {
      return {
        drawer: true,
        items: [
          {title: 'Home', icon: 'home', route: '/'},
          {title: 'Tech Skills', icon: 'build', route: '/skills'},
          {title: 'Experience', icon: 'work', route: '/work'},
          {title: 'Contact', icon: 'contact_phone', route: '/contact'}
        ],
        mini: true,
        right: null
      }
    },
    methods: {}
  }
</script>

<style>
  #logo {
    font-size: 30px;
    color: #fff;
    -webkit-transition: all 1s;
    -moz-transition: all 1s;
    -o-transition: all 1s;
    -ms-transition: all 1s;
    transition: all 1s;
  }

  #logo:hover {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
</style>
