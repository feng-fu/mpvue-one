<template>
  <block>
    <view class="title">
      <text>{{title}}</text>
    </view>
    <view class="author" v-if="user_name">
      <text>文 / {{user_name}}</text>
    </view>
    <view class="summary" v-if="summary">
      <view class="line"></view>
      <text>{{summary}}</text>
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
    content: String,
    summary: String
  },
  components: {
    wxParse
  }
}
</script>


<style scoped>
  .title {
    font-size: 18px;
    font-weight: 700;
    margin: .8em .8em;
    text-align: center;
  }
  .author {
    color: #cacaca;
    font-size: 14px;
    text-align: right;
    padding-right: 2em;
  }
  .summary {
    position: relative;
    color: #b0b0b0;
    font-size: 12px;
    white-space: nowrap;
    text-overflow: ellipse;
    padding-left: 20px;
    height: 30px;
    line-height: 30px;
  }
  .summary .line {
    position: absolute;
    top: 7px;
    left: 10px;
    width: 5px;
    height: 16px;
    background-color: #d0d0d0;
  }
</style>
