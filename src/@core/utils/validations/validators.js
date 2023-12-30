export const validatorPositive = value => {
    if (value >= 0) {
      return true
    }
    return false
  }
  
  export const validatorPassword = password => {
    /* eslint-disable no-useless-escape */
    // const regExp = /^[a-zA-Z0-9_]+$/
    const regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/
    /* eslint-enable no-useless-escape */
    const validPassword = regExp.test(password)
    return validPassword
  }
  
  export const validatorUserName = userName => {
    /* eslint-disable no-useless-escape */
    const regExp = /^[a-zA-Z0-9_]+$/
    // const regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/
    /* eslint-enable no-useless-escape */
    const validUserName = regExp.test(userName)
    return validUserName
  }
  
  export const validatorCreditCard = creditnum => {
    /* eslint-disable no-useless-escape */
    const cRegExp = /^(?:3[47][0-9]{13})$/
    /* eslint-enable no-useless-escape */
    const validCreditCard = cRegExp.test(creditnum)
    return validCreditCard
  }
  
  export const validatorUrlValidator = val => {
    if (val === undefined || val === null || val.length === 0) {
      return true
    }
    /* eslint-disable no-useless-escape */
    const re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/
    /* eslint-enable no-useless-escape */
    return re.test(val)
  }
  
  export const greaterThanValidator = (val, [value]) => {
    val = parseFloat(val);
    value = parseFloat(value);
    if (!Number.isNaN(val) && !Number.isNaN(value) && val > value) return true;
    return `{_field_} must be greater than ${value}`;
  }
  
  export const lessThanOrEqaulValidator = (val, [value]) => {
    val = parseFloat(val);
    value = parseFloat(value);
    if (!Number.isNaN(val) && !Number.isNaN(value) && val <= value) return true;
    return `the {_field_} must be less than or equal ${value}`;
  };
  
  export const phone = val => {
      // Custom regex for a phone number
      const MOBILEREG = /^((1[3578][0-9])+\d{8})$/;
      // Check for either of these to return true
      return MOBILEREG.test(val);
  };
  