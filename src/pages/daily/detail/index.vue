<style scoped>
  .cover {
    width: 150px;
    height: 150px;
    margin: 10px auto 0;
    border-radius: 8px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .2);
  }
  .control {
    width: 40px;
    height: 40px;
    background-color: rgba(0, 0, 0, .4);
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    margin: -30px 0 0 -20px;
  }
  .feeds_cover {
    width: 100%;
    height: 200px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .control img {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .title {
    font-size: 15px;
    font-weight: bold;
    height: 48px;
    line-height: 24px;
    margin-top: 20px;
    text-align: center;
  }
</style>

<style>
  .meta.div {
    height: 60px;
    padding-left: 20px;
    position: relative;
  }
  .meta.div::before {
    content: '';
    display: block;
    position: absolute;
    top: 6px;
    left: 5px;
    width: 0;
    height: 0;
    border-width: 6px 8px;
    border-style: solid;
    border-color: transparent transparent transparent #000;
    animation: circle 1s infinite;
    transform-origin: 25% 50%;
  }
  .meta.div::after {
    content: '';
    display: block;
    position: absolute;
    top: 6px;
    left: 5px;
    width: 0;
    height: 0;
    border-width: 6px 8px;
    border-style: solid;
    border-color: transparent transparent transparent #000;
    animation: fadeIn 1s infinite;
  }
  .meta.div .avatar {
    display: none;
  }
  .view-more.div {
    display: none;
  }
  @keyframes circle {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(8px);
      opacity: 0;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>


<template>
  <div class="article-container">
    <div class="title">{{title}}</div>
    <wx-parse :content="body"></wx-parse>
  </div>
</template>

<script>
import API from '@/utils/api'
import wxParse from 'mpvue-wxparse'
export default {
  data() {
    return {
      loaded: false,
      isPlay: false,
      audioContext: null,
      body: '',
      title: ''
    }
  },
  components: {
    wxParse
  },
  onLoad(query) {
    const id = query.id
    if (!id) console.log('error coured no id find.')
    this.getDetail(id)
  },
  methods: {
    async getDetail(id) {
      const data = await API.getZhDtl(id)
      this.body = data.body
      this.title = data.title
    }
  }
}
</script>

<style scoped>

</style>
