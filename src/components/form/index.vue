<template>
  <!-- <validation-observer ref="simpleRules"> -->
    <b-form
      v-bind="$attrs"
      @keyup.enter.prevent
      novalidate
    >
      <slot />
    </b-form>
  <!-- </validation-observer> -->
</template>

<script>
// import { ValidationObserver } from 'vee-validate'

// import '@validations'

export default {
  components: {
    // ValidationObserver,
  },
  emits: ['update:isValid', 'submit'],
  props: {
    isValid: {
      type: Boolean,
      default: true,
    },
  },
  mounted() {
  //  this.$refs.simpleRules.validate;
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
