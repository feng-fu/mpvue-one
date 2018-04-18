<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>
.container {
  font-size: 26rpx;
  text-align: center;
}

.wrapper {
  font-size: 26rpx;
  text-align: left;
}

* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}

/* font color */
* {
  color: #353535;
}
.gray {
  color: #808080;
}

.wxParse {
  text-indent: 2em;
}
.wxParse image {
  text-indent: 0;
}
.wxParse ._view {
  padding: 0 10rpx;
  text-indent: 0;
}
</style>
