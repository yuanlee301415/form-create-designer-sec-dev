<!--
整型输入框
-->

<template>
  <div>
    <el-input v-model="value" type="text" @input="value=value.replace(/\D/g, '')"/>
  </div>
</template>

<script>
export default {
  name: "Integer",
  data() {
    return {
      value: ''
    }
  }
}
</script>