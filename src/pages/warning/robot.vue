<template>
  <div class="robotCon">
    <warnLine></warnLine>
  </div>
</template>

<script>
import warnLine from './charts/warningLine.vue'
export default {
  name: "",
  data() {
    return {};
  },
  props: {},
  components: {
    warnLine
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style lang='less' scoped >
// .robotCon{

// }
.circular {
  width: 200px;
  height: 200px;
  margin: 100px;
}
.circular path {
  fill: none;
}
.circular svg {
  display: block;
  overflow: visible;
}
</style>