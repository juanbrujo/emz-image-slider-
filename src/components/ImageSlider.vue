<template>
  <div>
    <button @click="prev">&lt; Prev</button> || <button @click="next">Next &gt;</button>
    <transition-group name='fade' tag='div'>
      <div class="wrapper"
        v-for="number in [currentNumber]"
        :key='number'
      >
        <img
          :src="currentImage"
          v-on:mouseover="stopRotation"
          v-on:mouseout="startRotation"
        />
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name:'ImageSlider',
  data () {
    return {
      images: [
        'https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5f10f73ebce4fe5a7d70b028ca10880d&auto=format&fit=crop&w=975&q=80',
        'https://images.unsplash.com/photo-1531875456634-3f5418280d20?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9a10a0a0fd0a301b27cfb0c0d30cf254&auto=format&fit=crop&w=2734&q=80',
        'https://images.unsplash.com/photo-1459156212016-c812468e2115?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a9be6e1d7a3ff7f9862fb4edfb9ef595&auto=format&fit=crop&w=949&q=80'
      ],
      currentNumber: 0,
      timer: null,
    }
  },
  computed: {
    currentImage() {
      return this.images[Math.abs(this.currentNumber) % this.images.length]
    },
  },
  methods: {
    startRotation() {
      this.timer = setInterval(this.next, 2000)
    },
    stopRotation() {
      clearTimeout(this.timer)
      this.timer = null
    },
    next() {
      this.stopRotation()
      this.currentNumber += 1
      this.startRotation()
    },
    prev() {
      this.stopRotation()
      this.currentNumber -= 1
      this.startRotation()
    }
  },
  mounted () {
    this.startRotation()
  },
}
</script>

<style>
.wrapper {
  width: 100%;
  height: 400px;
}

.wrapper img {
  display: inline-block;
  max-width: 100%;
  max-height: 100%;
}

.fade-enter-active, .fade-leave-active {
  position: absolute;
  opacity: 1;
  visibility: visible;
  overflow: hidden;
  transition: all .8s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  visibility: hidden;
}
</style>
