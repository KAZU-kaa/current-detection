radio.onReceivedNumber(function (receivedNumber) {
    music.playMelody("- - - - - - - - ", 120)
    basic.showLeds(`
        . # . # .
        # . . . #
        . # . # .
        # . # . .
        . # . . .
        `)
})
radio.setGroup(1)
basic.showLeds(`
    . # # # #
    . # # # #
    . # # # #
    . # # # #
    . . . . .
    `)
