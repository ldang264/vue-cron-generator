import { NUMBER } from '../constant/reg'

export const
  sortNum = (a, b) => {
    return a - b
  },
  isNumber = (str) => {
    return new RegExp(NUMBER).test(str)
  },
  getLocale = () => {
    const lang = localStorage.getItem('locale') || sessionStorage.getItem('locale') ||
      localStorage.getItem('lang') || sessionStorage.getItem('lang') ||
      localStorage.getItem('language') || sessionStorage.getItem('language') || navigator.language,
      index = lang.indexOf('-')
    return index <= 0 ? lang : lang.substring(0, index)
  }
