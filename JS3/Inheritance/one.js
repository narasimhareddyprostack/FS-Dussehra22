class P {
    assets = '100CR'
    get_Good_Qualities() {
        console.log("All Good Q")
    }
}
class C extends P {

}
let c1 = new C();
console.log(c1.assets)
c1.get_Good_Qualities()