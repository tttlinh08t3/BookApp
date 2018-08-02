<template src="./my-books.html"></template>
<style scoped src="./my-books.css"></style>

<script>
import InfiniteLoading from 'vue-infinite-loading'
import books from '../../test-data/book-list.json'

export default {
  name: 'MyBooks',
  components: {
    'infinite-loading': InfiniteLoading
  },
  data () {
    return {
      bookList: [],
      errors: null
    }
  },
  created () {
    this.bookList = books
    console.log('this.bookList ', this.bookList)
    Serivces.getBookList().then((response) => {
      console.log('res ', response)
    })
  },
  methods: {
    loadMore ($state) {
      setTimeout(() => {
        const temp = this.bookList
        for (let i = this.bookList.length + 1; i <= this.bookList.length + 10; i++) {
          temp.push(i)
        }
        this.bookList = this.bookList.concat(temp)
        $state.loaded()
        console.log('load more ')
      }, 1000)
    }
  }
}
</script>
