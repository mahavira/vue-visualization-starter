<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
    import Layout from '@/modules/user/pages/Home.vue';

export default {
  name: 'App',
  created() {
    this.$router.addRoutes([{
      path: '/user',
      meta: {
        title: '用户管理系统',
      },
      component: Layout,
    }]);

    console.log('app created');
  },
};
</script>
