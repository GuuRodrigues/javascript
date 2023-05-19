const previusOperationText = document.querySelector('#previus-operation')
const curretOperationtext = document.querySelector('#current-operation')
const buttons = document.querySelectorAll('#buttons-container button')

class Calculator {
    constructor(previusOperationText, curretOperationtext)  {
        this.previusOperationText = previusOperationText
        this.curretOperationtext = curretOperationtext
        this.curretOperation = ''
    }

        //addDigit to calculator screen
    addDigit(digit) {
        //check if current operation already has a dot 
        if(digit === '.' && this.curretOperationtext.innerText.includes('.')) {
            return
        }

        this.curretOperation = digit
        this.updateScreen()
    }

    //process all calculator operations
    processOperation(operation) {
        console.log(operation)
    }

//change values of the calculator screen
    updateScreen() {
        this.curretOperationtext.innerText += this.curretOperation
    }
}

const calc = new Calculator(previusOperationText, curretOperationtext)

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {

        const value = e.target.innerText

        if(+value >= 0 || value === '.' ) {
            calc.addDigit(value)
        } else {
            calc.processOperation(value)
        }
    })
})