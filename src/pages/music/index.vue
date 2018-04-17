<template>
  <div class="wrapper">
    <div class="title">{{data.hp_title}}</div>
    <div class="author">文 / {{data.hp_author}}</div>
    <wx-parse :content="data.hp_content"></wx-parse>
  </div>
</template>

<script>
import wxParse from 'mpvue-wxparse'
import API from '@/utils/api'
export default {
  data() {
    return {
      data: {
        hp_content: ''
      }
    }
  },
  onLoad(options) {
    this.getDtl(options.id)
  },
  components: {
    wxParse
  },
  methods: {
    async getDtl(id) {
      const data = await API.getOneStoryDtl(id)
      if (data && data.res === 0) {
        this.data = data.data
      }
    }
  }
}
</script>

<style scoped>

</style>
