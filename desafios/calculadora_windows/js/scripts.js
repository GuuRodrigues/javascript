const previousOperationText = document.querySelector('#previous-operation')
const curretnOperationText = document.querySelector('#current-operation')
const button = document.querySelectorAll('#buttons-container button')

class Calculator {
    constructor (previousOperationText, curretnOperationText) {
        this.previousOperationText = previousOperationText
        this.curretnOperationText = curretnOperationText
        this.currentOperation = ''
    }

    //add digit to calculator screen 
    addDigit(digit) {

        //check if currente operation already has a dot 
        if(digit === '.' && this.curretnOperationText.innerText.includes('.')) {
            return
        }

        this.currentOperation = digit
        this.updatescreen()
    }

    //process all calculator operations
    processOperation(operation) {
        
        //get current and previous value
        let operationValue
        const previous =  +this.previousOperationText.innerText
        const current = +this.curretnOperationText.innerTeconst
        switch(operation) {
            case '+' :
                operationValue = previous + current
                this.updatescreen(operationValue, operation, current, previous)
                break
            default:
                return
        }

    }

    //change values of the calculator screen
    updatescreen(
        operationValue = null,
        operation = null, 
        current = null, 
        previous = null
        ) {

        console.log(operationValue, operation, current, previous)

        if(operationValue === null) {
            this.curretnOperationText.innerText += this.currentOperation
        } else {
            //check if value is zero, if it is just add current value
            if(previous === 0) {
                operationValue = current
            }

            //add current value to previous
            this.previousOperationText.innerText = `${operationValue} ${operation}`
            this.curretnOperationText.innerText = ''
        }
    }
}

const calc = new Calculator(previousOperationText, curretnOperationText)

button.forEach((btn) => {
    btn.addEventListener('click', (e) => {

        const value = e.target.innerText

        if(+value >= 0 || value === '.') {
            calc.addDigit(value)
        } else {
            calc.processOperation(value)
        }

    })
})