<template>
  <div>
    <el-input v-model="value" type="text" @input="value=value.replace(/\D/g, '')"/>
  </div>
</template>

<script>
export default {
  name: "TestComponent",
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style scoped>

</style>