<template>
  <v-app light>
    <v-toolbar class="white pa-5" height="110" >
      <img src="../assets/greenLogo.png" alt="Vuetify.js" height="120">
      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down pr-5">
        <v-btn flat >What we do</v-btn>
        <v-btn flat href = "http://seed6-imseeu.c9users.io:8080/#/email" style="font-family:Hk">Demo</v-btn>
        
      </v-toolbar-items>
      
    </v-toolbar>
    <main>
      <v-content row wrap>>
        <section>
          <v-parallax src="https://i.imgur.com/T49Bbr5.jpg" height="700" jumbotron>
            <v-layout
              column
              align-center
              justify-center
              class="white--text"
            >
            </v-layout>
          </v-parallax>
        </section>
        
        <section>
          <v-parallax src="https://i.imgur.com/PUeov4q.jpg" height="700" jumbotron>
          </v-parallax>
        </section>

        <section>
          <v-layout
            column
            wrap
            class="my-5"
            align-center
          >
            <v-flex xs12 sm4 class="my-3" style="font-family:Hk">
              <div class="text-xs-center">
                <h2 class="headline" style="font-family:Hk">Never miss a follup-up.</h2>
                <span class="subheading" style="font-family:Hk">
                  Seed is a private place for all things professional.
                </span>
              </div>
            </v-flex>
            <v-flex xs12>
              <v-container grid-list-xl>
                <v-layout row wrap align-center>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large color="teal lighten-2" >autorenew</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center" style="font-family:Hk">Personal</div>
                      </v-card-title>
                      <v-card-text style="font-family:Hk">
                        To-do-list to prompt you to engage with those that have not been contacted. Never forget anyone or anything.
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large color="teal lighten-2" >insert_photo</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline">Automatic</div>
                      </v-card-title>
                      <v-card-text style="font-family:Hk">
                        Seed tracks interactions between you and your contacts across all platforms. No work for you, all the opportunity. 
                      </v-card-text>
                    </v-card>
                  </v-flex>
                  <v-flex xs12 md4>
                    <v-card class="elevation-0 transparent">
                      <v-card-text class="text-xs-center">
                        <v-icon x-large color="teal lighten-2">flash_on</v-icon>
                      </v-card-text>
                      <v-card-title primary-title class="layout justify-center">
                        <div class="headline text-xs-center" style="font-family:Hk">Intuitive</div>
                      </v-card-title>
                      <v-card-text style="font-family:Hk">
                        Seed displays your interactions visually in an easy to digest timeline. No experience required to get started.
                      </v-card-text>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-flex>
          </v-layout>
        </section>

        
        
        <v-divider></v-divider>
        
        
      </v-content>
    </main>
  </v-app>
</template>

<style type="text/css">
  @font-face {
    font-family: Hk;
    src: url('../assets/fonts/hk-grotesk/HKGrotesk-Regular.otf');
  }
  
</style>

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
        title: 'Seed'
      }
    },
    components:{
    'ImgUpload': ImgUpload
  },
    
  }


</script>