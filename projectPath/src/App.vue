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
        margin: 0;
     padding: 0
 }
 em,i {
        font-style: normal
  }
 li {
         list-style: none
  10 }
 img {
          border: 0;
         vertical-align: middle
 }
 button {
          cursor: pointer
  17 }
 a {
           color: #666;
           text-decoration: none
   }
 a:hover {
          color: #c81623
  }
</style>
<style src="../static/font/iconfont.css" lang="css"></style>
