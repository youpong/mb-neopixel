const PIXEL_NUM = 24;

let strip = neopixel.create(DigitalPin.P1, PIXEL_NUM, NeoPixelMode.RGB);
let range = strip.range(0, 1);

basic.forever(function () {
    let hue = Math.map(input.acceleration(Dimension.X), -1023, 1023, 0, 360);
    let sat = Math.map(input.acceleration(Dimension.Y), -1023, 1023, 0, 100);
    let lum = Math.map(input.acceleration(Dimension.Z), -1023, 1023, 0, 100);
    range.showColor(neopixel.hsl(hue, sat, lum));
    strip.rotate(1);
});
