<template>
  <v-app>
    <div id="app">
    <router-view/> 
   
  </div>
  </v-app>
</template>



<script>



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
    
  },
  }

</script>
