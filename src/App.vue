<template>
  <div id="app">
    <h2>{{ $t('app.title') }}</h2>
    <el-row>
      <el-col :span="6" :offset="5">
        <cron-input v-model="cron" :size="size" @change="change" @reset="reset" />
      </el-col>
      <el-col :span="6" :offset="1">
        <el-select v-model="size" :size="size">
          <el-option
            v-for="value in sizes"
            :key="value"
            :label="value"
            :value="value"
          />
        </el-select>
      </el-col>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-col :span="6" :offset="5">
        <el-card>
          <div slot="header">
            <span>近十次执行时刻</span>
          </div>
          <div v-for="o in 4" :key="o">
            {{ '列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CronInput from './components/cron-input'
import { DEFAULT_CRON_EXPRESSION } from './constant/filed'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    CronInput
  },
  data() {
    return {
      cron: DEFAULT_CRON_EXPRESSION,
      size: 'mini',
      sizes: [
        'mini',
        'small',
        'medium'
      ]
    }
  },
  methods: {
    change(cron) {
      this.cron = cron
      axios.post('http://106.14.246.234:5210/api/sys/login', {
        userName: 'attemper',
        password: '123'
      })
        .then(function(response) {
          console.log(response)
        })
        .catch(function(error) {
          console.log(error)
        })
    },
    reset(cron) {
      this.change(DEFAULT_CRON_EXPRESSION)
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
