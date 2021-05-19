<template>
  <van-grid>
    <van-grid-item>
      <van-icon class="iconfont" class-prefix="icon" name="tuijian" />
      <span class="van-grid-item__text">每日推荐</span>
    </van-grid-item>
    <van-grid-item>
      <van-icon class="iconfont" class-prefix="icon" name="FM" />
      <span class="van-grid-item__text">私人FM</span>
    </van-grid-item>
    <van-grid-item>
      <van-icon class="iconfont" class-prefix="icon" name="gedan" />
      <span class="van-grid-item__text">歌单</span>
    </van-grid-item>
    <van-grid-item>
      <van-icon class="iconfont" class-prefix="icon" name="paihang" />
      <span class="van-grid-item__text">排行榜</span>
    </van-grid-item>
    <van-grid-item>
      <van-icon class="iconfont" class-prefix="icon" name="zhibobofangshexiangjiguankanmianxingbeifen" />
      <span class="van-grid-item__text">直播</span>
    </van-grid-item>
    <van-grid-item>
      <van-icon class="iconfont" class-prefix="icon" name="zhuanji" />
      <span class="van-grid-item__text">数字专辑</span>
    </van-grid-item>
    <van-grid-item>
      <van-icon class="iconfont" class-prefix="icon" name="shouye" />
      <span class="van-grid-item__text">歌房</span>
    </van-grid-item>
    <van-grid-item>
      <van-icon class="iconfont" class-prefix="icon" name="competition" />
      <span class="van-grid-item__text">游戏专区</span>
    </van-grid-item>
  </van-grid>
</template>

<script>
export default {
  props: {
    homePersonalizedArray: {}
  }
}
</script>

<style lang="less" scoped>
  .iconfont{
    font-size: 25px;
    background-image:-webkit-linear-gradient(bottom,#f24e3f,#f997a3); 
    -webkit-background-clip:text; 
    -webkit-text-fill-color:transparent;
  }
</style>