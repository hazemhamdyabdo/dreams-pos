// import { defineRule, localize } from 'vee-validate';
import { defineRule, configure  } from 'vee-validate';
import {  required as rule_required,
  email as rule_email,
  min as rule_min,
  max as rule_max,
  confirmed as rule_confirmed,
  regex as rule_regex,
  between as rule_between,
  alpha as rule_alpha,
  integer as rule_integer,
  digits as rule_digits,
  alpha_dash as rule_alpha_dash,
  alpha_num as rule_alpha_num,
  length as rule_length,
  max_value,
  min_value,
  is_not,
  max,
  min,
  positive  } from '@vee-validate/rules';
// import {
 
// } from 'vee-validate';
import { localize } from '@vee-validate/i18n';
import ar from '@vee-validate/i18n/dist/locale/ar.json';
import en from '@vee-validate/i18n/dist/locale/ar.json';

// eslint-disable-next-line object-curly-newline
import {
  validatorPositive,
  validatorUrlValidator,
  validatorPassword,
  validatorUserName,
  validatorCreditCard,
  greaterThanValidator,
  lessThanOrEqaulValidator,
  phone
} from './validators';

// ////////////////////////////////////////////////////////
// General
// ////////////////////////////////////////////////////////

defineRule('required', rule_required);
defineRule('min', min);

defineRule('email', rule_email);

defineRule('min', rule_min);

defineRule('max', rule_max);

defineRule('min_value', min_value);
defineRule('max', max);

defineRule('max_value', max_value);

defineRule('confirmed', rule_confirmed);

defineRule('regex', rule_regex);

defineRule('between', rule_between);

defineRule('alpha', rule_alpha);

defineRule('integer', rule_integer);

defineRule('digits', rule_digits);

defineRule('alpha-dash', rule_alpha_dash);

defineRule('alpha-num', rule_alpha_num);

defineRule('length', rule_length);

defineRule('is_not', is_not);

// defineRule('positive', {
//   validate: validatorPositive,
//   message: 'Please enter positive number!',
// });

// defineRule('credit-card', {
//   validate: validatorCreditCard,
//   message: 'It is not valid credit card!',
// });

// defineRule('password', {
//   validate: validatorPassword,
//   message:
//     'Your {_field_} must contain at least one uppercase, one lowercase, one special character and one digit',
//   // 'Your {_field_} not allowed to use special character ',
// });

// defineRule('userName', {
//   validate: validatorUserName,
//   message:
//     // 'Your {_field_} must contain at least one uppercase, one lowercase, one special character and one digit',
//     'Your {_field_} not allowed to use special character ',
// });

// defineRule('url', {
//   validate: validatorUrlValidator,
//   message: 'URL is invalid',
// });

// defineRule('greater_than', {
//   getMessage: (field) => `The  ${field} value is not truthy.`,
//   validate: greaterThanValidator,
// });

// defineRule('less_or_equal', {
//   validate: lessThanOrEqaulValidator,
// });

// defineRule('phone', {
//   validate: phone,
//   message:
//     'Your {_field_} not correct phone number',
// });
configure({
  generateMessage: localize({
  ar: {
    code: 'ar',
    messages: {
      ...ar.messages,
    },
  },
  en: {
    code: 'en',
    messages: {
      ...en.messages,
      less_or_equal: '',
    },
  },
}),});

export function setValidationLanguage(code) {
  configure(code, { ...languages[code] });
}