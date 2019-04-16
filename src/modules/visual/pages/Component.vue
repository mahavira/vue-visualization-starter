
<template>
<section class="page page-layout">
  <div class="component-box">
    <component :is="$route.params.id" />
  </div>
</section>
</template>
<script>
import { requireContext } from '../../../util';

const components = {};
requireContext(require.context('../../../components', false, /\.vue$/), (name, context) => {
  components[name] = context.default || context;
});
export default {
  data() {
    return {
    };
  },
  components,
  mounted() {
  },
  methods: {
  },
};
</script>
<style lang="scss" scoped>
.component-box{
  height: 300px;
}
</style>
