basic.forever(function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= x; y++) {
            led.plot(4 - x + y, y)
            basic.pause(200)
        }
    }
    for (let x = 0; x <= 3; x++) {
        for (let y = 0; y <= 3 - x; y++) {
            led.plot(y, x + y + 1)
            basic.pause(200)
        }
    }
})
