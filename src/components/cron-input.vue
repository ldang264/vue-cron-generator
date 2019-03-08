<template>
  <div>
    <el-popover v-model="visible">
      <cron v-model="cron_" :size="size" @change="change"/>
      <el-input slot="reference" v-model="cron_" :placeholder="$t('common.inputPlaceholder')" size="mini">
        <el-button slot="append" icon="el-icon-refresh" @click="reset"/>
      </el-input>
    </el-popover>
  </div>
</template>

<script>
import Cron from './cron'
import { DEFAULT_CRON_EXPRESSION } from '../constant/filed'
export default {
  name: 'CronInput',
  components: {
    Cron
  },
  props: {
    value: {
      type: String,
      default: DEFAULT_CRON_EXPRESSION
    },
    size: {
      type: String,
      default: 'mini'
    }
  },
  data() {
    return {
      cron_: '',
      visible: false
    }
  },
  watch: {
    value(val) {
      this.setCron(val)
    }
  },
  created() {
    this.setCron(this.value)
  },
  methods: {
    setCron(newValue) {
      if (!newValue || newValue.trim().length < 11) {
        this.$message.error(this.$t('common.wordNumError'))
        return
      }
      this.cron_ = newValue
    },
    change(cron) {
      this.cron_ = cron
      this.$emit('change', cron)
    },
    reset() {
      this.$emit('reset', this.value)
    }
  }
}
</script>
