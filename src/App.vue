<template>
  <div id="app">
    <div class="wrapper">
      <div class="wrapper__parent parent">
        <div class="block">
          <span class="block__stick block__stick--top"></span>
          <span class="block__stick block__stick--left"></span>
          <span class="block__stick block__stick--right"></span>
          <span class="block__stick block__stick--bottom"></span>
          <span class="block__dot"></span>
        </div>
      </div>
      <form class="wrapper__form form">
        <div class="form__group">
          <label class="form__label">
            Top
          </label>
          <input class="form__input input" type="text">
        </div>
         <div class="form__group">
          <label class="form__label">
            Left
          </label>
          <input class="form__input input" type="text">
        </div>
         <div class="form__group">
          <label class="form__label">
            Height
          </label>
          <input class="form__input input" type="text">
        </div>
         <div class="form__group">
          <label class="form__label">
            Width
          </label>
          <input class="form__input input" type="text">
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

