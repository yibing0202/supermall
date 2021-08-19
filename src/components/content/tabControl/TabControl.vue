<template>
  <div class="control">
  <div class="control-item" v-for="(item, index) in title" :key="index"
   :class="{active: index === currentIndex}"
   @click="tabItem(index)">
     <span>{{item}}</span>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    tabItem(index) {
      this.currentIndex = index
    }
  },
}
</script>

<style>
.control {
  display: flex;
  position: sticky;
  top: 44px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.control-item {
  flex: 1;
}
.active {
  color: pink;
}
.active span {
  padding: 5px;
  border-bottom: 2px solid pink;
}
</style>