<template lang="pug">
#app
  virtual-canvas(
    :height="height",
    :width="width",
    :base-image="baseImage",
    :top-image="topImage",
    :gif="gif",
    :frame-data="currentFrameData"
  )
  img(:src="src")
</template>

<script>
import virtualCanvas from './components/VirtualCanvas.vue'
import frameData from './assets/frameData.js'

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
      src: '',
      currentFrame: 0,
      currentFrameData: frameData[0]
    }
  },
  events: {
    'render-frame' () {
    }
  },
  methods: {
    done () {
      this.gif.render()
    },
    render () {
      this.nextFrame()
      if (this.isNextFrame()) {
        this.$bus.$emit('render-frame', this.currentFrameData)
      } else {
        this.done()
      }
    },
    nextFrame () {
      this.currentFrame++
      this.currentFrameData = frameData[this.currentFrame]
    },
    isNextFrame () {
      return typeof this.currentFrameData !== 'undefined'
    }
  },
  mounted () {
    this.gif.on('finished', (blob) => {
      this.src = URL.createObjectURL(blob)
    })
    this.$bus.$emit('render-frame', this.currentFrameData)
    this.$bus.$on('frame-rendered', this.render)
  },
  components: {
    virtualCanvas
  }
}
</script>
