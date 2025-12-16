let lum = 0
let sat = 0
let hue = 0
let strip = neopixel.create(DigitalPin.P1, 24, NeoPixelMode.RGB)
let range = strip.range(0, 1)
basic.forever(function () {
    hue = Math.map(input.acceleration(Dimension.X), -1023, 1023, 0, 360)
    sat = Math.map(input.acceleration(Dimension.Y), -1023, 1023, 0, 100)
    lum = Math.map(input.acceleration(Dimension.Z), -1023, 1023, 0, 100)
    range.showColor(neopixel.hsl(hue, sat, lum))
    strip.rotate(1)
})
