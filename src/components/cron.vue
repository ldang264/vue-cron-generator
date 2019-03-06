<template>
  <div>
    <el-row class="cron-row">
      <el-col :span="16">
        <el-input ref="input8" v-model="expression" :size="size" @focus="activeTabName='8'"/>
      </el-col>
      <el-col :span="4" :offset="1">
        <el-button :size="size" type="primary" @click="reverse">{{ $t('common.reverse') }}</el-button>
      </el-col>
      <el-col :span="3">
        <el-button :size="size" type="info" @click="reset">{{ $t('common.reset') }}</el-button>
      </el-col>
    </el-row>
    <el-row class="cron-row">
      <el-row :gutter="2">
        <el-col :span="3">
          <el-input ref="input1" v-model="second.tag" :size="size" @focus="activeTabName='1'"/>
        </el-col>
        <el-col :span="4">
          <el-input ref="input2" v-model="minute.tag" :size="size" @focus="activeTabName='2'"/>
        </el-col>
        <el-col :span="4">
          <el-input ref="input3" v-model="hour.tag" :size="size" @focus="activeTabName='3'"/>
        </el-col>
        <el-col :span="4">
          <el-input ref="input4" v-model="dayOfMonth.tag" :size="size" @focus="activeTabName='4'"/>
        </el-col>
        <el-col :span="3">
          <el-input ref="input5" v-model="month.tag" :size="size" @focus="activeTabName='5'"/>
        </el-col>
        <el-col :span="3">
          <el-input ref="input6" v-model="dayOfWeek.tag" :size="size" @focus="activeTabName='6'"/>
        </el-col>
        <el-col :span="3">
          <el-input ref="input7" v-model="year.tag" :size="size" @focus="activeTabName='7'"/>
        </el-col>
      </el-row>
    </el-row>
    <el-row class="cron-row">
      <el-tabs v-model="activeTabName" type="border-card">
        <el-tab-pane name="1">
          <span slot="label">{{ $t('second.title') }}</span>
          <second
            :tag="second.tag"
            @second-change="changeSecond"/>
        </el-tab-pane>
        <el-tab-pane name="2">
          <span slot="label">{{ $t('minute.title') }}</span>
          <minute
            :tag="minute.tag"
            @minute-change="changeMinute"/>
        </el-tab-pane>
        <el-tab-pane name="3">
          <span slot="label">{{ $t('hour.title') }}</span>
          <hour
            :tag="hour.tag"
            @hour-change="changeHour"/>
        </el-tab-pane>
        <el-tab-pane name="4">
          <span slot="label">{{ $t('dayOfMonth.title') }}</span>
          <day-of-month
            :tag="dayOfMonth.tag"
            @day-of-month-change="changeDayOfMonth"/>
        </el-tab-pane>
        <el-tab-pane name="5">
          <span slot="label">{{ $t('month.title') }}</span>
          <month
            :tag="month.tag"
            @month-change="changeMonth"/>
        </el-tab-pane>
        <el-tab-pane name="6">
          <span slot="label">{{ $t('dayOfWeek.title') }}</span>
          <day-of-week
            :tag="dayOfWeek.tag"
            @day-of-week-change="changeDayOfWeek"/>
        </el-tab-pane>
        <el-tab-pane name="7">
          <span slot="label">{{ $t('year.title') }}</span>
          <year
            :tag="year.tag"
            @year-change="changeYear"/>
        </el-tab-pane>
        <el-tab-pane name="8">
          <span slot="label">{{ $t('common.help') }}</span>
          <div v-for="(item, index) in timeUnits" :key="index">
            {{ item }}:{{ $t('common.valTip') }}<strong>{{ vals[index] }}</strong>
            {{ $t('common.symbolTip') }}<strong>{{ symbols[index] }}</strong>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>

<script>
import Second from './time/second'
import Minute from './time/minute'
import Hour from './time/hour'
import DayOfMonth from './time/dayOfMonth'
import Month from './time/month'
import Year from './time/year'
import DayOfWeek from './time/dayOfWeek'
import { EMPTY, EVERY, UNFIXED, BASE_SYMBOL, DAY_OF_MONTH_SYMBOL, DAY_OF_WEEK_SYMBOL } from '../constant/filed'

export default {
  components: {
    DayOfWeek,
    Year,
    Month,
    DayOfMonth,
    Hour,
    Minute,
    Second
  },
  props: {
    defaultExpression: {
      type: String,
      default: '0 0 0 * * ?'
    },
    size: {
      type: String,
      default: 'mini'
    }
  },
  data() {
    return {
      expression: this.defaultExpression,
      second: {
        tag: EVERY
      },
      minute: {
        tag: EVERY
      },
      hour: {
        tag: EVERY
      },
      dayOfMonth: {
        tag: EVERY
      },
      month: {
        tag: EVERY
      },
      dayOfWeek: {
        tag: UNFIXED
      },
      year: {
        tag: EMPTY
      },
      activeTabName: '1',
      timeUnits: [
        this.$t('second.title'), this.$t('minute.title'), this.$t('hour.title'), this.$t('dayOfMonth.title'),
        this.$t('month.title'), this.$t('dayOfWeek.title'), this.$t('year.title')
      ],
      vals: [
        this.$t('second.val'), this.$t('minute.val'), this.$t('hour.val'), this.$t('dayOfMonth.val'),
        this.$t('month.val'), this.$t('dayOfWeek.val'), this.$t('year.val')
      ],
      symbols: [
        BASE_SYMBOL, BASE_SYMBOL, BASE_SYMBOL, DAY_OF_MONTH_SYMBOL, BASE_SYMBOL, DAY_OF_WEEK_SYMBOL, BASE_SYMBOL
      ]
    }
  },
  computed: {
    expression_: {
      get() {
        return (this.second.tag + ' ' + this.minute.tag + ' ' + this.hour.tag + ' ' + this.dayOfMonth.tag + ' ' +
          this.month.tag + ' ' + this.dayOfWeek.tag + ' ' + this.year.tag).trim()
      },
      set(newValue) {
        if (!newValue || newValue.trim().length === 0) {
          return
        }
        const arr = newValue.trim().split(' ')
        if (arr.length !== 6 && arr.length !== 7) {
          this.$message.error(this.$t('common.wordNumError'))
        }
        this.second.tag = arr[0]
        this.minute.tag = arr[1]
        this.hour.tag = arr[2]
        this.dayOfMonth.tag = arr[3]
        this.month.tag = arr[4]
        this.dayOfWeek.tag = arr[5]
        this.year.tag = arr.length === 7 ? arr[6] : ''
      }
    }
  },
  watch: {
    expression_(val) {
      this.expression = val
    },
    activeTabName(val) {
      const input_ = this.$refs['input' + val]
      if (input_) {
        input_.focus()
      }
    }
  },
  created() {
    this.reset()
    // 0 15 10 ? * 3L
    // 0 15 10 ? * 2-3
  },
  methods: {
    reverse() {
      this.expression_ = this.expression
    },
    reset() {
      this.expression = this.defaultExpression
      this.reverse()
    },
    changeSecond(tag) {
      this.second.tag = tag
    },
    changeMinute(tag) {
      this.minute.tag = tag
    },
    changeHour(tag) {
      this.hour.tag = tag
    },
    changeDayOfMonth(tag) {
      this.dayOfMonth.tag = tag
    },
    changeMonth(tag) {
      this.month.tag = tag
    },
    changeDayOfWeek(tag) {
      this.dayOfWeek.tag = tag
    },
    changeYear(tag) {
      this.year.tag = tag
    }
  }
}
</script>
