<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex mb-4>
        <h1 class="display-2 font-weight-regular mb-3">
          Experience
        </h1>
      </v-flex>
    </v-layout>

    <v-layout wrap>
      <v-flex
          mb-5
          xs12
      >
        <v-card>
          <v-card-title>
            <div>
              <div class="font-weight-bold" style="font-size: 1.3rem;">04/2012---05/2013 Infosys Technologies (China)
                Co., Ltd
              </div>
              <span style="font-size: 1.2rem;">Associate IT Consultant</span>
            </div>
          </v-card-title>
          <v-card-text style="text-align: left; font-size: 1.1rem;">
            <p>I played the role of IT consultant and developer in various projects. One big project I
              worked on is: J. C. Penney (<a href="https://www.jcpenney.com" target="_blank">https://www.jcpenney.com</a>, American
              department store). It was built using Oracle technoligies, and I mainly worked on the UI part using HTML, CSS, jQuery, jQuery UI, Bootstrap, etc. Also provided consulting and solutions to the business
              requirements of our clients. </p>
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-title>
            <div>
              <div class="font-weight-bold" style="font-size: 1.3rem;">09/2013---06/2015 Annik Consulting
                Services(China) Ltd
              </div>
              <span style="font-size: 1.2rem;">IT Consultant & Frontend Developer</span>
            </div>
          </v-card-title>
          <v-card-text style="text-align: left; font-size: 1.1rem;">
            <p>I built a lot of online questionnaire websites for clients, some big clients include Toyota, Panasonic, etc. I got design from designers about the look and feel of each questionnaire website, and worked on the page layout, styling and business logic, using vanilla Javascript, jQuery, Bootstrap, etc.<br>
              My responsibilities includes:<br>
              * Analyzing clients business requirements<br>
              * Providing consulting to clients based on their business needs<br>
              * Writing project documents for clients approval<br>
              * Developing a number of online questionnaire websites using HTML, CSS, Javascript, VueJS, Bootstrap. Main
              clients I worked with are: Toyota, Panasonic, etc.
            </p>
          </v-card-text>
        </v-card>
        <v-card>
          <v-card-title>
            <div>
              <div class="font-weight-bold" style="font-size: 1.3rem;">06/2015---02/2019 Maternity Break</div>
              <span style="font-size: 1.2rem;">Professional Mom and Frontend Trend Follower</span>
            </div>
          </v-card-title>
          <v-card-text style="text-align: left; font-size: 1.1rem;">
            <p>During my maternity break looking after two kids, I have been actively keeping up with the frontend trends,
              and have learned and used the latest version of ReactJS and VueJS to create a couple of personal projects. The source code of this website can be found on my github. Also I took the Certificate IV in Web-Based Technologies course at Tafe to brush up skills. </p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout>
      <div>
        <router-link to="/skills" style="text-decoration: none;">
          <v-btn round color="info" style="min-width: 1rem;">
            <v-icon>chevron_left</v-icon>
          </v-btn>
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <div>
        <router-link to="/contact" style="text-decoration: none;">
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
        {id: 4, styleName: 'iconfont icon-jquery', title: 'jQuery', desc: 'Good skills of using jQuery and jQuery UI.'},
        {
          id: 5,
          styleName: 'iconfont icon-sass',
          title: 'Sass/Less',
          desc: 'Familiar with CSS CSS preprocesso such Sass and Less'
        },
        {
          id: 6,
          styleName: 'iconfont icon-frame',
          title: 'UI Library',
          desc: 'Good command of using propular frontend UI library such as Bootstrap, Material UI, Ant design, etc.'
        },
        {
          id: 8,
          styleName: 'iconfont icon-tools',
          title: 'Frontend Tooling',
          desc: 'Familiar with modern frontend tooling like Babel, Npm, Yarn, Webpack'
        },
        {
          id: 9,
          styleName: 'iconfont icon-Programming',
          title: 'Version Control',
          desc: 'Use Git to manage version control, good understanding of popular Git flow and Agile development methodology'
        }
      ]
    })
  }
</script>


