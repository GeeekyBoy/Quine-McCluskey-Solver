export default {
  initMinterms: [],
  initDonotCares: [],
  initInputLetters: [],
  initInputsNumber: 0,
  isComplementAvail: false,
  currentStep: 1,
  reset() {
    this.initMinterms = [];
    this.initDonotCares = [];
    this.initInputLetters = [];
    this.initInputsNumber = 0;
    this.isComplementAvail = false;
    this.currentStep = 1;
  }
};
