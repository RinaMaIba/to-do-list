
let taskCounter = 0;
let btn = document.getElementById('btn-add-task');
//'btn-add-task' se llama el boton de agrega

// se invoca la funcion addtask y está escuchando el clic:
btn.addEventListener("click", function(){

}
  });


//este es el encabezado y declaracion de la funcion. Ademas es una funcion diferida:
//function addTask() {// se ejecuta esperando el nombre de la funcion
    
    
    //console.log("Ingrese a la función");

    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-start";
    let span = document.createElement("span");
    //adentro del let spam va lo que ingresa el usaurio. el= es lo que esta en el stakimput pasa al spam
    //lo que esta de la derecha al spam
    span.className = "mt-1";
    let deleteButton = document.createElement("button");
    //esta invocado el boton de eliminar (deleteButton). 
    //aparece en el html si está appendChild


 deleteButton.textContent = "Eliminar"; //agrega texto al boton
    deleteButton.className = "btn btn-danger"; 


    deleteButton.className = "btn btn-danger";
    //danger color rojo
    let taskInput = document.getElementById("taskInput"); // For task entries let taskInput = document.getElementById aca atrapo taskinput  que esta en el html
    //lo guardo en la variable con let y aca se llama taskInput. taskInput es la caja 
    let taskList = document.getElementById("taskList"); // For listing tasks

    let countTask = document.getElementById("countTask");

    if (taskInput.value == "") {
        alert("Ingrese una Tarea");
        //taskInput nombre de la caja y tiene la tarea.
        taskInput.focus();//focus es el que pone dentro de la caja el cursor, esperando una tarea.
        return;
    }


deleteButton.addEventListener('click', function (){
   if (confirm("¿Estás seguro de que quieres eliminar esta tarea?")){  
    taskCounter--;
    countTask.textContent = "Cantidad de Tareas : " + taskCounter;
    taskList.removeChild(li);
 }
  });




    span.textContent = taskInput.value;
    // es lo que agrega el usuario, el value y esto va dentro del spam
    // Lo que esta en la caja de entrada pasa al span. Si para alreves, se borra porque pasa directamente al boton



    li.appendChild(span); //agrego el espam dentro del list

    taskCounter++;


    li.appendChild(deleteButton);
    //app agrega

    countTask.textContent = "Cantidad de Tareas : " + taskCounter;
    taskList.appendChild(li)
    //appendChild imprime o muestra en pantalla
    //li forma parte del UL
    taskInput.value = "";
    taskInput.focus();
deleteButton.addEventListener('click', function (){
   //function ():la funcion es anonima () porque no tiene nombre.
//

    taskCounter--;

 countTask.textContent = `Cantidad de Tareas : ${taskCounter}`; //con template literals
//countTask.textContent = "Cantidad de Tareas : " + taskCounter;
 taskList.removeChild(li);
 //remove, elimina

});
}




//dentro de las llaves le decimos que vamos a hacer dentro de la funcion. A la variable
//a la variable le llamo li/*
//class name le asigno las clases que quiera de css que quiera*/
// trabaja en el java lo de hatml y ccs con esto span.className = "mt-1"*/
//lo que crea el li es cada vez que el usuario realiza una tarea nueva*/
//esta parte se relaciona con <input type="text" id="taskInput" class="form-control me-2" de html*/






