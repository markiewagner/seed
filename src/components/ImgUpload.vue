<template>
    <v-app>
      <div class="hello">    
        <picture-input 
          ref="pictureInput" 
          @change="onChange" 
          width="400" 
          height="400" 
          margin="16" 
          accept="image/jpeg,image/png" 
          size="10" 
          buttonClass="btn"
          :customStrings="{
            upload: '<h1>Bummer!</h1>',
            drag: 'upload'
          }">
        </picture-input>
      </div>
    </v-app>
</template>

<script>
import PictureInput from 'vue-picture-input'

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    PictureInput
  },
  methods: {
    onChange () {
      console.log('New picture selected!')
      if (this.$refs.pictureInput.image) {
        console.log('Picture loaded.')
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    }
  }
}
</script>