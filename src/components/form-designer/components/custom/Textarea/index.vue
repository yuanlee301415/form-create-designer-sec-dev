<template>
  <div>
    <el-input v-model="value" :rows="rows" type="textarea"/>
  </div>
</template>

<script>
export default {
  name: "Textarea",
  props: {
    rows: Number
  },
  data() {
    return {
      value: ''
    }
  }
}
</script>