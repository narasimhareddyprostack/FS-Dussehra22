class P {
    constructor() {
        console.log("P - Class Const")
    }
}
class C extends P {
    constructor() {
        super()
        console.log("C - Class Const")
    }
}
new C()