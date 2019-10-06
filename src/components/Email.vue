

<template>
  <v-app light>
  <div id="app">
  <v-app id="inspire">

  <v-toolbar  class="elevation-25 white pl-5 pr-5 pa-3" height="60" >
      <img src="../assets/greenLogo.png" class="pl-5" alt="Vuetify.js" height="70">
      <v-spacer></v-spacer>


      <v-spacer></v-spacer>
      <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-items class="hidden-sm-and-down pr-5">
        <v-btn flat href ="localhost:8080/#" >Home</v-btn>
        <v-btn flat >Settings</v-btn>

      </v-toolbar-items>
       <img src="../assets/icon.png" class="pr-5 mr-5" alt="Vuetify.js" height="70">


    </v-toolbar>

  <v-layout>




    <v-tabs dark v-model="active">
			<v-card class="grey lighten-4 elevation-3">
				<v-card-text>
					<v-container fluid>
						<v-layout row wrap>
							<v-flex xs6 class="pa-5">

      					<v-card class="mr-5 elevation-4">

                  <v-toolbar @click="toggleContact();" color="teal lighten-2" dark>
                    <v-toolbar-title style="color:white; font-weight:750;" >Seed List</v-toolbar-title>
                    <v-spacer></v-spacer>
                    </v-btn>
                  </v-toolbar>

                  <v-list v-if="displayContact" three-line>
                    <template v-for="item in items">
                      <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
                      <v-divider v-else-if="item.divider" ></v-divider>
                      <v-list-tile avatar v-else v-bind:key="item.title"  @click="expandContact(item.name)">
                        <v-list-tile-avatar size="40px">
                          <img v-bind:src="item.avatar">
                        </v-list-tile-avatar>
                          <img src="https://i.imgur.com/8Ybwzgw.png" height="45px" width="1px" class="mr-4">
                        <v-list-tile-content>
                          <v-list-tile-title v-html="item.name" style="font-weight: 600"> </v-list-tile-title>
                        </v-list-tile-content>
                        <v-flex xs3>
                            <div>
                              <div class="heading ml-5" style="font-size:13px">Connected </div>
                              <div class="heading ml-5" style="font-size:13px; font-weight:bold" v-html="item.lastConnected"></div>
                            </div>
                        </v-flex>
                        <v-flex xs3>
                            <div class="ml-4">
                              <div class="heading" style="font-size:13px" v-html="item.company"> </div>
                              <div class="heading" style="font-size:13px" v-html="item.met"> </div>
                            </div>
                          </v-flex>
                      </v-list-tile>
                    </template>
                  </v-list>





                  <v-layout v-else row wrap>

                    <v-flex xs12>
                      <v-card color="white2" height="180px" class="black--text">
                        <v-container fluid grid-list-lg>
                          <v-layout row class="mt-3">

                            <v-flex xs2 color="pr-0">
                              <v-card-media
                                v-bind:src="cards[currentContactIndex].avatar"
                                height="60px"
                                contain
                              ></v-card-media>
                            </v-flex>

                            <v-flex xs1 class="pl-0 pt-0">
                            <v-card-media
                                src="https://i.imgur.com/8Ybwzgw.png"
                                height="130px"
                                contain
                              ></v-card-media>
                              </v-flex>

                            <v-flex xs8>
                              <div>
                                <div class="headline" v-html="cards[currentContactIndex].name"></div>
                                <br><br>
                                <div class="heading" v-html="cards[currentContactIndex].email"></div>
                                <div class="heading" v-html="cards[currentContactIndex].number"></div>
                              </div>
                            </v-flex>

                            <v-flex xs3>
                              <div>
                                <div class="heading">Connected: <br> 11 days ago </div>
                              </div>
                            </v-flex>

                            <v-flex xs3>
                              <div>
                                <div class="heading"> Google <br> Sep 2017 </div>
                              </div>
                            </v-flex>

                          </v-layout>
                        </v-container>
                      </v-card>

                      <v-divider></v-divider>

                      <div v-if="expandContacts" >
                        <v-card color="white2" height="400px" class="black--text">
                          <v-flex xs12 class="pa-5 ma-5">
                                <img v-bind:src="cards[currentContactIndex].cImage1" height="100%" width="100%" class="mr-4">
                         </v-flex>
                        </v-card>

                        <v-divider></v-divider>

                        <v-card color="white2" height="400px" class="black--text">
                          <v-flex xs12 class="pa-5 ma-5">
                                <img  v-bind:src="cards[currentContactIndex].cImage2" height="100%" width="100%" class="mr-4">
                         </v-flex>
                        </v-card>
                       </div>

                       <div v-else>
                         <v-list three-line>
                            <template v-for="thread in cards[currentContactIndex].threads">
                            <v-list-tile>
                              <v-list-tile-content>
                                <v-list-tile-title v-html="thread.subject"></v-list-tile-title>

                            </v-list-tile-content>
                            </v-list-tile>
                            <v-divider></v-divider>
                            </template>
                         </v-list>






                       </div>


                      </v-flex>




                  </v-layout>
                </v-card>
							</v-flex>


							<v-flex xs6 class="pa-5">

								<v-card class="mr-5 elevation-4">
                  <v-toolbar color="teal lighten-2" dark>
                    <v-toolbar-title style="color:white; font-weight:750">To-Do List</v-toolbar-title>
                  </v-toolbar>

                  <v-list three-line style="padding-right:0">
                    <v-list-tile  v-for="item in todos" v-bind:key="item.title" style="height:120px; padding-right:0px" class="mt-3 mb-3" >

                      <v-list-tile-content style="padding-right:0">
                        <v-list-tile-title v-html="item.title"></v-list-tile-title>
                        <v-list-tile-title v-html="item.name"></v-list-tile-title>
                        <v-list-tile-sub-title>{{ item.project }}</v-list-tile-sub-title>
                      </v-list-tile-content>
                      <v-list-tile-action>

                        <v-card color="white elevation-0">
                            <div>
                            <v-btn small color=" transparent elevation-0" height="" slot="activator" @click="expandToDo(item.name)">OK</v-btn>
                            </div>
                            <div>
                           <v-menu transition="slide-y-transition">
                            <v-btn color="transparent elevation-0" slot="activator"  >Later</v-btn>
                            <v-list>
                              <v-list-tile v-for="n in 3" :key="n" @click="removeTask(item)">
                                <v-list-tile-title v-text="'Remind me in ' + n + ' months' "></v-list-tile-title>
                              </v-list-tile>
                            </v-list>
                          </v-menu>
                          </div>
                          <div>
                            <v-btn color="transparent elevation-0" slot="activator" @click="removeTask(item)"  >Dismiss</v-btn>
                          </div>
                        </v-card>



                </v-list-tile-action>
            </v-list-tile>


          </v-list>
        </v-card>

							</v-flex>
						</v-layout>
					</v-container>
				</v-card-text>
			</v-card>
    </v-tabs>





    </v-layout>
  </v-app>


</div>
  </v-app>
</template>

<style type="text/css">

  @font-face {
    font-family: Hk;
    src: url('../assets/fonts/hk-grotesk/HKGrotesk-Regular.otf');
  }

  html *
  {
     font-family: Hk !important;
     color: #494A49;
  }

</style>

 <script src="https://unpkg.com/vue/dist/vue.js"></script>
 <script src="https://unpkg.com/vuetify/dist/vuetify.js"></script>

<script>

import ImgUpload from './ImgUpload.vue'


  export default {
  data () {
    return {
      displayContact: true,
      expandToDos: false,
      expandContacts: false,
      currentContact: "Markie Wagner",
      currentContactIndex: 1,
      items: [
        { avatar: 'https://i.imgur.com/NnIeSjS.png', name: 'James Lee', lastConnected: "4 days ago", company: "Google", met: "Sep 2017"},
        { divider: true, inset: true },
        { avatar: 'https://i.imgur.com/F0c3w9c.png', name: 'Andrew Rooney', lastConnected: "4 days ago", company: "Google", met: "Aug 2014" },
        { divider: true, inset: true },
        { avatar: 'https://i.imgur.com/F0c3w9c.png', name: 'Leon Zhang', lastConnected: "4 days ago",  company: "Google", met: "Sep 2017" },
        { divider: true, inset: true },
        { avatar: 'https://i.imgur.com/V4ei51p.png', name: 'Mark Zuckerburg', lastConnected: "1 week ago",  company: "Google", met: "Sep 2017" },
        { divider: true, inset: true },
        { avatar: 'https://i.imgur.com/V4ei51p.png', name: 'Jeff Bezos', lastConnected: "3 weeks ago", company: "Google", met: "Sep 2017" },
        { divider: true, inset: true },
        { avatar: 'https://i.imgur.com/V4ei51p.png', name: 'Steve Jobs', lastConnected: "2 years ago", company: "Google", met: "Sep 2017" },
        { divider: true, inset: true },
        { avatar: 'https://i.imgur.com/V4ei51p.png', name: 'President Nikias', lastConnected: "2 months ago", company: "Google", met: "Sep 2017" }
      ],
      cards: [
        { avatar: 'https://i.imgur.com/NnIeSjS.png',
          name: 'James Lee',
          email: "jlee@google.com",
          number: "562-543-3433",
          lastConnected: "Connected: <br> 4 days ago",
          company: "Google",
          met: "Sep 2017",
          cImage1: "https://i.imgur.com/XD4E8ek.png",
          cImage2: "https://i.imgur.com/6iaPvaB.png",
          threads: [ { subject: "Google Summer Intership",
                       items: [
                        { message: [ {date: "October 7th <br> 2014", action:"Email Sent", content:"UseFoos"} ],
                          message: [ {date: "October 27th <br> 2014", action:"Email Sent", content:"UseFoo"} ],
                          message: [ {date: "October 27th <br> 2014", action:"Email Sent", content:"UseFoo"} ],
                          message: [ {date: "October 27th <br> 2014", action:"Email Sent", content:"UseFoo"} ],
                          message: [ {date: "October 27th <br> 2014", action:"Email Sent", content:"UseFoo"} ]
                        }
                       ]
                     },
                     { subject: "Nice To Meet You!",
                       items: [
                        { message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UseFoo"} ],
                          message: [ {date: "October 27th <br> 2014", action:"Email Sent", content:"UseFoo"} ],
                          message: [ {date: "October 27th <br> 2014", action:"Email Sent", content:"UseFoo"} ],
                          message: [ {date: "October 27th <br> 2014", action:"Email Sent", content:"UseFoo"} ],
                          message: [ {date: "October 27th <br> 2014", action:"Email Sent", content:"UseFoo"} ]
                        }
                       ]
                     }
          ]
        },
        { avatar: 'https://i.imgur.com/F0c3w9c.png',
          name: 'Andrew Rooney',
          lastConnected: "Connected: <br> 4 days ago" ,
          number: "562-543-3433",
          email: "jlee@google.com",
          company: "Google",
          met: "Sep 2017",
          cImage1: "https://i.imgur.com/qvsz2ZI.png",
          cImage2: "https://i.imgur.com/XD4E8ek.png",
          threads: [ { subject: "Amazon Summer Intership",
                       items: [
                        { message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UseFoo"} ],
                          message: [ {date: "October 27th <br> 2014", action:"Email Sent", content:"UseFoo"} ],
                          message: [ {date: "October 28th <br> 2014", action:"Reply Recived", content:"UseFoo"} ],
                          message: [ {date: "October 29th <br> 2014", action:"Email Sent", content:"UseFoo"} ],
                          message: [ {date: "October 30th <br> 2014", action:"Reply Recived", content:"UseFoo"} ],
                          message: [ {date: "October 30th <br> 2014", action:"Reply Email Sent", content:"UseFoo"} ],
                        }
                       ]
                     },
                     { subject: "Nice To Meet You!",
                       items: [
                        { message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UsFoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"Useoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UseFoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"Useoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UseFoo"} ],
                        }
                       ]
                     }
          ]
        },
        { avatar: 'https://i.imgur.com/F0c3w9c.png',
          name: 'Leon Zhang',
          lastConnected: "Connected: <br> 4 days ago",
          number: "562-543-3433",
          email: "jlee@google.com",
          company: "Google",
          met: "Sep 2017",
          cImage1: "https://i.imgur.com/Pj5ZI6K.png",
          cImage2: "https://i.imgur.com/6iaPvaB.png",
          threads: [ { subject: "Amazon Summer Intership",
                       items: [
                        { message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UsFoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"Useoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UseFoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"Useoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UseFoo"} ],
                        }
                       ]
                     },
                     { subject: "Nice To Meet You!",
                       items: [
                        { message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UsFoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"Useoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UseFoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"Useoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UseFoo"} ],
                        }
                       ]
                     }
          ]
        },
        { avatar: 'https://i.imgur.com/V4ei51p.png',
          name: 'Mark Zuckerberg',
          lastConnected: "Connected: <br> 1 week ago",
          number: "562-543-3433",
          email: "jlee@google.com",
          company: "Google",
          met: "Sep 2017",
          cImage1: "https://i.imgur.com/Pj5ZI6K.png",
          cImage2: "https://i.imgur.com/6iaPvaB.png",
          threads: [ { subject: "Amazon Summer Intership",
                       items: [
                        { message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UsFoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"Useoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UseFoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"Useoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UseFoo"} ],
                        }
                       ]
                     },
                     { subject: "Nice To Meet You!",
                       items: [
                        { message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UsFoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"Useoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UseFoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"Useoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UseFoo"} ],
                        }
                       ]
                     }
          ]
        },
        { avatar: 'https://i.imgur.com/V4ei51p.png',
          name: 'Jeff Bezos',
          lastConnected: "Connected: <br> 3 weeks ago",
          number: "562-543-3433",
          email: "jlee@google.com",
          company: "Google",
          met: "Sep 2017",
          cImage1: "https://i.imgur.com/6iaPvaB.png",
          cImage2: "https://i.imgur.com/qBuTEI7.png",
          threads: [ { subject: "Amazon Summer Intership",
                       items: [
                        { message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UsFoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"Useoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UseFoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"Useoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UseFoo"} ],
                        }
                       ]
                     },
                     { subject: "Nice To Meet You!",
                       items: [
                        { message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UsFoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"Useoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UseFoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"Useoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UseFoo"} ],
                        }
                       ]
                     }
          ]
        },
        { avatar: 'https://i.imgur.com/V4ei51p.png',
          name: 'Steve Jobs',
          lastConnected: "Connected: <br> 2 years ago",
          number: "562-543-3433",
          email: "jlee@google.com",
          company: "Google",
          met: "Sep 2017",
          cImage1: "https://i.imgur.com/6iaPvaB.png",
          cImage2: "https://i.imgur.com/iV1CwCd.png",
          threads: [ { subject: "Amazon Summer Intership",
                       items: [
                        { message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UsFoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"Useoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UseFoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"Useoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UseFoo"} ],
                        }
                       ]
                     },
                     { subject: "Nice To Meet You!",
                       items: [
                        { message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UsFoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"Useoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UseFoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"Useoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UseFoo"} ],
                        }
                       ]
                     }
          ]
        },
        { avatar: 'https://i.imgur.com/V4ei51p.png',
          name: 'President Nikias',
          lastConnected: "Connected: <br> 2 months ago",
          number: "562-543-3433",
          email: "jlee@google.com",
          company: "Google",
          met: "Sep 2017",
          cImage1: "https://i.imgur.com/XD4E8ek.png",
          cImage2: "https://i.imgur.com/Pj5ZI6K.png",
          threads: [ { subject: "Amazon Summer Intership",
                       items: [
                        { message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UsFoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"Useoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UseFoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"Useoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UseFoo"} ],
                        }
                       ]
                     },
                     { subject: "Nice To Meet You!",
                       items: [
                        { message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UsFoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"Useoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UseFoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"Useoo"} ],
                          message: [ {date: "October 24th <br> 2014", action:"Reply Recived", content:"UseFoo"} ],
                        }
                       ]
                     }
          ]
        }
      ],
      todos: [{
        title: "Follow Up",
        name: "James Lee",
        project: 'About Amazon Summer Internship',
        done: false,
      }, {
        title: "Reply To",
        name: "Andrew Rooney",
        project: 'About Facebook Internship',
        done: false,
      }, {
        title: 'Reconnect With',
        name: "Leon Zhang",
        project: 'Product Design Opportunity',
        done: false,
      },],
    }
  },
  methods: {

    removeTask: function(task) {
      var index = this.todos.indexOf(task);
      var name = this.todos[index].name;
      this.todos.splice(index, 1);
      console.log(name);

      this.changeSeed(name);
    },

    changeSeed: function(name) {
      var length = this.items.length;

      for(var i = 0; i < length; i++) {
        if(this.items[i].name == name){
          this.items[i].avatar = "https://i.imgur.com/V4ei51p.png";
          console.log("done");
        }
      }

      var length2 = this.cards.length;

      for(var i = 0; i < length; i++) {
        if(this.cards[i].name == name){
          this.cards[i].avatar = "https://i.imgur.com/V4ei51p.png";
          console.log("done");
        }
      }
    },

    toggleContact: function() {
      this.displayContact = !this.displayContact;
    },

    openContantInfo: function(name) {
      this.toggleContact(name);
      this.currentContact = name;
      console.log(this.currentContact);

      var length = this.cards.length;
      for(var i = 0; i < length; i++) {
        if(this.cards[i].name == name){
          this.currentContactIndex = i;

        }
      }

    },

    expandToDo: function(name) {
      this.openContantInfo(name);
      this.expandContacts = false;
      this.expandToDos = true;
      console.log(expandContacts);
    },

    expandContact: function(name) {
      this.openContantInfo(name);
      this.expandContacts = true;
    },

    goHome: function() {
      this.toggleContact();
      this.expandToDos = false;
      this.expandContacts = false;
    }







    }

  }




</script>
