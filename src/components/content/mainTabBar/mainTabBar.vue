<template>
  <tab-bar>
    <tab-bar-item path="/home" >
      <img slot="item-icon" src="@/assets/img/TabBar/home.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/TabBar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
     <tab-bar-item path="/category">
      <img slot="item-icon" src="@/assets/img/TabBar/category.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/TabBar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
     <tab-bar-item path="/shopCar" >
      <img slot="item-icon" src="@/assets/img/TabBar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/TabBar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
     <tab-bar-item path="/profile" >
      <img slot="item-icon" src="@/assets/img/TabBar/profile.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/TabBar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
    </tab-bar>
</template>

<script>
import TabBar from 'components//common/TabBar/TabBar.vue'
import TabBarItem from 'components/common/TabBar/TabBarItem.vue'
export default {
components: {
  TabBar,
  TabBarItem
}
}
</script>

<style>

</style>