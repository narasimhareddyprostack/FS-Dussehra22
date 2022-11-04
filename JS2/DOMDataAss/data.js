let employees = [{ id: 101, name: "Rahul", salary: 45000 },
{ id: 102, name: "Sonia", salary: 55000 },
{ id: 103, name: "Priyanka", salary: 65000 },
{ id: 104, name: "Modi", salary: 165000 }]
function display_Data() {
    //alert("Test")
    let rows = ""
    for (emp of employees) {
        rows = rows + `<tr> <td> ${emp.id} </td></tr>`
    }
    document.getElementById('abc').innerHTML = rows
}