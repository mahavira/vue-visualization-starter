
<template>
<section class="page page-layout">
  <el-row :gutter="20">
    <el-col :span="16"><div class="grid-content bg-purple">
      <component :is="comps.Bar" />
    </div></el-col>
    <el-col :span="8"><div class="grid-content bg-purple">
      <component :is="comps.Bar" /></div>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="8"><div class="grid-content bg-purple">
      <component :is="comps.Bar" /></div>
    </el-col>
    <el-col :span="8"><div class="grid-content bg-purple">
      <component :is="comps.Bar" /></div>
    </el-col>
    <el-col :span="4"><div class="grid-content bg-purple">
      <component :is="comps.Bar" /></div>
    </el-col>
    <el-col :span="4"><div class="grid-content bg-purple">
      <component :is="comps.Bar" /></div>
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col :span="4"><div class="grid-content bg-purple">
      <component :is="comps.Bar" /></div>
    </el-col>
    <el-col :span="16"><div class="grid-content bg-purple">
      <component :is="comps.Bar" /></div>
    </el-col>
    <el-col :span="4"><div class="grid-content bg-purple">
      <component :is="comps.Bar" /></div>
    </el-col>
  </el-row>
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
      comps: components,
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>
<style lang="scss" scoped>
.grid-content{
  height: 200px;
  background: #EEE;
}
/deep/{
  .el-row{
    margin-bottom: 20px;
  }
}
</style>
