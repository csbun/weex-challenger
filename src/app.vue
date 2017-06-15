<template>
  <div @androidback="back">
    <div class="nav">
      <text class="nav-i" @click="jumpFoo">Foo</text>
      <text class="nav-i" @click="jumpBar">Bar</text>
    </div>
    <router-view style="flex:1"></router-view>
  </div>
</template>

<style>
  .nav {
    flex-direction: row;
  }
  .nav-i {
    flex: 1;
    color: #41B883;
    font-size: 48px;
    text-align: center;
    border-width: 2px;
    border-color: #abc;
    border-style: solid;
  }
</style>

<script>
  export default {
    methods: {
      back: function() {
        this.$router.back();
      },
      jumpFoo: function() {
        this.$router.push('/foo');
      },
      jumpBar: function() {
        this.$router.push('/bar/0');
      },
    }
  }
</script>