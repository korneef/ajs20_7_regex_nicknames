export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    if (this.name === undefined) {
      return false;
    }

    const beginningEnd = /^[a-zA-Z][\w-]*[a-zA-Z]$/.test(this.name);
    const onlyPermittedSymbols = !/[^\w-]/.test(this.name);
    const maxTwoDigits = !/[\d]{3}/.test(this.name);

    return (beginningEnd && onlyPermittedSymbols && maxTwoDigits);
  }
}
