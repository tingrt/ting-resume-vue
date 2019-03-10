<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex mb-4>
        <h1 class="display-2 font-weight-regular mb-3">
          Technical Skills
        </h1>
      </v-flex>
    </v-layout>

    <v-layout wrap>
      <v-flex mb-5 xs12 sm6 v-for="skill in skills" :key="skill.id">
        <div class="skill-container">
          <div class="item">
            <div class="item-icon">
              <i :class="skill.styleName"></i>
            </div>
            <div class="item-info">
              <p class="info-title">{{ skill.title }}</p>
              <p class="info-desc">{{ skill.desc }}</p>
            </div>
          </div>
        </div>
      </v-flex>
    </v-layout>

    <v-layout>
      <div>
        <router-link to="/" style="text-decoration: none;">
          <v-btn round color="info" style="min-width: 1rem;">
            <v-icon>chevron_left</v-icon>
          </v-btn>
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <div>
        <router-link to="/work" style="text-decoration: none;">
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
      skills: [
        {
          id: 0,
          styleName: 'iconfont icon-html',
          title: 'HTML5',
          desc: 'Proficient understanding of web markup: HTML and HTML5 new features. Creating websites using Responsive Web Design.'
        },
        {
          id: 1,
          styleName: 'iconfont icon-css',
          title: 'CSS3',
          desc: 'Good skills in using CSS/CSS3 to style web pages and create animations/transitions.'
        },
        {
          id: 2,
          styleName: 'iconfont icon-javascript',
          title: 'ES5/6',
          desc: 'Good understanding of ES5, as well as ES6&7 features(class, arrow function, destructuring，etc.). Extensive usage in projects.'
        },
        {
          id: 3,
          styleName: 'iconfont icon-react',
          title: 'React.js',
          desc: 'Good skills of using React.JS to create SPA web apps. Familiar with React ecosystem tools such as React Router, Redux, etc.'
        },
        {
          id: 4,
          styleName: 'iconfont-vue icon-vue',
          title: 'React.js',
          desc: 'Started to use Vue.JS to create web apps since its initial release. Skills of using Vue-Router, Vuex, etc.'
        },
        {id: 5, styleName: 'iconfont icon-jquery', title: 'jQuery', desc: 'Good skills of using jQuery and jQuery UI.'},
        {
          id: 6,
          styleName: 'iconfont icon-sass',
          title: 'Sass/Less',
          desc: 'Familiar with CSS CSS preprocesso such Sass and Less'
        },
        {
          id: 7,
          styleName: 'iconfont icon-frame',
          title: 'UI Library',
          desc: 'Good command of using propular frontend UI library such as Bootstrap, Material UI, Ant design, etc.'
        },
        {
          id: 8,
          styleName: 'iconfont icon-tools',
          title: 'Tooling',
          desc: 'Familiar with modern frontend tooling like Babel, Npm, Yarn, Webpack'
        },
        {
          id: 9,
          styleName: 'iconfont icon-Programming',
          title: 'Git',
          desc: 'Use Git to manage version control, good understanding of popular Git flow and Agile development methodology'
        }
      ]
    })
  }
</script>

<style>
  @font-face {
    font-family: "iconfont";
    src: url('../assets/fonts/iconfont.eot?t=1485850871722'); /* IE9*/
    src: url('../assets/fonts/iconfont.eot?t=1485850871722#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('../assets/fonts/iconfont.woff?t=1485850871722') format('woff'), /* chrome, firefox */ url('../assets/fonts/iconfont.ttf?t=1485850871722') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/ url('../assets/fonts/iconfont.svg?t=1485850871722#iconfont') format('svg'); /* iOS 4.1- */
  }

  @font-face {
    font-family: "iconfont-vue";
    src: url('../assets/vue-fonts/iconfont.eot?t=1485850871722'); /* IE9*/
    src: url('../assets/vue-fonts/iconfont.eot?t=1485850871722#iefix') format('embedded-opentype'), /* IE6-IE8 */ url('../assets/vue-fonts/iconfont.woff?t=1485850871722') format('woff'), /* chrome, firefox */ url('../assets/vue-fonts/iconfont.ttf?t=1485850871722') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/ url('../assets/vue-fonts/iconfont.svg?t=1485850871722#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont, .iconfont-vue {
    min-width: 14px;
    margin-right: 8px;
    transition: all .3s;
    display: inline-block;
    font-style: normal;
    vertical-align: baseline;
    text-align: center;
    text-transform: none;
    line-height: 1;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .iconfont:before {
    display: block;
    font-family: "iconfont" !important;
  }

  .iconfont-vue:before {
    display: block;
    font-family: "iconfont-vue" !important;
  }

  .icon-link:before {
    content: "\e60a";
  }

  .icon-coordinate:before {
    content: "\e650";
  }

  .icon-experience:before {
    content: "\e6de";
  }

  .icon-english1:before {
    content: "\e61e";
  }

  .icon-index:before {
    content: "\e637";
  }

  .icon-github:before {
    content: "\e735";
  }

  .icon-state:before {
    content: "\e621";
  }

  .icon-Programming:before {
    content: "\e6ab";
  }

  .icon-project:before {
    content: "\e604";
  }

  .icon-contact:before {
    content: "\e6cc";
  }

  .icon-html:before {
    content: "\e601";
  }

  .icon-jquery:before {
    content: "\e605";
  }

  .icon-about:before {
    content: "\e60f";
  }

  .icon-intention:before {
    content: "\e692";
  }

  .icon-email:before {
    content: "\e60c";
  }

  .icon-javascript:before {
    content: "\e608";
  }

  .icon-skill:before {
    content: "\e651";
  }

  .icon-tools:before {
    content: "\e603";
  }

  .icon-css:before {
    content: "\e60e";
  }

  .icon-sass:before {
    content: "\e646";
  }

  .icon-react:before {
    content: "\e770";
  }

  .icon-vue:before {
    content: "\e640";
  }

  .icon-frame:before {
    content: "\e607";
  }

  .skill-container .item {
    width: 100%;
    height: 100%;
    display: flex;
    display: -webkit-flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1em;
    margin-left: 1em;
  }

  .skill-container .item-icon {
    width: 4em;
    height: 4em;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    justify-content: center;
  }

  .skill-container .item-icon i {
    font-size: 4em;
    color: dodgerblue;
  }

  .skill-container .item-info {
    margin-left: 1em;
    height: 100%;
    width: 60%;
  }

  .skill-container .info-title {
    font-size: 2em;
    color: dodgerblue;
    line-height: 2em;
  }

  .skill-container .info-desc {
    font-size: 1.5em;
    color: dimgray;
  }

  .skill-container .info-desc {
    font-size: 1.2em;
  }

</style>
