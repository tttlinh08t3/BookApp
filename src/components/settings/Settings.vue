<template src="./settings.html"></template>
<style scoped src="./settings.css"></style>

<script>

export default {
  name: 'Settings',
  components: {
    // 'infinite-loading': InfiniteLoading
  },
  data () {
    return {
      isLoggedIn: false,
      count: 0,
      errors: null
    }
  },
  created () {
    this.isLoggedIn = this.$store.getters.isLoggedIn
    this.count = this.$store.getters.count
  },
  methods: {
    goToLogin () {
      this.$router.push('/login')
    },
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
