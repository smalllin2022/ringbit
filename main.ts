input.onGesture(Gesture.LogoDown, function () {
    RingbitCar.brake()
})
input.onButtonPressed(Button.A, function () {
    RingbitCar.turnleft()
})
input.onGesture(Gesture.ScreenUp, function () {
    RingbitCar.back()
})
input.onButtonPressed(Button.AB, function () {
    RingbitCar.forward()
})
input.onButtonPressed(Button.B, function () {
    RingbitCar.turnright()
})
RingbitCar.init_wheel(AnalogPin.P0, AnalogPin.P1)
RingbitCar.forward()
basic.forever(function () {
	
})
