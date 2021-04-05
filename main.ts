control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
        led.plot(2, 0)
    } else if (control.eventValue() == 5) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 200)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        led.plot(0, 2)
    } else if (control.eventValue() == 7) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 200)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        led.plot(4, 2)
    } else if (control.eventValue() == 3) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 200)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 200)
        led.plot(2, 4)
    } else if (control.eventValue() == 9) {
        maqueen.servoRun(maqueen.Servos.S1, 40)
        led.plot(2, 1)
    } else if (control.eventValue() == 11) {
        maqueen.servoRun(maqueen.Servos.S1, 125)
        led.plot(2, 3)
    } else if (control.eventValue() == 13 && LastValue >= 2) {
        led.plot(1, 2)
        LastValue += -2
        maqueen.servoRun(maqueen.Servos.S2, LastValue)
    } else if (control.eventValue() == 15 && LastValue <= 178) {
        led.plot(3, 2)
        LastValue += 2
        maqueen.servoRun(maqueen.Servos.S2, LastValue)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
        basic.clearScreen()
    }
})
let LastValue = 0
LastValue = 90
bluetooth.startLEDService()
basic.showIcon(IconNames.Yes)
maqueen.servoRun(maqueen.Servos.S2, LastValue)
