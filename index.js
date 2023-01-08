//event listener
document.querySelector("#btn-add").addEventListener("click", add);


//variables del array

let names = [];
let surnames = [];
let courses = [];
let sclasses = [];

//función agregar un elemento al array

function add() {

  let name = document.querySelector('#name').value;
  let surname = document.querySelector('#surname').value;
  let course = document.querySelector('#course').value;
  let sclass = document.querySelector('#sclass').value;


  names.push(name);
  surnames.push(surname);
  courses.push(course);
  sclasses.push(sclass);


  //muestra el array
  show();

  // vacio el imput
  document.querySelector('#name').value = "";
  document.querySelector('#surname').value = "";
  document.querySelector('#course').value = "";
  document.querySelector('#sclass').value = "";
 

}
//función mostrar array

function show() {
  let listn = document.querySelector('#name');
  let lists = document.querySelector('#surname');
  let listc = document.querySelector('#course');
  let listsc = document.querySelector('#sclass');


  listn.innerHTML = "";
  lists.innerHTML = "";
  listc.innerHTML = "";
  listsc.innerHTML = "";

  //Agregar filas a la tabla con los datos ingresados

  let dateTable = document.getElementById("dateTable");
  let newDateRow = dateTable.insertRow(-1);

  let newDateCell = newDateRow.insertCell(0);
  newDateCell.textContent = document.querySelector('#name').value;

  newDateCell = newDateRow.insertCell(1);
  newDateCell.textContent = document.querySelector('#surname').value;

  newDateCell = newDateRow.insertCell(2);
  newDateCell.textContent = document.querySelector('#course').value;

  newDateCell = newDateRow.insertCell(3);
  newDateCell.textContent = document.querySelector('#sclass').value;

  let newDeleteCell = newDateRow.insertCell(4);
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  newDeleteCell.appendChild(deleteButton);

  deleteButton.addEventListener("click", (event) => {
    event.target.parentNode.parentNode.remove()
   });
 
}
