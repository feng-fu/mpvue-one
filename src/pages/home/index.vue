<template>
  <div class="container">
    <image class="cover" :src="data.hp_img_url" mode="widthFix" />
    <view class="cover-author">
      <text class="gray">{{data.hp_author}}</text>
    </view>
    <view class="content">
      <text>{{content}}</text>
    </view>
    <view class="content-author">
      <text class="gray">{{data.text_authors}}</text>
    </view>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  mounted() {
    this.initPage()
  },
  computed: {
    ...mapState('home', ['data']),
    content() {
      return this.data.hp_content.split('by')[0]
    }
  },
  methods: {
    ...mapActions('home', ['getNewIds', 'getHomeData']),
    async initPage() {
      await this.getNewIds()
      await this.getHomeData()
    }
  }
}
</script>

<style scoped>
  .cover {
    width: 100%;
  }
  .cover-author {
    width: 100%;
    height: 120rpx;
    line-height: 120rpx;
    margin-bottom: 42rpx;
  }
  .content {
    width: 80%;
    margin: 0 auto;
    line-height: 58rpx;
    text-align: left;
  }
  .content-author {
    height: 250rpx;
    line-height: 250rpx;
    font-size: 20rpx;
  }
</style>
