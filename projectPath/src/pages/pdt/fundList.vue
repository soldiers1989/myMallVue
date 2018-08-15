<template>
  <div class="fundList">
 <mu-appbar style="width: 100%;" color="primary">
    <mu-button icon slot="left">
   <icon name="angle-left"></icon>
    </mu-button>

    <mu-button flat slot="right">LOGIN</mu-button>
    </mu-appbar>
      <icon name="angle-left"></icon>
    <icon name="angle-left"></icon>
     <icon name="angle-left"></icon>
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
