<template>
    <div id="tabList">
      <ul class="tabtop">
        <li class="weight">业绩排行</li>
        <li>偏股型</li>
        <li>指数型</li>
        <li>债券型</li>
        <li>货币型</li>
      </ul>
      <ul>
        <li class="weight">主题选基</li>
        <li>医药行业</li>
        <li>黄金</li>
        <li>5G</li>
        <li>国产芯片</li>
      </ul>
      <div class="tabCard">
        <ul>
          <li>  <i class="icon iconfont icon-jijin" style="padding-left: 0.1rem;    color: #0F51D2;"></i>基金比较</li>
          <li><i class="icon iconfont icon-gslc" style="padding-left: 0.02rem;color: #F8BB0B;"></i>有鱼宝</li>
          <li><i class="icon iconfont icon-licai" style="padding-left: 0.04rem;color: #0F51D2;"></i>定期理财</li>
          <li><i class="icon iconfont icon-wandacaifu-wode-changjianwenti-huoqichanpin-xuanzhong" style="padding-left: 0.04rem;color:#F8BB0B"></i>快速购买</li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "tab-list"
    }
</script>

<style scoped>
ul{
    font-size: 0.15rem;
    margin-left: auto;
    width: 94%;
    margin-right: 3%;
    height: 0.3rem;
    position: relative;
    top: -1.3rem;
    color: #f5f1f1;
    font-family: cursive;
  }
 ul li{
    display: inline-block;
    width: 18%;
    text-align: center;

  }
  li.weight{
    font-weight:bold;
  }
  div.tabCard{
    width: 96%;
    height: 1rem;
    background: #fff;
    margin: 0 auto;
    position: relative;
    top: -1.2rem;
  }
 div.tabCard ul{
   color: #000;
   position: relative;
   top: 0.5rem;
 }
div.tabCard ul li{
  width:23%;
}
div.tabCard ul li i{
  position: absolute;
  top: -0.5rem;
  font-size: 0.4rem;
}

</style>
