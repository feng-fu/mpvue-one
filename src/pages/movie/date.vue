<template>
  <div class="top-banner">
    <div class="time-view">
      <span class="big-font">{{currentDate}}&nbsp;</span>
      <span>{{currentYM}}</span>
    </div>
    <div class="weather-view">
      {{weather.city_name}} · {{weather.climate}} · {{weather.temperature}}°C
    </div>
  </div>
</template>


<script>
const MONTH_EN_MAP = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Aug',
  '09': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec'
}
export default {
  props: {
    weather: Object
  },
  data() {
    return {
      currentDate: '',
      currentYM: ''
    }
  },
  watch: {
    weather() {
      const date = this.weather.date.split('-')
      this.currentDate = date.pop()
      const month = date.pop()
      const year = date.pop()
      this.currentYM = `${MONTH_EN_MAP[month]}.${year}`
    }
  }
}
</script>


<style>
  .top-banner {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80rpx;
    display: flex;
    line-height: 80rpx;
    border-bottom: 1rpx solid #b5b5b5;
    background-color: #fcfcfc;
  }
  .time-view {
    width: 300rpx;
    text-align: center;
    font-weight: bold;
    font-size: 32rpx;
  }

  .big-font {
    font-size: 46rpx;
  }

  .weather-view {
    width: 400rpx;
    font-size: 24rpx;
    text-align: right;
    color: #414141;
  }
</style>
