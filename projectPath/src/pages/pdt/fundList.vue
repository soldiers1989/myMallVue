<template>
  <div class="fundList">
 <mu-appbar style="width: 100%;" color="primary">
    <mu-button icon slot="left">
    <p style="height:100%"><icon name="chevron-left" scale="2"  /></p>
    </mu-button>
    <p style="text-align:center">基金</p>
    <mu-button flat slot="right"><icon name="search" scale="2"  /></mu-button>
    </mu-appbar>

<mu-card style="width: 100%; max-width: 375px; margin: 0 auto;">
  <mu-card-header title="Myron Avatar" sub-title="sub title">
    <span style="float:right">货</span>
  </mu-card-header>
  <mu-card-header title="Myron Avatar" sub-title="sub title">
    <span style="float:right">货</span>
  </mu-card-header>
  
  <mu-card-text>
    散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
   
  </mu-card-text>
  <mu-card-actions>
    <mu-button flat>Action 1</mu-button>
    <mu-button flat>Action 2</mu-button>
  </mu-card-actions>
</mu-card>
  </div>
 
</template>

<script>
import Vue from 'vue'
import {Icon} from 'muse-ui';
Vue.use(Icon)
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
