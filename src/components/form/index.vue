<template>
    <Form
      v-bind="$attrs"
      @submit="validationForm"
      ref="simpleRules"
    >
      <slot />
    </Form>
</template>

<script>
import { Form } from 'vee-validate'

import '@validations'

export default {
  components: {
    Form
  },
  emits: ['update:isValid', 'submit'],
  props: {
    isValid: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
   this.$refs.simpleRules.validate();
  },
  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then((success) => {
        // eslint-disable-next-line
        this.$emit('update:isValid', success);
        if (success) {
          this.$emit('submit')
        }
      })
      return false;
    },
  },
}
</script>
