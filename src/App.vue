<template>
  <div id="app">
    <h2>{{ $t('app.title') }}</h2>
    <el-row>
      <el-col :span="4" :offset="8">
        <el-popover v-model="visible">
          <cron/>
          <el-input slot="reference" v-model="cron" :placeholder="$t('app.input.placeholder')" size="mini"/>
        </el-popover>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import cron from './components/cron'
export default {
  name: 'App',
  components: {
    cron
  },
  data() {
    return {
      visible: false,
      cron: ''
    }
  },
  created() {
    // localStorage.locale = 'en'
    // localStorage.locale = 'zh-CN'
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
