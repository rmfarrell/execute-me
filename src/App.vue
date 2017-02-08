<template lang="pug">
#app
  form#image-selector(
    onSubmit="return false"
    @submit="createAnimation()",
  )
    .file-input.left(v-if="!leftImage.changed")
      label="Drop an image here."
      input(
        type="file",
        accept="image/*",
        @change="submitImage(leftImage, $event)"
      )
    .image-indicator.left(v-if="leftImage.changed")
      img(:src="leftImage.src")

    .file-input.right(v-if="!rightImage.changed")
      label="...And here."
      input(
        type="file",
        accept="image/*",
        @change="submitImage(rightImage, $event)"
      )
    .image-indicator.right(v-if="rightImage.changed")
      img(:src="rightImage.src")

    input(
      type="submit",
      value="Fabulous. Terrific. Sign it.",
      :class="canSubmit ? '' : 'disabled' "
    )
  virtual-canvas(
    :height="height",
    :width="width",
    :left-image="leftImage.img",
    :right-image="rightImage.img",
    :gif="gif",
    :frame-data="currentFrameData"
  )
  #modal(:class="isProcessing ? '' : 'disabled'")
    .loading-eagle
    p.loading-indicator Loading...
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
      isProcessing: false,
      gif: new window.GIF({
        workers: 4,
        quality: 2,
        height: this.height,
        width: this.width
      }),
      leftImage: {
        loaded: false,
        src: './static/img/transparent.png',
        img: new Image(),
        changed: false
      },
      rightImage: {
        loaded: false,
        src: './static/img/transparent.png',
        img: new Image(),
        changed: false
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
        console.log('render')
        this.$bus.$emit('render-frame', this.currentFrameData)
      } else {
        this.done()
      }
    },
    submitImage (imgObject, ev) {
      let f = ev.target.files[0]
      let u = window.URL.createObjectURL(f)
      imgObject.changed = true
      imgObject.src = u
      imgObject.img.src = u
      this.loadImage(imgObject)
    },
    loadImage (imgObject) {
      imgObject.loaded = false
      imgObject.img.onload = () => {
        imgObject.loaded = true
      }
    },
    nextFrame () {
      this.currentFrame++
      this.currentFrameData = frameData[this.currentFrame]
    },
    isNextFrame () {
      return typeof this.currentFrameData !== 'undefined'
    },
    loadPlaceHolders () {
      this.loadImage(this.leftImage)
      this.loadImage(this.rightImage)
    },
    createAnimation () {
      if (this.rightImage.loaded && this.leftImage.loaded) {
        this.$bus.$emit('render-frame', this.currentFrameData)
      }
      this.isProcessing = true
    }
  },
  mounted () {
    this.gif.on('finished', (blob) => {
      this.src = URL.createObjectURL(blob)
    })
    this.loadPlaceHolders()
    this.$bus.$on('frame-rendered', this.render)
  },
  computed: {
    canSubmit () {
      return (this.leftImage.changed && this.rightImage.changed)
    }
  },
  components: {
    virtualCanvas
  }
}
</script>
