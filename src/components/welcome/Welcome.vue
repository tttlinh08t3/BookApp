<template src="./welcome.html"></template>
<style scoped src="./welcome.css"></style>

<script>
import Services from '@/services/Services.js'

export default {
  name: 'Welcome',
  components: {
    'navbar': Navbar
  },
  data () {
    return {
      book: {
        des: ''
      },
      message: ''
    }
  },
  created () {
    Services.getMessage().then((res) => {
      if (res.status === 200) {
        this.message = res.data
      }
    })
  },
  methods: {
  }
}
</script>
