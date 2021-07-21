<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link"></a>
      <img :src="item.image" alt="">
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }

}
</script>

<style>
.recommend {
  display: flex;
  padding: 10px 0 20px;
  border-bottom: 8px solid #f6f6f6;
}
.recommend-item {
  flex: 1;
  padding: 10px;
  text-align: center;
}
.recommend-item img {
  width: 100%;
  margin-bottom: 5px;
}
.recommend-item p {
  font-size: 12px;
}
</style>