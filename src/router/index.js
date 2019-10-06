import Vue from 'vue'
import Router from 'vue-router'
import Landing from '@/components/Landing'

import ImgUpload from '@/components/ImgUpload.vue'
import Email from '@/components/Email.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/upload',
      name: 'ImgUpload',
      component: ImgUpload
    },
    {
      path: '/email',
      name: 'email',
      component: Email
    },
    
  ]
})
