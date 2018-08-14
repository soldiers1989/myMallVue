<template>
  <div>
    <div class="finacial">
      <h1>有鱼宝：闲钱理财专家</h1>
      <p>收益稳定|想用随时存取|宝内金额可购买基金</p>
      <p class="tab">{{hotFinan[0].annual_profit}}%</p>
      <p class="ared">最高七日年华收益率</p>
      <p><a>立即购买</a></p>
    </div>
    <div class="gd_finacial">
      <h1>固定理财</h1>
      <div class="pdt_list">
      <ul >
        <li v-for="item in hotFinan" :product_id="item.product_id" :product_code="item.product_code" >
          <div v-if="item.fund_type==10300">
          <h5>{{item.product_name}}</h5><strong>{{item.annual_profit}}<small>%</small></strong><p>七日年化收益</p>
          </div>
          <div v-else>
              <h5>{{item.product_name}}</h5><strong>{{item.yieldrate1m}}<small>%</small></strong><p>近一月收益</p>
          </div>
        </li>
      </ul>
      </div>
    </div>
    <div class="rd_finacial">
      <h1>热点投资</h1>
      <div class="pdt_list">
        <ul >
         <li v-for="item in hotFinan" :product_id="item.product_id" :product_code="item.product_code" >
          <div v-if="item.fund_type==10300">
          <h5>{{item.product_name}}</h5><strong>{{item.annual_profit}}<small>%</small></strong><p>七日年化收益</p>
          </div>
          <div v-else>
              <h5>{{item.product_name}}</h5><strong>{{item.yieldrate1m}}<small>%</small></strong><p>近一月收益</p>
          </div>
        </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
import productService from '@/services/productService.js'
    export default {
        name: "pdt",
        data(){
          return {
            "hotFinan":[]
          }
        },
        mounted(){
          var that = this;
          /**
           * 查询热点投资产品
           */
          var param = {
              "recommend_type":"4",
              "page":1,
              "numPerPage":3
          }
          productService.queryCommendProduct(param,function(data){
           that.hotFinan = data.data.results[0].data;
           console.log(that.hotFinan)
          },{})
        }
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
