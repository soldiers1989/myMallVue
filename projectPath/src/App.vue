<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
* {
    2     margin: 0;
    3     padding: 0
4 }
5 em,i {
      6     font-style: normal
  7 }
8 li {
      9     list-style: none
  10 }
11 img {
       12     border: 0;
       13     vertical-align: middle
  14 }
15 button {
       16     cursor: pointer
  17 }
18 a {
       19     color: #666;
       20     text-decoration: none
  21 }
22 a:hover {
       23     color: #c81623
  24 }
</style>
<style src="../static/font/iconfont.css" lang="css"></style>
