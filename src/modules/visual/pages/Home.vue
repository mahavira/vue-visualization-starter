
<template>
<section class="page page-layout">
  <div v-for="(item,index) in page" :key="index"></div>
</section>
</template>

<script>
export default {
  data() {
    return {
      layout: {
        gutter: 10,
        col: 12,
      },
      page: [{
        left: 0,
        top: 0,
        width: 6,
        height: 3,
        title: '',
        options: {},
        component: '',
      }],
    };
  },
  mounted() {
    // const width = document.querySelector('.lx-main').clientWidth;
  },
  methods: {
  },
};
</script>
