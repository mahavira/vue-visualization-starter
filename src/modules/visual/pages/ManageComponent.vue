
<template>
<el-row :gutter="20">
  <el-col :span="6" v-for="(o) in 3" :key="o" style="margin-bottom:20px;">
    <el-card :body-style="{ padding: '10px' }">
      <img style="width:100%" src="/examples/1.jpg" class="image">
      <div>
        <el-row type="flex" justify="space-between">
          <el-col :span="7">
            大屏
          </el-col>
          <el-col :span="20">
            <div class="bottom clearfix">
              <el-button type="primary" size="mini">编辑</el-button>
              <el-button type="danger" size="mini">删除</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
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
