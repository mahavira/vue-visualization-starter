<template>
<el-scrollbar
  :class="{ collapsed: collapsed }">
  <el-menu
    :router="true"
    :default-active="$route.path"
    :collapse="collapsed"
    text-color="#333"
    background-color="#eee">
      <lx-menu-item v-for="item in menus"
      :key="item.path"
      :route="item"
      ></lx-menu-item>
  </el-menu>
</el-scrollbar>
</template>
<script>
import LxMenuItem from './MenuItem.vue';

export default {
  name: 'LxMenu',
  components: {
    LxMenuItem,
  },
  computed: {
    menus() {
      return this.$store.state.menu;
    },
    collapsed() {
      return !this.$store.state.sidebar.opened;
    },
  },
};
</script>
