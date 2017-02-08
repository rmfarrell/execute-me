<template lang="pug">
  div
</template>
<script>
export default {
  name: 'virtualCanvas',
  props: {
    rightImage: Image,
    leftImage: Image,
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
    reset () {
      this.ctx.fillStyle = '#b0c4bb'
      this.ctx.fillRect(0, 0, this.width, this.height)
    },
    resetTransform () {
      this.ctx.setTransform(1, 0, 0, 1, 0, 0)
      this.ctx.rotate(0)
    },
    placePage (data, address, img) {
      let d = data[address]
      this.ctx.setTransform(...d.transform)
      this.ctx.rotate(d.rotate)
      if (d.flip) { this.ctx.scale(-1, 1) }
      this.ctx.drawImage(img, ...d.args)
      this.resetTransform()
    },
    renderFrame (f) {
      this.reset()
      this.placePage(f, 'left', this.leftImage)
      this.placePage(f, 'right', this.rightImage)
      // this.ctx.globalAlpha = 0.4
      this.attachImage(`./static/img/trumps/${f.trump}.png`, 0, 0)
        .then(() => {
          // this.$el.appendChild(this.canvas)
          this.gif.addFrame(this.canvas, {copy: true, delay: 140})
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
