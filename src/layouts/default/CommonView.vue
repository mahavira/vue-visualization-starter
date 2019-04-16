<template>
<transition name="slide-down">
  <section class="lx-common-view" v-for="(view,key) in commonViews"
  :key="key" v-if="commonView==key">
    <div class="common-view-close" @click="close">
      <i class="el-icon-error"></i>
    </div>
    <component :is="view"/>
  </section>
</transition>
</template>
<script>
import ServiceList from './common/ServiceList.vue';
import MessageList from './common/MessageList.vue';
import Userinfo from './common/Userinfo.vue';
import Preference from './common/Preference.vue';

export default {
  name: 'LxCommonView',
  data() {
    return {
      commonViews: {
        ServiceList,
        MessageList,
        Userinfo,
        Preference,
      },
    };
  },
  computed: {
    commonView() {
      return this.$store.state.commonView;
    },
  },
  mounted() {
    window.addEventListener('keyup', (e) => {
      if (e.keyCode === 27) {
        if (this.$store.state.commonView) {
          this.$store.commit('SET_ATTR', {
            commonView: '',
          });
        }
      }
    });
  },
  methods: {
    close() {
      this.$store.commit('SET_ATTR', {
        commonView: '',
      });
    },
  },
};
</script>
<style>
.common-view-close{
  position: absolute;
  right: 0px;
  top: 0px;
  width: 40px;
  height: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
  color: #888;
}
</style>
