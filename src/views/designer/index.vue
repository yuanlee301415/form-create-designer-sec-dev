<template>
  <div>
    <fc-designer ref="designer" height="calc(100vh - 40px)">
      <template slot="handle">
        <ElButton @click="getRule">GetRule</ElButton>
        <ElButton @click="setRule">SetRule</ElButton>
        <ElButton @click="getJson">GetJson</ElButton>
        <ElButton @click="getOption">GetOption</ElButton>
      </template>
    </fc-designer>
  </div>
</template>

<script>
import FcDesigner  from '@/components/form-designer'
import formRules from './formRules2.json'

export default {
  name: 'FormDesigner',
  components: {
    FcDesigner
  },
  data() {
    return {

    }
  },
  methods: {
    /**
     * 获取表单规则对象
     */
    getRule() {
      const rule = this.$refs.designer.getRule()
      console.log('rule:', rule)
    },

    /**
     * 设置表单规则对象
     */
    setRule() {
      this.$refs.designer.setRule(formRules)
    },

    /**
     * 获取表单规则对象序列化字符串
     */
    getJson() {
      const json = this.$refs.designer.getJson()
      console.log('json:', json)
    },

    /**
     * 获取表单全局匹配对象
     */
    getOption() {
      const option = this.$refs.designer.getOption()
      console.log('option:', option)
    }
  }
}
</script>
