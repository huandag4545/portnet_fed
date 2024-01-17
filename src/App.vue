<template>
  <div>
    <LayoutHeader></LayoutHeader>
    <LayoutNav></LayoutNav>
    <router-view></router-view>
    <!-- <router-view></router-view> -->

  </div>
</template>

<script>
import LayoutHeader from './components/layout/LayoutHeader.vue';
import LayoutNav from './components/layout/LayoutNav.vue';

export default {
  name: 'App',
  components: {
    LayoutHeader,
    LayoutNav,
  }
}
</script>

<style>
body {
  padding: 0;
  margin: 0 auto;
}

.content {
  display: flex;
  width: 1200px;
  margin: 0 auto;
  margin-top: 20px;
}

.ml-10px {
  margin-left: 10px;
}

.fs-12px {
  font-size: 12px;
}

.fs-10px {
  font-size: 10px;
}

.fs-14px {
  font-size: 14px;
}

.btn_blue {
  background-color: #1E90FF;
  color: #FFFFFF;
  text-decoration: none;
  border-radius: 10px;
  padding: 8px;
}

.btn_blue:hover {
  background-color: #6df6ea;
}

.btn_gray {
  background-color: #808080;
  color: #FFFFFF;
  text-decoration: none;
  border-radius: 10px;
  padding: 8px;
}

.btn_gray:hover {
  background-color: #666666;
}

.container {
  margin: 0 auto;
  width: 80%;
  margin-top: 70px;
}

.title {
  text-align: center;
  font-size: 1.6rem;
  font-style: unset;
  font-weight: bold;
  margin-bottom: 40px;
}
</style>
