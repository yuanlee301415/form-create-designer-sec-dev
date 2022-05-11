<!--
整型输入框
-->

<template>
  <div>
    <el-input v-model="value" type="number" @input="value=value.replace(/[^.\d]/g, '')"/>
  </div>
</template>

<script>
export default {
  name: "Float",
  data() {
    return {
      value: ''
    }
  }
}
</script>