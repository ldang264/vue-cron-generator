# vue-cron-generator

> a project using vue,element-ui to generate cron expression [中文](./README_zh_CN.md) [Online demo](http://106.14.246.234:8090/)  

**Used by**
>👉 Attemper: A distributed,multi-tenancy,job-flow scheduling application 👈
>>[Github](https://github.com/attemper/attemper)  
>>[Gitee](https://gitee.com/attemper/attemper)

![Preview](https://gitee.com/ldang264/vue-cron-generator/raw/master/resources/snapshot.png)

## Use(Example)
- Install dependency([npm](https://www.npmjs.com/package/vue-cron-generator))
``` bash
npm install vue-cron-generator
```

- [src/lang/index.js](https://github.com/attemper/attemper/blob/master/attemper-admin/src/lang/index.js)  
``` typescript
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import cronEnLocale from 'vue-cron-generator/src/locale/en'
import cronZhLocale from 'vue-cron-generator/src/locale/zh'
import { getLocale } from 'vue-cron-generator/src/util/tools'

Vue.use(VueI18n)

const messages = {
    en: {
      ...enLocale,
      ...elementEnLocale
    },
    zh: {
      ...zhLocale,
      ...elementZhLocale
    }
  },

  i18n = new VueI18n({
  // set locale
  // options: 'en' | 'zh'
    locale: getLocale(),
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

import 'vue-cron-generator/src/styles/global.css'

import App from './App'

import i18n from './lang'

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

- Vue file

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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;d
  color: #2c3e50;
  margin-top: 60px;
}
</style>

```

- Run your project

## Build Source Code

``` bash
# install dependencies
npm install vue-cron-generator

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
