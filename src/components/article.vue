<template>
  <block>
    <view class="title">
      <text>{{title}}</text>
    </view>
    <view class="author" v-if="user_name">
      <text>文 / {{user_name}}</text>
    </view>
    <wx-parse :content="content"></wx-parse>
  </block>
</template>

<script>
import wxParse from 'mpvue-wxparse'
export default {
  props: {
    title: String,
    user_name: String,
    content: String
  },
  components: {
    wxParse
  }
}
</script>


<style scoped>
  .title {
    font-size: 40rpx;
    line-height: 60rpx;
    font-weight: 550;
    margin: 0 1em 1em;
  }
  .author {
    text-indent: 1em;
    color: #333;
    font-weight: 100;
  }
</style>
