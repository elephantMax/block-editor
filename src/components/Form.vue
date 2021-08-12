<template>
  <form class="form" @submit.prevent>
    <div class="form__group">
      <label class="form__label"> Top </label>
      <input class="form__input input" type="number" :value="top" @input="updateTop" />
    </div>
    <div class="form__group">
      <label class="form__label"> Left </label>
      <input class="form__input input" type="number" :value="left" @input="updateLeft" />
    </div>
    <div class="form__group">
      <label class="form__label"> Height </label>
      <input class="form__input input" type="number" :value="height" @input="updateHeight" />
    </div>
    <div class="form__group">
      <label class="form__label"> Width </label>
      <input class="form__input input" type="number" :value="width" @input="updateWidth" />
    </div>
  </form>
</template>

<script>
import { mapGetters } from 'vuex'

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
  computed: {
    ...mapGetters(['top', 'left', 'width', 'height'])
  }
};
</script>

<style>
</style>