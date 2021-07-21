<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
  <home-swiper :banners="banners"></home-swiper>
  <recommend-view :recommends="recommends"></recommend-view>
  <feature-view/>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from './childcomps/HomeSwiper.vue'
import RecommendView from './childcomps/RecommendView.vue'
import FeatureView from './childcomps/FeatureView.vue'
import {getHomeMultidata} from 'network/home'
export default {
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    }).catch(err => {
      console.log(err);
    })
  },
};
</script>

<style>
.home-nav {
  background-color: pink;
  color: #fff;
  font-size: 18px;
}
</style>