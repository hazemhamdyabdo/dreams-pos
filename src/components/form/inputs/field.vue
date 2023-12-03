<template>
  <b-form-group :label="hideLable ? '' : $t($attrs['label-text'])">
    <Field
      ref="fieldValidator"
      v-slot="{ errors }"
      :name="$t($attrs['label-text']) || ''"
      :rules="rules || ''"
      :vid="name || $attrs['label-text'] || placeholder || ''"
      mode="eager"
    >
      <div class="q-mb-md">
        <b-input-group
          :size="attrs.size"
          class="mb-0"
          v-if="Object.keys($slots).length"
        >
          <template v-if="$slots.prepend" #prepend>
            <slot name="prepend" />
          </template>
          <template v-if="$slots.append" #append>
            <slot name="append" />
          </template>
          <component
            ref="input1"
            :is="field"
            :type="type"
            :placeholder="$t(placeholder) || ''"
            :options="selectData.filter(filterFn)"
            :value="itemValue"
            v-bind="attrs"
            v-on="listeners"
            :dir="dir"
            :disabled="disabled"
            :readonly="readonly"
            :multiple="multiple"
            @input="
              (v) => {
                handelInput(v);
              }
            "
            @change="onChange"
            @focus="onFocus"
            @blur="onBlur"
            @option:selected="
              (v) => {
                $emit('change', v);
              }
            "
            @keyup.enter.prevent=""
            :state="errors.length > 0 ? false : null"
            v-b-tooltip.hover.v-danger
            :title="toolTipError ? errors[0] || '' : ''"
          >
            <template v-if="$attrs.field === 'select'" #no-options>
              {{ $t("Sorry, no matching options") }}
            </template>
          </component>
        </b-input-group>
        <component
          v-else
          ref="input2"
          :is="field"
          :type="type"
          :placeholder="''"
          :options="selectData.filter(filterFn)"
          :value="itemValue"
          :name="$attrs['label-text'] || ''"
          :multiple="multiple"
          v-bind="attrs"
          v-on="listeners"
          :dir="dir"
          :disabled="disabled"
          :readonly="readonly"
          @input="
            (v) => {
              handelInput(v);
            }
          "
          @change="onChange"
          @focus="onFocus"
          @blur="onBlur"
          @wheel="$event.target.blur()"
          @option:selected="
            (v) => {
              $emit('change', v);
            }
          "
          :state="errors.length > 0 ? false : null"
          v-b-tooltip.hover.v-danger
          :title="toolTipError ? errors[0] || '' : ''"
        >
          <template v-if="$attrs.field === 'select'" #no-options>
            {{ $t("Sorry, no matching options") }}
          </template>
        </component>
        <small
          :class="{ 'd-none': !$attrs['label-text'] || toolTipError }"
          class="text-danger"
          >{{ errors[0] }}</small
        >
      </div>
    </Field>
  </b-form-group>
</template>

<script>
import { Field } from 'vee-validate';

export default {
  components: {
    Field,
  },
  props: {
    filterFn: {
      type: Function,
      default: () => true
    },
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
  setup(props, context) {
    let { attrs } = context;
    const {
      name, placeholder, type, lookup,
    } = attrs;

    let { field } = attrs;

    if (field === 'select') field = 'v-select';
    else field = 'b-form-input';

    attrs = Object.entries(attrs).reduce((obj, val) => {
      /* eslint-disable prefer-destructuring */
      if (['field', 'name', 'placeholder', 'type', 'lookup', ...Object.keys(props)].indexOf(val[0]) === -1) obj[val[0]] = val[1];
      return obj;
    }, {});

    const listeners = Object.entries(context.emit).reduce((obj, val) => {
      if (['update:value', 'input', 'change'].indexOf(val[0]) === -1) obj[val[0]] = val[1];
      return obj;
    }, {});

    return {
      name,
      type,
      placeholder,
      attrs,
      field,
      lookup,
      listeners,
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
    value(newVal) {
      this.handelValue(newVal);
    },
  },
  mounted() {
    this.handeloptions();
    this.handelValue(this.type === 'number' && this.name !== 'discountPercentage' && this.name !== 'additionalNumber' && this.name !== 'code' && this.name !== 'scalesCode' && this.name !== 'acceptanceAgeDays' && this.name !== 'acceptanceAgeMonths' && this.name !== 'acceptanceAgeYears' ? this.fraction(this.value) : this.value);
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
        }
      } else this.itemValue = newVal;
    },
    handelInput(val, isWriteAction = true) {
      this.isDirty = isWriteAction;
      if (this.$attrs.field === 'select') {
        if (!this.multiple) {
          val = val ? val[this.itemId] : null;
        }
      }
      this.$emit('update:value', this.type === 'number' ? parseFloat(val) || 0 : val);
      this.$emit('input', this.type === 'number' ? parseFloat(val) || 0 : val);
      if (this.$route.name !== 'items-category') {
        this.$emit('update:value', this.type === 'number' && this.name === 'code' && this.name === 'mainUnitBarcode' && this.name === 'scalesCode' ? parseFloat(val).toString() : val);
        this.$emit('input', this.type === 'number' && this.name === 'code' && this.name === 'mainUnitBarcode' && this.name === 'scalesCode' ? parseFloat(val).toString() : val);
      } else {
        this.$emit('update:value', this.type === 'number' && this.name === 'code' && this.name === 'mainUnitBarcode' && this.name === 'scalesCode' ? val : val);
        this.$emit('input', this.type === 'number' && this.name === 'code' && this.name === 'mainUnitBarcode' && this.name === 'scalesCode' ? val : val);
      }
    },
    onFocus() {
      if (this.$route.name !== 'items-category') {
        if (this.type === 'number') this.itemValue = parseFloat(this.itemValue);
      }
    },
    onBlur() {
      if (this.$route.name !== 'items-category') {
        if (this.type === 'number' && this.name !== 'discountPercentage' && this.name !== 'additionalNumber' && this.name !== 'code' && this.name !== 'scalesCode' && this.name !== 'acceptanceAgeDays' && this.name !== 'acceptanceAgeMonths' && this.name !== 'acceptanceAgeYears' && this.name !== 'mainUnitBarcode') this.itemValue = this.fraction(this.itemValue);
        if (this.type === 'number' && this.name === 'code' && this.name === 'mainUnitBarcode' && this.name === 'scalesCode') this.itemValue = (this.itemValue).toString();
      }
    },
    onChange(v) {
      this.$emit('change', v);
      if (this.type === 'number' && this.name !== 'discountPercentage' && this.name !== 'additionalNumber' && this.name !== 'code' && this.name !== 'scalesCode' && this.name !== 'acceptanceAgeDays' && this.name !== 'acceptanceAgeMonths' && this.name !== 'acceptanceAgeYears' && this.name !== 'mainUnitBarcode') this.itemValue = parseFloat(v).toFixed(this.currentBranch.decimalDigits);
      if (this.type === 'number' && this.name === 'code' && this.name === 'mainUnitBarcode' && this.name === 'scalesCode') this.itemValue = (this.itemValue).toString();
    },
  },
};
</script>
