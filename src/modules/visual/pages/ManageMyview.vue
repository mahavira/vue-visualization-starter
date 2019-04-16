
<template>
<el-row :gutter="20">
  <el-col :span="6" v-for="(o) in 6" :key="o" style="margin-bottom:20px;">
    <el-card class="card">
      <img style="width:100%" src="/examples/1.jpg" class="image">
      <el-row type="flex" justify="space-between">
        <el-col :span="7">
          大屏
        </el-col>
        <el-col :span="21">
          <div class="bottom clearfix">
            <el-button type="primary" size="mini">编辑</el-button>
            <el-button type="danger" size="mini">删除</el-button>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </el-col>
  <el-col :span="6">
    <el-card class="card-add">
      <i class="el-icon-plus avatar-uploader-icon"></i>
    </el-card>
  </el-col>
</el-row>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date(),
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>
<style scoped lang="scss">
/deep/ {
  .el-card__body{
    padding: 10px;
  }
  .card-add {
    padding: 10px;
    height: 100px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
