//action types
let INCR = 'INCR'
let DECR = 'DECR'
//actions
let incrAction = () => {
    return { type: INCR, payload: { id: 101, name: "Rahul", sal: 45000 } }
}
let decrAction = () => {
    return { type: DECR, payload: { id: 101, name: "Rahul", sal: 45000 } }
}
export { INCR, DECR, incrAction, decrAction }