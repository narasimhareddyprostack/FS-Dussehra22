class P {
    get_Details() {
        console.log("P - Class : Get Details")
    }
}
class C extends P {
    get_Details() {
        super.get_Details()
        console.log("C - Class Get Details")
    }
}
new C().get_Details();
