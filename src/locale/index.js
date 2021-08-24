import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import enLocale from './en'
import zhLocale from './zh'
import { getLocale } from '../util/tools'

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
