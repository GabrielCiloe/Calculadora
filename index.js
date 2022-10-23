console.log ("hello mundo")

const botaoNumeros = document.querySelectorAll('[data-number]');
const botaoOperadores = document.querySelectorAll('[data-operator]');
const botaoIgual = document.querySelector('[data-equals]');
const botaoLimpar = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');


class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()

  }

  clear() {
}

delete() {
}

appendNumber(number) {
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
          calculator.appendNumber(button.innerText)
          calculator.updateDisplay(this.currentOperandTextElement.innerText = this.currentOperand.)
        })
      })
    
}

chooseOperation(operation) {
}

compute() {
}

updateDisplay() {
}

clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  };
