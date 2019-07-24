let nameField = document.querySelector('#nameField');
let ul = document.querySelector('#name_list');
nameField.addEventListener('keypress',function(event){
    if(event.keyCode == 13){
        let name = event.target.value;
        createLi(ul,name);
        event.target.value = '';
    }
});

function createLi(ul,name){
    let li = document.createElement('li');
    li.className = 'list-group-item d-flex';
    li.innerHTML = name;
    li.style.color = '#fff';
    li.style.backgroundColor = '#333';
    
    let span = document.createElement('span');
    span.innerHTML = 'X';
    span.className = 'ml-auto';
    span.style.color = 'red';
    span.style.cursor = 'pointer';
    span.addEventListener('click',function(){
        ul.removeChild(li);
    })
    li.appendChild(span);
    ul.appendChild(li);
}