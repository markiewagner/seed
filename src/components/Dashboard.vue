<template>
  <v-app light>
    <v-toolbar class="white">
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <main>
      <v-content>
        <section>
          <v-parallax src="https://i.imgur.com/4ahuik3.jpg" height="600">
            <v-layout
              column
              align-center
              justify-center
              class="white--text"
            >
              <img src="../assets/vuetify.png" alt="Vuetify.js" height="200">
              <h1 class="white--text mb-2 display-1 text-xs-center">Parallax Template</h1>
              <div class="subheading mb-3 text-xs-center">Powered by Vuetify</div>
              <v-btn
                class="blue lighten-2 mt-5"
                dark
                large
                href="/pre-made-themes"
              >
                Get Started
              </v-btn>
            </v-layout>
          </v-parallax>
        </section>

        <section>
          <v-layout
            column
            wrap
            class="my-5"
            align-center
          >
            <v-flex xs12 sm4 class="my-3">
              <div class="text-xs-center">
                <h2 class="headline">The best way to start developing</h2>
                <span class="subheading">
                  Cras facilisis mi vitae nunc 
                </span>
              </div>
            </v-flex>
            <v-flex xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-center>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Material Design</div>
                      </v-card-title>
                      <v-card-text>
                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline">Fast development</div>
                      </v-card-title>
                      <v-card-text>
                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center">Completely Open Sourced</div>
                      </v-card-title>
                      <v-card-text>
                        Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </section>

        <section>
          <v-parallax src="https://i.imgur.com/z5EXB92.jpg" height="380">
            <v-layout column align-center justify-center>
              <div class="headline white--text mb-3 text-xs-center">Web development has never been easier</div>
              <em>Kick-start your application today</em>
              <v-btn
                class="blue lighten-2 mt-5"
                dark
                large
                href="/pre-made-themes"
              >
                Get Started
              </v-btn>
            </v-layout>
          </v-parallax>
        </section>

        <section>
          <v-container grid-list-xl>
            <v-layout row wrap justify-center class="my-5">
              <v-flex xs12 sm4>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Company info</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. 
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti. 
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 sm4 offset-sm1>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Contact us</div>
                  </v-card-title>
                  <v-card-text>
                    Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
                  </v-card-text>
                  <v-list class="transparent">
                    <v-list-tile>
                      <v-list-tile-action>
                        <v-icon class="blue--text text--lighten-2">phone</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>777-867-5309</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-action>
                        <v-icon class="blue--text text--lighten-2">place</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>Chicago, US</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile>
                      <v-list-tile-action>
                        <v-icon class="blue--text text--lighten-2">email</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </section>
        
        <v-divider></v-divider>
        
        <section>
          
          
          <v-container grid-list-xl>
            <v-layout row wrap justify-center class="my-5">
              <v-flex xs13 sm4>
                
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline">Try It</div>
                  </v-card-title>
                  <ImgUpload></ImgUpload>
                </v-card>
                
              </v-flex>
              
              <v-flex xs12 sm7 offset-sm1>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                  </v-card-title>
                    
                      <v-container fluid>
                        <v-layout row wrap>
                          <v-flex xs12 md8 offset-md2>
                            <v-card>
                              <v-toolbar color="pink" dark>
                                <v-icon color="white">arrow_back</v-icon>
                                <v-toolbar-title>Compose</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-icon color="white">send</v-icon>
                              </v-toolbar>
                              <v-container fluid class="pa-0 mt-2">
                                <v-layout wrap>
                                  <v-flex xs2>
                                    <v-subheader>To</v-subheader>
                                  </v-flex>
                                  <v-flex xs10 class="text-xs-left">
                                    <v-chip>
                                      recruiter@google.com
                                    </v-chip>
                                  </v-flex>
                                  <v-flex xs12>
                                    <v-divider></v-divider>
                                    <v-text-field
                                      label="Subject"
                                      value="Reaching Out"
                                      single-line
                                      full-width
                                      hide-details
                                    ></v-text-field>
                                  </v-flex>
                                  <v-flex xs12>
                                    <v-divider></v-divider>
                                    <v-text-field
                                      label="Message"
                                      v-model="title"
                                      counter
                                      max="120"
                                      full-width
                                      multi-line
                                      single-line
                                    ></v-text-field>
                                  </v-flex>
                                </v-layout>
                              </v-container>
                            </v-card>
                          </v-flex>
                        </v-layout>
                      </v-container>
                      
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
          
        </section>
        
      </v-content>
    </main>
  </v-app>
</template>

 <script src="https://unpkg.com/vue/dist/vue.js"></script>
 <script src="https://unpkg.com/vuetify/dist/vuetify.js"></script>

<script>

import ImgUpload from './ImgUpload.vue'


  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [{
          icon: 'bubble_chart',
          title: 'Inspire'
        }],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    },
    components:{
    'ImgUpload': ImgUpload
  },
    
  }


</script>