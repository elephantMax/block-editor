<template>
  <div id="app">
    <div class="wrapper">
      <div class="wrapper__parent parent">
        <Block />
      </div>
      <Form class="wrapper__form" />
    </div>
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
import Block from '@/components/Block.vue'

export default {
  name: 'App',
  components: { Form, Block }
}
</script>

