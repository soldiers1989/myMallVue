<template>
  <div>
    <div class="finacial">
      <h1>有鱼宝：闲钱理财专家</h1>
      <p>收益稳定|想用随时存取|宝内金额可购买基金</p>
      <p class="tab">4.098%</p>
      <p class="ared">最高七日年华收益率</p>
      <p><a>立即购买</a></p>
    </div>
    <div class="gd_finacial">
      <h1>固定理财</h1>
      <div class="pdt_list">
      <ul >
        <li product_id="191311" product_code="004417"><h5>兴全货币B</h5><strong>3.99<small>%</small></strong><p>七日年化收益</p></li>
        <li product_id="191637" product_code="392002"><h5>中海货币基金B级</h5><strong>3.51<small>%</small></strong><p>七日年化收益</p></li>
        <li product_id="190889" product_code="003003"><h5>华夏现金</h5><strong>3.50<small>%</small></strong><p>七日年化收益</p></li>
      </ul>
      </div>
    </div>
    <div class="rd_finacial">
      <h1>热点投资</h1>
      <div class="pdt_list">
        <ul >
          <li product_id="191311" product_code="004417"><h5>兴全货币B</h5><strong>3.99<small>%</small></strong><p>七日年化收益</p></li>
          <li product_id="191637" product_code="392002"><h5>中海货币基金B级</h5><strong>3.51<small>%</small></strong><p>七日年化收益</p></li>
          <li product_id="190889" product_code="003003"><h5>华夏现金</h5><strong>3.50<small>%</small></strong><p>七日年化收益</p></li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "pdt"
    }
</script>

<style scoped>
  div.finacial{
    font-size: 0.1rem;
    position: relative;
    top: -1.1rem;
    text-align: center;
    background: #fff;
    padding: 0.1rem;
  }
  .finacial h1{
    display: inline-block;
    background: linear-gradient(90deg, transparent 3%, #6350ff 96%,transparent 98%);
    font-size: 0.15rem;
  }
  .finacial p{
    color: #817c7c;
  }
  p.tab{
    font-size: 0.25rem;
  }
  p.ared{
    color: #ec3b3b;
  }
  p.agreen{
    color: #0a8f0a;
  }
  div.gd_finacial{
    font-size: 0.1rem;
    position: relative;
    top: -1rem;
    background: #fff;
  }
  .gd_finacial div.item{
    float: left;
  }
  .gd_finacial ul{
    width: 5rem;
    overflow: hidden;
    padding: 0 0.15rem;
  }
  .gd_finacial ul li{
     float: left;
     width: 1.35rem;
     height: 0.96rem;
     text-align: center;
     padding: 0.14rem 0.1rem;
     background: #f8f8f8;
  }
  h1{
    text-align: center;
  }
  .pdt_list{
    overflow-x:scroll;
  }
  div.rd_finacial{
    font-size: 0.1rem;
    position: relative;
    top: -1rem;
    background: #fff;
    text-align: center;
  }
</style>
