let altura = 175
let peso = 100
let IMC = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        IMC = peso * (10000 / (altura * altura))
        basic.showString("\"IMC=\"")
        basic.showNumber(IMC)
        if (IMC < 18.5) {
            basic.showString("\"Delgado\"")
        } else {
            if (IMC > 18.5 && IMC < 25) {
                basic.showString("\"saludable\"")
            } else {
                if (IMC > 25 && IMC <= 30) {
                    basic.showString("\"Sobrepeso\"")
                } else {
                    if (IMC > 30) {
                        basic.showString("\"Obesidad\"")
                    }
                }
            }
        }
    }
    if (input.buttonIsPressed(Button.A)) {
        peso = peso + 1
        basic.showString("\"p=\"")
        basic.showNumber(peso)
    }
    if (input.buttonIsPressed(Button.B)) {
        peso = peso - 1
        basic.showString("\"p=\"")
        basic.showNumber(peso)
    }
    if (input.isGesture(Gesture.Shake)) {
        peso = 74
        basic.showString("\"p=\"")
        basic.showNumber(peso)
    }
})
