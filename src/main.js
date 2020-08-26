import Vue from 'vue'
import ImageSlider from './components/ImageSlider.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(ImageSlider),
}).$mount('#app')
