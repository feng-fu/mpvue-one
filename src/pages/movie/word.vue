<template>
  <div class="word-wrapper">
    <img :src="word.img_url" :alt="word.forward">
    <div class="pic-author">插画 | {{word.pic_info}}</div>
    <div class="word">{{word.forward}}</div>
    <div class="author">{{word.words_info}}</div>
  </div>
</template>

<script>
export default {
  props: {
    word: Object
  }
}
</script>


<style>
  .pic-author {
    font-size: 28rpx;
    color: #404040;
    text-align: center;
    height: 40rpx;
    line-height: 40rpx;
  }
</style>
