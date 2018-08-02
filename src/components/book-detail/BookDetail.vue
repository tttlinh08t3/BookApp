<template src="./book-detail.html"></template>
<script>
import {
  Validator
} from 'vee-validate'

export default {
  name: 'BookDetail',
  components: {
    // 'navbar': Navbar
  },
  data () {
    return {
      book: {
        des: ''
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
    validate () {
      this.validator.validate('des', this.book.des)
    },
    onSave () {
      // this.validator.validateAll();
      // if(this.validator.errors.any() && this.book)  {
      //   console.log('submit');
      // }
      // else {
      //   console.log('no errors ')
      // }
      // console.log('errors ', this.validator.errors.any())
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
