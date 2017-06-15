<template>
  <div class="wrapper">
    <div class="title">
      <image class="logo" :src="logoUrl"></image>
    </div>
    <text class="title" @click="update">Hello {{target}}</text>
    <list class="list border-s">
      <cell v-for="item in list">
        <div class="panel border-s" @click="jumpBar(item.id)">
          <text class="text">Jump to Bar: {{item.id}}</text>
        </div>
      </cell>
    </list>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        logoUrl: 'https://alibaba.github.io/weex/img/weex_logo_blue@3x.png',
        target: 'World',
        list: [{
          id: 1,
        }, {
          id: 2,
        }]
      }
    },
    methods: {
      update(e) {
        this.target = 'Weex'
        // console.log('target:', this.target)
      },
      jumpBar(id) {
        this.$router.push(`/bar/${id}`);
      },
    },
  }
</script>

<style>
  .wrapper {
    align-items: center;
    margin-top: 120px;
    flex-direction: column;
    align-items: stretch;
  }
  .title {
    font-size: 48px;
    text-align: center;
    align-items: center;
  }
  .logo {
    width: 360px;
    height: 82px;
  }
  .border-s {
    border-style: solid;
    border-color: #333;
  }
  .list {
    border-top-width: 1px;
    flex: 1;
  }
  .panel {
    flex: 1;
    margin-top: 5px;
    margin-bottom: 5px;
    border-bottom-width: 1px;
  }
  .text {
    font-size: 50px;
    text-align: center;
    color: #41B883;
  }
</style>
