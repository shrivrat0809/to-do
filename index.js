const container = document.getElementById("container");
const form = document.querySelector("form");
const title = document.getElementById("title");
const description = document.getElementById("description");
const submitBtn = document.querySelector(".submit")

let tasks = localStorage.getItem("tasks")
? JSON.parse(localStorage.getItem("tasks"))
:[];

showAllTasks();

function showAllTasks(){

  tasks.forEach((value,index)=>{
    let div = document.createElement("div");
    div.setAttribute("class","task");
  
    let innerDiv = document.createElement("div");
    div.append(innerDiv);
  
    let p = document.createElement("p");
    p.innerText = value.title;
    innerDiv.append(p);
  
    let span = document.createElement("span");
    span.innerText = value.description;
    innerDiv.append(span);
  
    let btn = document.createElement("button");
    btn.setAttribute("class","deleteBtn")
    btn.innerText = "-"
    div.append(btn);

    btn.addEventListener("click", ()=>{
      removeTasks();
      tasks.splice(index,1);
      localStorage.setItem("tasks",JSON.stringify(tasks))
      showAllTasks();
    })
  
    container.append(div);
  }); 
}

function removeTasks() {
  tasks.forEach((value,index)=>{
    let div = document.querySelector(".task");
    div.remove();
  })
}

submitBtn.addEventListener("click",(e)=>{
  e.preventDefault();
  removeTasks();
  tasks.push({
      title: title.value,
      description: description.value,
  });
  localStorage.setItem("tasks", JSON.stringify(tasks))
  showAllTasks();
});