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
    <el-row style="margin-top: 10px">
      <el-col :span="6" :offset="12">
        <el-card>
          <div slot="header">
            <span>{{ $t('app.next10FireTimes') }}</span>
          </div>
          <div v-for="o in next10FireTimes" :key="o">
            {{ o }}
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
      ],
      next10FireTimes: []
    }
  },
  methods: {
    change(cron) {
      this.cron = cron
      this.next10FireTimes = ['Loading......']
      setTimeout(() => {
        axios.post('/api/sys/login/encoded', {
          userName: 'attemper',
          password: 'vKWcAj+tOkJsHegC3HGbich0VuQ2+Y4iUGHP8/7kSHs='
        })
          .then(res => {
            axios.post('/api/dispatch/job/trigger/test/cron', {
              triggerName: 'vue-cron-generator',
              expression: cron
            }, {
              headers: {
                'token': res.data.result.token
              }
            })
              .then(ir => {
                if (!ir.data.result) {
                  this.next10FireTimes = [ir.data.msg]
                } else {
                  this.next10FireTimes = ir.data.result
                }
              })
              .catch(ie => {
                this.next10FireTimes = [ie]
              })
          })
          .catch(err => {
            this.next10FireTimes = [err]
          })
      }, 100)
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
