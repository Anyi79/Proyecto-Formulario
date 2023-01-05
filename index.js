//event listener
document.querySelector("#btn-add").addEventListener("click", add);
/* document.querySelector("#btn-reset").addEventListener("click", reset);
document.querySelector("#delate-last").addEventListener("click",delate-last);
 */

//modelo de datos
let names = [];
/* let surnames = [];
let course = [];
let sclass = []; */


function add() {
    let name = document.querySelector('#name').value;
    let surname = document.querySelector('#surname').value;
    let course = document.querySelector('#course').value;
    let sclass = document.querySelector('#sclass').value;

    //agrego un elemento al arreglo
    names.push(name);
    names.push(surname);
    names.push(course);
    names.push(sclass);
    console.log(names);

    //muestro el arreglo
    show();

    //vaciar el imput
    document.querySelector('#name').value = "";
    document.querySelector('#surname').value = "";
    document.querySelector('#course').value = "";
    document.querySelector('#sclass').value = "";

    
}

function show() {
    let list = document.querySelector('#list');
    list.innerHTML = "";

    for (let actualDate of names) {
        list.innerHTML += "<li>" + actualDate + "</li>";
    }
    
}