<template>
  <div
    class="block"
    :style="{ width, height, top, left }"
    @mouseover="mouseOverDot = true"
    @mousemove="dotHandler"
  >
    <span
      v-for="{ modificator } in sticks"
      :key="modificator"
      :class="`block__stick block__stick--${modificator}`"
      @mousemove.stop="resize(modificator, $event)"
      @mousedown.stop="mouseDownStickHandler"
      @mouseup="mouseDownStick = false"
      @mouseleave="mouseDownStick = false"
    >
    </span>
    <span
      class="block__dot"
      @mousedown="mouseDownDotHandler"
      @mouseup="mouseDownDot = false"
    ></span>
  </div>
</template>

<script>
export default {
  name: "Block",
  props: ["parentData"],
  data() {
    return {
      mouseOverDot: false,
      mouseDownDot: false,
      mouseOverStick: false,
      mouseDownStick: false,
      sticks: [
        { modificator: "top" },
        { modificator: "left" },
        { modificator: "right" },
        { modificator: "bot" },
      ],
    };
  },
  methods: {
    mouseDownDotHandler() {
      this.mouseDownDot = true;
      this.mouseOverDot = true;
    },
    mouseDownStickHandler() {
      this.mouseDownStick = true;
      this.mouseOverStick = true;
    },
    dotHandler(e) {
      e.preventDefault();
      if (!this.canDrag) return;

      const left =
        e.clientX - this.parentData.parentLeft - this.$store.getters.width / 2;
      const top =
        e.clientY - this.parentData.parentTop - this.$store.getters.height / 2;
      this.$store.commit("setTop", top);
      this.$store.commit("setLeft", left);
    },
    resize(direction, e) {
      e.preventDefault();
      if (!this.canResize) return;

      if (direction === "bot") {
        const height =
          e.clientY - this.parentData.parentTop - this.$store.getters.top;
        this.$store.commit("setHeight", height);
      } else if (direction === "right") {
        const width =
          e.clientX - this.parentData.parentLeft - this.$store.getters.left;
        this.$store.commit("setWidth", width);
      } else if (direction === "top") {
        const height =
          this.parentData.parentHeight -
          (this.parentData.parentHeight -
            (this.$store.getters.top + this.$store.getters.height)) -
          e.clientY +
          this.parentData.parentTop;
        this.$store.commit("setHeight", height);
        const top = e.clientY - this.parentData.parentTop;
        this.$store.commit("setTop", top);
      } else if (direction === "left") {
        const width =
          this.parentData.parentWidth -
          (this.parentData.parentWidth -
            (this.$store.getters.left + this.$store.getters.width)) -
          e.clientX +
          this.parentData.parentLeft;
        this.$store.commit("setWidth", width);
        const left = e.clientX - this.parentData.parentLeft;
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
    canDrag() {
      if (this.mouseDownDot && this.mouseOverDot) {
        return true;
      }
      return false;
    },
    canResize() {
      if (this.mouseDownStick && this.mouseOverStick) {
        return true;
      }
      return false;
    },
  },
};
</script>
