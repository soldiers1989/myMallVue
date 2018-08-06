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
          <img src="../../../static/images/earth.png" class="mimg"/>
        <div class="scolldiv">
          <swiper auto height="30px" direction="vertical" :interval=2000 class="text-scroll" :show-dots="false" :loop="true">
            <swiper-item><p>义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p><p>义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p></swiper-item>
            <swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p><p>义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p></swiper-item>
            <swiper-item><p>零哥章魚 完成传奇世界H5-王者归来任务 获得30金币</p><p>义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p></swiper-item>
            <swiper-item><p>做迎而為 兑换【饿了么】畅享美食红包 消耗20金币</p><p>义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p></swiper-item>
            <swiper-item><p>只知道不知道 兑换【饿了么】畅享美食红包 消耗20金币</p><p>义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p></swiper-item>
            <swiper-item><p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p><p>义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p></swiper-item>
          </swiper>
        </div>
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
    height: 1.3rem;
    background: #fff;
    margin: 0 auto;
    position: relative;
    top: -1.2rem;
  }
 div.tabCard ul{
   color: #000;
   position: relative;
   top: 0.5rem;
   border-bottom: 1px solid #ead9d9;
 }
div.tabCard ul li{
  width:23%;
}
div.tabCard ul li i{
  position: absolute;
  top: -0.5rem;
  font-size: 0.4rem;
}
img.mimg{
  width: 0.3rem;
  position: relative;
  top: -0.3rem;
  left: 0.1rem;
}
div.scolldiv{
  font-size: 0.1rem;
  position: absolute;
  top: 0.9rem;
  left:0.5rem;
  height:0.4rem;
  width:88%
}
</style>
