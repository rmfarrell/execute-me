<template lang="pug">
#app
  virtual-canvas(
    :height="height",
    :width="width",
    :base-image="baseImage",
    :top-image="topImage",
    :gif="gif"
  )
  img(:src="src")
</template>

<script>
import virtualCanvas from './components/VirtualCanvas.vue'

export default {
  name: 'app',
  data () {
    return {
      height: 521,
      width: 600,
      baseImage: './static/img/centerframe.gif',
      topImage: './static/img/smiley.png',
      gif: new window.GIF({
        workers: 2,
        quality: 10,
        height: this.height,
        width: this.width
      }),
      src: ''
    }
  },
  mounted () {
    this.gif.on('finished', (blob) => {
      this.src = URL.createObjectURL(blob)
    })
  },
  // 600 x 521
  components: {
    virtualCanvas
  }
}
</script>
