<template>
  <div class="block" :style="{ width, height, top, left }">
    <span class="block__stick block__stick--top"></span>
    <span class="block__stick block__stick--left"></span>
    <span class="block__stick block__stick--right"></span>
    <span class="block__stick block__stick--bottom"></span>
    <span
      class="block__dot"
      @mousemove="dotHandler"
      @mousedown="mouseDownHandler"
      @mouseover="mouseOver = true"
      @mouseleave="mouseLeaveHandler"
      @mouseup="mouseDown = false"
    ></span>
    {{ mouseOver }} {{ mouseDown }}
  </div>
</template>

<script>
export default {
  name: "Block",
  props: ["parentData"],
  data() {
    return {
      mouseOver: false,
      mouseDown: false,
    };
  },
  methods: {
    mouseLeaveHandler() {
      this.mouseOver = false;
      this.mouseDown = false;
    },
    mouseDownHandler() {
      this.mouseDown = true;
      this.mouseOver = true;
    },
    dotHandler(e) {
      e.preventDefault();
      if (this.canResize) {
        const left =
          e.clientX -
          this.parentData.parentLeft -
          this.$store.getters.width / 2;
        const top =
          e.clientY -
          this.parentData.parentTop -
          this.$store.getters.height / 2;
        this.$store.commit("setTop", top);
        this.$store.commit("setLeft", left);
      }
    },
  },
  computed: {
    top() {
      return `${this.$store.getters.top}px`;
    },
    left() {
      return `${this.$store.getters.left}px`;
    },
    height() {
      return `${this.$store.getters.height}px`;
    },
    width() {
      return `${this.$store.getters.width}px`;
    },
    canResize() {
      if (this.mouseDown && this.mouseOver) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style>
</style>