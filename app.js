let tarefas = new Array()

function fnSalvarTarefa() {
    let novaTarefa = document.getElementById("tarefa").value
    tarefas.push(novaTarefa)
    document.getElementById("tarefa").value=""
}
function fnExibirTarefa() {
    let listaDeTarefas =""
    for(let i=0; i <tarefas.length; i++){
    listaDeTarefas +="<li>" + tarefas[i] +"</li>"
    }
    document.getElementById("lista-tarefas".innerHTML = listaDeTarefas)
    
    console.dir(tarefas)
}

let frutas = ['🍎','🍐','🍌','🥑']
 
for(let i=0; i < frutas.length ; i++){
    console.log(frutas[i])
    console.log(i)
}

