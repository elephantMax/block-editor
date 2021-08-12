<template>
  <form class="form" @submit.prevent>
    <div class="form__group">
      <label class="form__label"> Top </label>
      <input class="form__input input" type="number" @input="updateTop" />
    </div>
    <div class="form__group">
      <label class="form__label"> Left </label>
      <input class="form__input input" type="number" @input="updateLeft" />
    </div>
    <div class="form__group">
      <label class="form__label"> Height </label>
      <input class="form__input input" type="number" @input="updateHeight" />
    </div>
    <div class="form__group">
      <label class="form__label"> Width </label>
      <input class="form__input input" type="number" @input="updateWidth" />
    </div>
  </form>
</template>

<script>
export default {
  name: "Form",
  methods: {
    updateWidth(e) {
      this.$store.commit('setWidth', e.target.value)
    },
    updateHeight(e) {
      this.$store.commit('setHeight', e.target.value)
    },
    updateTop(e) {
      this.$store.commit('setTop', e.target.value)
    },
    updateLeft(e) {
      this.$store.commit('setLeft', e.target.value)
    },
  },
};
</script>

<style>
</style>