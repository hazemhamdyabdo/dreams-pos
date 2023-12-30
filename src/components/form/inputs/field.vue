<template>
  <b-form-group :label="hideLable ? '' : $t($attrs['label-text'])">
    <Field
      ref="fieldValidator"
      v-slot="{ errors }"
      :name="$t($attrs['label-text']) || $t($attrs['name'])"
      :id="$t($attrs['label-text']) || $t($attrs['name'])"
      :rules="rules || ''"
      v-model="itemValue"
      @input="(v) => { handelInput(v);}"
      @change="onChange"
      @focus="onFocus"
      @blur="onBlur"
      :vid="name || $attrs['label-text'] || $attrs['name'] || ''"
      mode="eager"
    >
      <div class="q-mb-md">
        <b-input-group
          :size="attrs.size"
          class="mb-0" v-if="Object.keys($slots).length">
          <template
            v-if="$slots.prepend"
            #prepend
          >
            <slot name="prepend" />
          </template>
          <template
            v-if="$slots.append"
            #append
          >
            <slot name="append" />
          </template>
          <component
            ref="input1"
            :is="field"
            :type="type"
            :placeholder="placeholder || ''"
            :options="selectData"
            v-model="itemValue"
            v-bind="attrs"
            v-on="listeners"
            :id="$t($attrs['label-text']) || $t($attrs['name'])"
            :dir="dir"
            :disabled="disabled"
            :readonly="readonly"
            :multiple="multiple"
            @input="(v) => { handelInput(v);}"
            @change="onChange"
            @focus="onFocus"
            @blur="onBlur"
            @option:selected="(v) => {$emit('change', v);}"
            @keyup.enter.prevent=""
            :state="errors && errors.length > 0 ? false : null"
            v-b-tooltip.hover.v-danger
            :title="toolTipError && errors ? errors[0] || '' : ''"
          >
            <template v-if="$attrs.field === 'select'" #no-options>
              {{ $t('Sorry, no matching options') }}
            </template>
          </component>
        </b-input-group>
        <component v-else
            ref="input2"
            :is="field"
            :id="$t($attrs['label-text']) || $t($attrs['name'])"
            :type="type"
            :placeholder="placeholder || ''"
            :options="selectData"
            v-model="itemValue"
            :name="$attrs['name'] || $attrs['label-text'] || ''"
            :multiple="multiple"
            v-bind="attrs"
            v-on="listeners"
            :dir="dir"
            :disabled="disabled || ($attrs.name === 'code' && $route.params.id > 0)"
            :readonly="readonly"
            @change="onChange"
            @input="(v) => { handelInput(v);}"
            @focus="onFocus"
            @blur="onBlur"
            @wheel="$event.target.blur()"
            @option:selected="(v) => {$emit('change', v);}"
            :state="errors && errors.length > 0 ? false : null"
            v-b-tooltip.hover.v-danger
            :title="toolTipError && errors ? errors[0] || '' : ''"
          >
            <template v-if="$attrs.field === 'select'" #no-options>
              {{ $t('Sorry, no matching options') }}
            </template>
          </component>
        <small :class="{ 'd-none': !$attrs['name'] && !$attrs['label-text'] || toolTipError }" class="text-danger">{{ errors[0] }}</small>
      </div>
    </Field>
  </b-form-group>
</template>

<script>
import { Field, useField  } from 'vee-validate';

export default {
  components: {
    Field,
  },
  props: {
    options: {
      type: [Array, String],
      default: () => [],
    },
    dir: {
      type: String
    },
    value: {
      type: [Number, String, Object, Array],
      required: false,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: String,
      default: '',
    },
    itemId: {
      type: String,
      default: 'id',
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    toolTipError: {
      type: Boolean,
      default: false,
    },
    hideLable: {
      type: Boolean,
      default: false
    },
  },
  emits: ['update:value', 'input', 'change'],
  emits: ['update:modelValue'],
  setup(props, context) {
    let { attrs } = context;
    const {
      name, placeholder, type, lookup
    } = attrs;

    let { field } = attrs;

    const { modelValue, errorMessage, validate, value } = useField(attrs['label-text']);

    if (field === 'select') field = 'v-select';
    else field = 'b-form-input';
    const errors = [];
   
    attrs = Object.entries(attrs).reduce((obj, val) => {
      /* eslint-disable prefer-destructuring */
      if (['field', 'name', 'placeholder', 'type', 'lookup', ...Object.keys(props)].indexOf(val[0]) === -1) obj[val[0]] = val[1];
      return obj;
    }, {});

    const updateAndValidate = () => {
      value.value = modelValue; // Update the value to trigger reactivity
      validate(); // Trigger revalidation
    };


    const listeners = Object?.entries(context.attrs).reduce((obj, val) => {
      if (['update:modelValue'].indexOf(val[0]) === -1) obj[val[0]] = val[1];
      return obj;
    }, {});

    return {
      name,
      type,
      placeholder,
      attrs,
      field,
      lookup,
      errors,
      listeners,
      itemValue: modelValue,
      errors: errorMessage,
      updateAndValidate
    };
  },
  data() {
    return {
      selectData: [],
      itemValue: '',
      isFocus: false,
      isDirty: false,
    };
  },
  watch: {
    options(newVal) {
      this.handeloptions(newVal);
    },
    itemValue(oldVal , newVal) {
      this.handelValue(newVal);
      this.updateAndValidate()
    },
  },
  mounted() {
    this.handeloptions();
    this.handelValue(this.type === 'number' ? parseFloat(this.value).toFixed(2) : 0);
  },
  methods: {
    handeloptions() {
      if (Array.isArray(this.options)) this.selectData = this.options;
      else {
        this.$store.dispatch('lookups/getEntity', this.options).then((data) => {
          this.selectData = data;
        });
      }
      this.handelValue(this.value);
    },
    handelValue(newVal) {
      if (this.$attrs.field === 'select') {
        if (!this.multiple) {
          this.itemValue = this.selectData.find((item) => item[this.itemId] === newVal) || null;
        } else {
          this.itemValue = newVal;
          this.$emit('update:modelValue', newVal);
        }
      } else {
        this.itemValue = newVal;
        this.$emit('update:modelValue', this.type === 'number' ? parseFloat(newVal) || 0 : newVal);
        this.updateAndValidate()
      }
      
    },
    handelInput(val, isWriteAction = true) {
      this.isDirty = isWriteAction;
      if (this.$attrs.field === 'select') {
        if (!this.multiple) {
          val = val ? val[this.itemId] : null;
        }
      }
      this.$emit('update:modelValue', this.type === 'number' ? parseFloat(val) || 0 : val);
      this.$emit('input', val);
      this.updateAndValidate()
    },
    onFocus() {
        if (this.type === 'number') this.itemValue = parseFloat(this.itemValue) || 0;
    },
    onBlur() {
      if (this.type === 'number') this.itemValue = parseFloat(this.itemValue) || 0;
    },
    onChange(v) {
      if (this.type === 'number' &&  this.name !== 'code') this.itemValue = parseFloat(v).toFixed(2);
      this.$emit('update:modelValue', this.type === 'number' ? parseFloat(v) || 0 : v);
      this.updateAndValidate()
    },
  },
};
</script>
