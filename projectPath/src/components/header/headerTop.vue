<template>
    <header id='head_top'>
         <mu-appbar style="width: 100%;" color="primary">
    <mu-button icon slot="left" v-if="goBack" >
    <p style="height:100%"><icon name="chevron-left"   /></p>
    </mu-button>
    <p style="text-align:center">{{headTitle}}</p>
  <mu-button flat slot="right" v-if="isSearch"><icon name="search"   /></mu-button>
    <!-- <mu-button flat slot="right"><icon name="search"   /></mu-button> -->
    </mu-appbar>
    </header>
</template>

<script>
   import {mapState, mapActions} from 'vuex'
    export default {
    	data(){
            return{

            }
        },
        mounted(){
           

        },
        props: ['signinUp', 'headTitle', 'goBack','isSearch'],
        computed: {
          
        },
        methods: {
           
        },

    }
</script>

<style  scoped>
   
</style>
