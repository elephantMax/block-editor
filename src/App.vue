<template>
  <div id="app">
    <div class="wrapper" >
      <div class="wrapper__parent parent" ref="parent">
        <Block :parentData="{parentTop, parentLeft}" />
      </div>
      <Form class="wrapper__form" />
    </div>
  </div>
</template>

<script>
import Form from "@/components/Form.vue";
import Block from "@/components/Block.vue";

export default {
  name: "App",
  data() {
    return {
      parentTop: null,
      parentLeft: null
    }
  },
  components: { Form, Block },
  mounted() {
    if(this.$refs.parent) {
      this.parentTop = this.$refs.parent.offsetTop
      this.parentLeft = this.$refs.parent.offsetLeft
    }
  }
};
</script>

