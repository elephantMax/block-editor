<template>
  <div id="app">
    <div class="wrapper">
      <div class="wrapper__parent parent" ref="parent">
        <Block
          :parentData="{ parentTop, parentLeft, parentWidth, parentHeight }"
        />
      </div>
      <Form class="wrapper__form" />
    </div>
  </div>
</template>

<script>
import Form from "@/components/Form.vue";
import Block from "@/components/Block.vue";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: { Form, Block },
  methods: {
    setupParent() {
      if (this.$refs.parent) {
        this.$store.commit("setParentTop", this.$refs.parent.offsetTop);
        this.$store.commit("setParentLeft", this.$refs.parent.offsetLeft);
        this.$store.commit("setParentHeight", this.$refs.parent.clientHeight);
        this.$store.commit("setParentWidth", this.$refs.parent.clientWidth);
      }
    },
  },
  mounted() {
    this.setupParent();
    window.addEventListener("resize", this.setupParent);
  },
  destroyed() {
    window.removeEventListener("resize", this.setupParent);
  },
  computed: {
    ...mapGetters(["parentTop", "parentLeft", "parentWidth", "parentHeight"]),
  },
};
</script>

