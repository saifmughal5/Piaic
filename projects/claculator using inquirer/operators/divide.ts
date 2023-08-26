export function divide(num1:number, num2:number) {
    if (num2 === 0) {
        throw new Error('infinity')
    }
    else {
        return num1 / num2
    }
}