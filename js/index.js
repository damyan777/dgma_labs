var app = new Vue({
  el: '#calculator',
  data: function data() {
    return {
      currentValue: 0,
      savedValue: false,
      currentOp: false
    };
  },

  methods: {
    clear: function clear() {
      this.currentValue = 0;
      this.savedValue = false;
      this.currentOp = false;
    },
    handleDigit: function handleDigit(digit) {
      if (this.currentOp === '=') {
        this.savedValue = false;
      }
      this.currentValue = this.currentValue * 10 + digit;
    },
    handleOp: function handleOp(op) {
      if (this.currentOp) {
        this.process();
      } else {
        this.savedValue = this.currentValue;
      }
      this.currentValue = 0;
      this.currentOp = op;
    },
    process: function process() {
      if (this.currentOp === '+') {
        this.savedValue += this.currentValue;
      } else if (this.currentOp === '-') {
        this.savedValue -= this.currentValue;
      } else if (this.currentOp === 'x') {
        this.savedValue *= this.currentValue;
      } else if (this.currentOp === '/') {
        this.savedValue /= this.currentValue;
      } else if (this.currentOp === '=' && this.currentValue) {
        this.savedValue = this.currentValue;
      }
      this.currentValue = 0;
      this.currentOp = false;
    }
  },
  computed: {
    valueDisplayed: function valueDisplayed() {
      return this.savedValue ? this.currentValue ? this.currentValue : this.savedValue : this.currentValue;
    }
  }
});