<template src="./login.html"></template>
<script>

import LoginService from '@/services/authentication/LoginService.js'
export default {
  name: 'Login',
  components: {
    // 'navbar': Navbar
  },
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      },
      errors: null
    }
  },
  created () {
    this.validator = new Validator({
      des: 'required'
    })
    this.$set(this, 'errors', this.validator.errors)
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.credentials).then((response) => {
        this.$router.replace('/settings')
      })
      LoginService.login(this.credentials).then((response) => {
        if (response.status === 200) {
          console.log('login ', this.credentials)
          console.log('res ', response)
          this.$router.replace('/')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
