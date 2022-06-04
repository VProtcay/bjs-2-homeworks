class AlarmClock {
    constructor(timerId) {
    this.alarmCollection = []
    this.timerId = null
    }

addClock (time, callback, id) {
        
    if (id == undefined) throw new Error('error id')
    const poiskId = this.alarmCollection.findIndex (item => item.id === id)
    if (poiskId != -1) {
        return console.error()
    }
    const mass = {time: time, callback: callback, id: id}
    this.alarmCollection.push(mass)
    
}
removeClock(id) {
    const poiskId = this.alarmCollection.findIndex (item => item.id === id);
    if (poiskId != -1) {
        this.alarmCollection.splice(poiskId, 1)
        return true
    }
    else {
        return false
    }   
    }


getCurrentFormattedTime() {
    const times = new Date().toLocaleTimeString().slice(0,-3)
    return times
    }

    start() {
          if (this.timerId == null) {
              this.timerId = setInterval(() => {this.alarmCollection.forEach((mass) => checkClock(mass, this))}, 1000); 
        }
     }

    stop () {
        if (!!this.timerId) {
            clearInterval(this.timerId)
            clearTimeout(this.timerId)
            this.timerId = null
        }
    }

    printAlarms () {
        this.alarmCollection.forEach ((mass) => console.log ("id звонка = " + mass.id + " Время звонка: " + mass.time))
    }

    clearAlarms () {
        this.stop
        this.alarmCollection = []
    }

}

function checkClock (mass, alarmClocks) {
    if (alarmClocks.getCurrentFormattedTime() === mass.time) {
         mass.callback()
    }
}


function testCase() {
    clock = new AlarmClock();
    clock.addClock(
        new Date().getHours() + ":" +new Date().getMinutes(),
        f => { for (let i = 0; i < 4; i++ ) {console.log ("Доброе утро "+ i)}
         return
         }, 
        1
    )
    clock.addClock(
        new Date().getHours() + ":" + (new Date().getMinutes()+1),
        f => { console.log ("Добрый день")
            clock.removeClock(2)
            return
        },
        2
    )

    clock.addClock(
        new Date().getHours() + ":" + (new Date().getMinutes()+2),
        f => { console.log ("Добрый вечер")
            clock.printAlarms()
            clock.clearAlarms()
            clock.printAlarms()
        }, 
        3
    )
    console.log (clock)
    clock.printAlarms()
    clock.start()
}

testCase()

    // console.log (clock.addClock("11:59", f => f, 1))
    // console.log (clock.addClock("12:00", f => f, 2))
    // console.log (clock.addClock("16:45", f => f, 3))
    // console.log (clock.addClock("16:45", f => f, 4))
    // clock.printAlarms()
    // console.log (clock)
    // //console.log (clock.removeClock(1))
    // console.log (clock)
    // console.log (clock.getCurrentFormattedTime())
    // console.log(clock.timerId)
    // clock.start()
    // clock.stop()
    // clock.clearAlarms()
    // clock.printAlarms()