<template>
  <div class="vol-list">
    <div class="vol-title">一个  VOL.{{vol}}</div>
    <block>
      <navigator
        v-for="v in list"
        class="nav"
        :key="v.content_id"
        :url="'/pages/story/main?id=' + v.content_id"
      >
        <div class="arrow">
          <img src="static/assert/arrow-right.png" alt=">">
        </div>
        <div class="article">
          <div class="tag">{{v.tag && v.tag.title}}</div>
          <div class="title">{{v.title}}</div>
        </div>
      </navigator>
    </block>
  </div>
</template>


<script>
export default {
  props: {
    list: Array,
    vol: String
  }
}
</script>

<style>
  .nav {
    display: flex;
    height: 100rpx;
    line-height: 50rpx;
  }
  .arrow {
    width: 70rpx;
    line-height: 100rpx;
  }
  .article {
    width: 650rpx;
  }
</style>
