import { NUMBER } from '../constant/reg'

export const
  sortNum = (a, b) => {
    return a - b
  },
  isNumber = (str) => {
    return new RegExp(NUMBER).test(str)
  }
