<template lang="pug">
#app
  virtual-canvas(
    :height="600",
    :width="521",
    :base-image="baseImage",
    :top-image="topImage"
  )
</template>

<script>
import virtualCanvas from './components/VirtualCanvas.vue'

export default {
  name: 'app',
  data () {
    return {
      height: 600,
      width: 521,
      baseImage: 'https://s3.amazonaws.com/exective-order-frame/centerframe.gif',
      topImage: 'https://s3.amazonaws.com/exective-order-frame/smiley.png'
    }
  },
  // 600 x 521
  components: {
    virtualCanvas
  }
}
</script>
