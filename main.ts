input.onButtonPressed(Button.A, function () {
    led.plotBarGraph(
    input.lightLevel(),
    255
    )
})
basic.forever(function () {
    if (input.lightLevel() == 0) {
        basic.showNumber(input.lightLevel())
        basic.showString("No Light")
    } else if (input.lightLevel() > 0 && input.lightLevel() <= 55) {
        basic.showNumber(input.lightLevel())
        basic.showString("Very Low Light")
    } else if (input.lightLevel() > 55 && input.lightLevel() <= 130) {
        basic.showNumber(input.lightLevel())
        basic.showString("Mid Level Light")
    } else if (input.lightLevel() > 130 && input.lightLevel() <= 200) {
        basic.showNumber(input.lightLevel())
        basic.showString("High Level Light")
    } else if (input.lightLevel() > 200 && input.lightLevel() <= 255) {
        basic.showNumber(input.lightLevel())
        basic.showString("Intense")
    }
})
