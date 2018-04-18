<template>
  <block>
    <v-article
      :title="currentMovie.title"
      :user_name="currentMovie.user ? currentMovie.user.user_name : ''"
      :content="currentMovie.content || ''"
    ></v-article>
  </block>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import article from '@/components/article'
export default {
  onLoad(query) {
    console.log(this.currentMovie)
    const { id } = query
    this.initPage(id)
  },
  components: {
    'v-article': article
  },
  computed: {
    ...mapState('movie', ['currentMovie'])
  },
  methods: {
    ...mapActions('movie', ['getMovieDetail', 'clearMovieDetail']),
    async initPage(id) {
      await this.getMovieDetail(id)
    }
  },
  beforeDestory() {
    console.log('before leave triggered.')
    this.clearMovieDetail()
  }
}
</script>

<style scoped>

</style>
