<template lang="pug">
#app
  virtual-canvas(
    :height="height",
    :width="width",
    :left-image="leftImage.img",
    :right-image="rightImage.img",
    :gif="gif",
    :frame-data="currentFrameData"
  )
  img(:src="src")
</template>

<script>
import virtualCanvas from './components/VirtualCanvas.vue'
import frameData from './frameData.js'

export default {
  name: 'app',
  data () {
    return {
      height: 648,
      width: 746,
      gif: new window.GIF({
        workers: 4,
        quality: 2,
        height: this.height,
        width: this.width
      }),
      leftImage: {
        loaded: false,
        src: './static/img/che.jpg',
        img: new Image()
      },
      rightImage: {
        loaded: false,
        src: './static/img/che.jpg',
        img: new Image()
      },
      src: '',
      currentFrame: 0,
      currentFrameData: frameData[0]
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
    },
    loadImages () {
      this.leftImage.img.src = this.leftImage.src
      this.rightImage.img.src = this.rightImage.src
      this.leftImage.img.onload = () => {
        this.leftImage.loaded = true
        this.$emit('images-loaded')
      }
      this.rightImage.img.onload = () => {
        this.rightImage.loaded = true
        this.$emit('images-loaded')
      }
    }
  },
  mounted () {
    this.gif.on('finished', (blob) => {
      this.src = URL.createObjectURL(blob)
    })
    this.loadImages()
    this.$on('images-loaded', () => {
      if (this.rightImage.loaded && this.leftImage.loaded) {
        this.$bus.$emit('render-frame', this.currentFrameData)
      }
    })
    this.$bus.$on('frame-rendered', this.render)
  },
  components: {
    virtualCanvas
  }
}
</script>
