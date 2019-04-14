<template>
  <header>
    <div class="logo" @click="openedCommonView('ServiceList')">
      <i class="fa fa-apple"></i> {{PROJECT_NAME}}
      <a href="javascript:;"><i class="fa fa-angle-down"></i></a>
    </div>
    <div>
      <a href="javascript:;" class="item circle" @click="openedCommonView('MessageList')">
        <i class="fa fa-bell-o"></i>
      </a>
      <el-dropdown placement="bottom-end">
        <a href="javascript:;" class="item">
        <i class="fa fa-user"></i> {{userinfo.username}} <i class="fa fa-angle-down"></i>
      </a>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="openedCommonView('Userinfo')">
          <i class="fa fa-user"></i> 用户信息
        </el-dropdown-item>
        <el-dropdown-item @click.native="openedCommonView('Preference')">
          <i class="fa fa-cog"></i> 编好设置
        </el-dropdown-item>
        <el-dropdown-item @click.native="$router.logout">
          <i class="fa fa-sign-out"></i> 退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </div>
  </header>
</template>
<script>
import { PROJECT_NAME } from '../../config';

export default {
  name: 'LxHeader',
  data() {
    return {
      PROJECT_NAME,
    };
  },
  computed: {
    userinfo() {
      return this.$store.state.userinfo;
    },
  },
  methods: {
    openedCommonView(e) {
      this.$store.commit('TOGGLE_COMMON_VIEW', e);
    },
  },
};
</script>

<style lang="scss" scoped>
.logo{
  cursor: pointer;
  a{
    margin-left: 5px;
    color: #AAA;
    transition: all 0.3s;
  }
  &:hover{
    a{
      color: #CCC;
    }
  }
}
.item{
  background: #FFF;
  border-radius: 15px;
  padding: 2px 15px;
  line-height: 1;
  font-size: 14px;
  border: 1px dashed transparent;
  margin-left: 10px;
  &:hover{
    border-color: #aaa;
  }
}
</style>
