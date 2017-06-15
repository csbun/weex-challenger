<template>
  <div>
    <text>Hello Bar {{barId}}</text>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        barId: this.$route.params.id,
      };
    }
  }
</script>