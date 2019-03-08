<template>
  <div id="app">
    <h2>{{ $t('app.title') }}</h2>
    <el-row>
      <el-col :span="6" :offset="9">
        <cron-input v-model="cron" @change="change" @reset="reset"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CronInput from './components/cron-input'
import { DEFAULT_CRON_EXPRESSION } from './constant/filed'

export default {
  name: 'App',
  components: {
    CronInput
  },
  data() {
    return {
      cron: DEFAULT_CRON_EXPRESSION
    }
  },
  methods: {
    change(cron) {
      this.cron = cron
    },
    reset(cron) {
      this.cron = DEFAULT_CRON_EXPRESSION
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
