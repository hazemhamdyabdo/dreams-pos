<template>
  <b-form-group :label="$t($attrs['label-text'])">
    <ValidationProvider
      ref="fieldValidator"
      v-slot="{ errors }"
      :rules="rules || ''"
      :vid="$attrs.name || ''"
      mode="eager"
    >
      <div class="q-mb-md">
        <!-- <b-input-group> -->
          <!-- <b-form-input
            :value="inputValue"
            type="text"
            placeholder="YYYY-MM-DD"
            readonly
          ></b-form-input> -->
          <!-- <b-input-group-append> -->
            <!-- <label class="block text-gray-600 text-sm font-bold mb-2" for="date">Select Date</label> -->
          <v-date-picker
          :locale="isRight ? 'ar-EG' : 'en-us'"
          :right="isRight"
          :value="inputValue"
          @context="onContext"
              @input="
                (v) => {
                  onContext({ selectedYMD: v });
                }
              "
          >
            <template v-slot="{ inputValue, inputEvents }">
              <input
                class="form-control rounded"
                :value="inputValue"
                v-on="inputEvents"
                placeholder="YYYY-MM-DD"
              />
            </template>
          </v-date-picker>
            <!-- <b-form-datepicker
              v-if="!disabled"
              ref="picker"
              :value="inputValue"
              button-only
              :right="isRight"
              size="sm"
              :locale="isRight ? 'ar-EG' : 'en-us'"
              variant="primary"
              selected-variant="primary"
              aria-controls="example-input"
              @context="onContext"
              @input="
                (v) => {
                  onContext({ selectedYMD: v });
                }
              "
            ></b-form-datepicker> -->
          <!-- </b-input-group-append> -->
        <!-- </b-input-group> -->
        <small
          :class="{ 'd-none': !$attrs['label-text'] }"
          class="text-danger"
          >{{ errors[0] }}</small
        >
      </div>
    </ValidationProvider>
  </b-form-group>
</template>

<script>
import { ValidationProvider } from 'vee-validate';

export default {
  components: {
    ValidationProvider,
  },
  props: {
    dir: {
      type: String,
    },
    value: {
      type: String,
      required: false,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: String,
      default: '',
    },
  },
  emits: ['update:value'],
  data() {
    return {
      inputValue: '',
      fiscalYearStart: '',
      fiscalYearEnd: ''
    };
  },
  watch: {
    value(newVale) {
      this.inputValue = this.getDate(newVale);
      // if (this.$attrs.name === 'fromDate') {
      //   this.inputValue = this.getDate(this.currentYear.startDate );
      // }
      // if (this.$attrs.name === 'toDate') {
      //   this.inputValue = this.getDate(this.currentYear.endDate);
      // }
      if (this.$attrs.name === 'fromDate') {
        this.inputValue = this.getDate(this.fiscalYearStart);
      }
      if (this.$attrs.name === 'toDate') {
        this.inputValue = this.getDate(this.fiscalYearEnd);
      }
      this.changeValue(this.inputValue);
    },
  },
  beforeMount() {
    this.fiscalYearStart = JSON.stringify(this.currentYear) !== '{}' ? this.currentYear.startDate : this.company.fiscalYearStart;
    this.fiscalYearEnd = JSON.stringify(this.currentYear) !== '{}' ? this.currentYear.endDate : this.company.fiscalYearEnd;
  },
  mounted() {
    this.inputValue = this.getDate(this.value);
    if (this.$attrs.name === 'fromDate') {
      this.inputValue = this.getDate(this.fiscalYearStart);
    }
    if (this.$attrs.name === 'toDate') {
      this.inputValue = this.getDate(this.fiscalYearEnd);
    }
    this.changeValue(this.inputValue);
  },
  methods: {
    onContext(ctx) {
      this.inputValue = this.getDate(ctx.selectedYMD);
      this.$emit('update:value', this.inputValue);
      this.$emit('change', this.inputValue);
    },
    changeValue(val) {
      val = val || ''
      val = val.replace(' ', 'T')
      this.$emit('update:value', val);
      this.$emit('change', val);
    },
  },
};
</script>

<style></style>
