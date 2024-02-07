<template>
  <h1>Hello Vue 3</h1>
  <span>ini {{ this.saldo }}</span>
  <span v-if="!this.saldo">0</span>
  <span v-else>saldo: {{ this.saldo }}</span>
</template>

<script>
  export default {
    data() {
      return {
        saldo: 0,
      }
    },
    created() {
      this.saldo = undefined;
      console.log(this.saldo);
    },
  };
</script>

<style>
button {
  font-weight: bold;
}
</style>