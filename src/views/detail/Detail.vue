<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" />
    <scroll class="content">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shop"/>
      <detail-image-info :detail="detail"/>
      <detail-param-info :param="param"/>
      <detail-comment-info :comment="comment"/>
    </scroll>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailImageInfo from './childComps/DetailImageInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'

  import Scroll from 'components/common/scroll/Scroll';

  import {getDetail, Goods, Shop, GoodsParam, getRecommend} from 'network/detail'

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailImageInfo,
      DetailParamInfo,
      DetailCommentInfo,
      Scroll
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detail: {},
        param: {},
        comment: {}
      }
    },
    created() {
      // 1.保存传入的iid
      this.iid = this.$route.params.iid

      // 2.根据iid请求详情数据
      getDetail(this.iid).then(res => {
        const data = res.result
        // 获取轮播图数据
        this.topImages = data.itemInfo.topImages

        // 获取商品信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      
        // 获取店铺信息
        this.shop = new Shop(data.shopInfo)

        // 获取商品参数
        
        this.param = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        // 获取详情信息
        this.detail = data.detailInfo;

        // 获取评论信息
        if(data.rate.cRate !== 0) {
          this.comment = data.rate.list[0]
        }
      })

      // 请求推荐数据
      getRecommend().then(res => {
        console.log(res);
      })
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 99;
    background-color: #fff;
    height: 100vh;
  }
  .content{
    height: calc(100% - 44px);
  }
  .detail-nav{
    position: relative;
    z-index: 9;
    background-color: #fff;
  }
</style>