<template>
</template>
<script>
export default {
  name: 'virtualCanvas',
  props: {
    baseImage: String,
    topImage: String,
    height: Number,
    width: Number,
    gif: Object
  },
  data () {
    return {
      ctx: null,
      src: '',
      canvas: document.createElement('canvas')
    }
  },
  mounted () {
    this.init()
    this.$bus.$on('render-frame', (dat) => {
      this.renderFrame(dat)
    })
  },
  methods: {
    init () {
      this.canvas.height = this.height
      this.canvas.width = this.width
      this.ctx = this.canvas.getContext('2d')
    },
    renderFrame (f) {
      this.attachImage(this.baseImage, 0, 0)
        .then(() => {
          return this.attachImage(this.topImage, f.x, f.y)
        })
        .then(() => {
          this.gif.addFrame(this.canvas, {copy: true})
          this.$bus.$emit('frame-rendered')
        })
    },
    attachImage (img, x, y) {
      return new Promise((resolve) => {
        let _img = new Image()
        _img.src = img
        _img.onload = () => {
          this.ctx.drawImage(_img, x, y)
          resolve()
        }
      })
    }
  }
}
</script>
