import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhCNLocale from 'element-ui/lib/locale/lang/zh-CN'
import enUSLocale from './en-US'
import zhCNLocale from './zh-CN'
import { getLocale } from '@/util/tools'

Vue.use(VueI18n)

const messages = {
    en_US: {
      ...enUSLocale,
      ...elementEnLocale
    },
    zh_CN: {
      ...zhCNLocale,
      ...elementZhCNLocale
    }
  },

  i18n = new VueI18n({
  // set locale
  // options: en | zh
    locale: getLocale(),
    // set locale messages
    messages
  })

export default i18n
