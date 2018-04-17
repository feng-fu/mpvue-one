<template>
  <div class="container">
    <top-date :weather="weather"></top-date>
    <one-word :word="word"></one-word>
    <vol-list :vol="vol" :list="volList"></vol-list>
  </div>
</template>

<script>
import API from '@/utils/api'
import TopDate from './date'
import OneWord from './word'
import VolList from './volList'
export default {
  data () {
    return {
      weather: {
        city_name: '地球',
        climate: '对流层',
        date: '2018-04-16',
        humidity: '',
        hurricane: '',
        temperature: '',
        wind_direction: ''
      },
      word: {},
      vol: '',
      volList: []
    }
  },
  components: {
    TopDate,
    OneWord,
    VolList
  },
  mounted () {
    this.getNewIds()
  },
  methods: {
    async getNewIds () {
      const data = await API.getNewIds()
      if (data && data.res === 0) {
        this.getOneList(data.data[0])
      }
    },
    async getOneList (id) {
      const data = await API.getOneList(id)
      console.log(data)
      if (data && data.res === 0) {
        this.weather = data.data.weather
        this.word = data.data.content_list[0]
        this.vol = data.data.menu.vol
        this.volList = data.data.menu.list
      }
    }
  }
}
</script>

<style scoped>

</style>
