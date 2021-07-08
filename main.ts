radio.setGroup(1)
radio.setTransmitPower(4)
let 電流 = pins.analogReadPin(AnalogPin.P0)
basic.showLeds(`
    . # # # #
    . # . . #
    . # . . #
    . # # # #
    . . . . .
    `)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 電流 + 300) {
        radio.sendNumber(0)
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
    }
})
