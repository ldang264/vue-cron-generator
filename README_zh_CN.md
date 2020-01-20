# vue-cron-generator

> 一个基于Vue&Element-UI构建的在线Cron表达式生成器 [English](./README.md)

👉 [Attemper: 分布式多租户的支持流程编排的任务调度平台(用之作为cron表达式生成器)](https://github.com/attemper/attemper)

![预览](https://gitee.com/ldang264/vue-cron-generator/raw/master/resources/snapshot_zh_CN.png)

## 使用(例子代码)
- 下载依赖
``` bash
npm install vue-cron-generator
```

- [src/lang/index.js](https://github.com/attemper/attemper/blob/master/attemper-admin/src/lang/index.js)  
``` typescript
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'// element-ui lang
import cronEnLocale from 'vue-cron-generator/src/locale/en'
import cronZhLocale from 'vue-cron-generator/src/locale/zh-CN'

Vue.use(VueI18n)

const messages = {
  en: {
    ...elementEnLocale,
    ...cronEnLocale
  },
  zh: {
    ...elementZhLocale,
    ...cronZhLocale
  }
}

const i18n = new VueI18n({
  // set locale
  // options: en | zh
  locale: 'en',
  // set locale messages
  messages
})

export default i18n

```

- [main.js](https://github.com/attemper/attemper/blob/master/attemper-admin/src/lang/index.js)  
``` typescript
import Vue from 'vue'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import 'vue-cron-generator/src/styles/global.less'

import App from './App'

import i18n from './lang' // Internationalization

Vue.use(Element, {
  size: localStorage.getItem('size') || 'small', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

new Vue({
  el: '#app',
  i18n,
  render: h => h(App)
})

```

- Vue文件

``` vue
<template>
  <div id="app">
    <el-row>
      <el-col :span="6" :offset="9">
        <cron-input v-model="cron" @change="change" @reset="reset"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import CronInput from 'vue-cron-generator/src/components/cron-input'
import { DEFAULT_CRON_EXPRESSION } from 'vue-cron-generator/src/constant/filed'

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

```

- 运行项目

## 构建本项目源码

``` bash
# 下载依赖
npm install vue-cron-generator

# 服务启动在localhost:8080
npm run dev

# 构建生产文件
npm run build
```
