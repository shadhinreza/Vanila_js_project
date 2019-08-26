
window.onload = function(){
    const TaskValue = document.querySelector('#taskField');
    const addValue = document.querySelector('#addTask');
    const totalValue = document.querySelector('#allTask');
    TaskValue.addEventListener('keypress', function(event){
        if(event.keyCode === 13){
            createElem(totalValue, event.target.value)
            this.value = ""
        }
    })
}

function createElem(parent, task){
    let col = document.createElement('div')
    col.className = 'col-md-4';
    let singleTask = document.createElement('div')
    singleTask.className = 'div_color';
    let singleTaskP = document.createElement('p');
    singleTaskP.className = 'd-flex';
    singleTaskP.innerHTML = task;
    singleTaskP.style.paddingTop = '10px';
    singleTaskP.style.marginLeft = '5px';
    let span = document.createElement('span');
    span.className = 'ml-auto';
    span.innerHTML = '<i class="fas fa-times-circle"></i>';
    span.style.marginRight = '10px';
    span.style.color = '#3db';
    span.style.cursor = 'pointer';
    span.addEventListener('click', function () {
            parent.removeChild(col);
        })
    singleTaskP.appendChild(span);
    singleTask.appendChild(singleTaskP);

    let taskControler = createTaskControler(singleTask);
    taskControler.style.visibility = 'hidden';
    singleTask.appendChild(taskControler);

    singleTask.onmouseenter = function () {
        taskControler.style.visibility = 'visible';
    }
    singleTask.onmouseleave = function () {
        taskControler.style.visibility = 'hidden';
    }
        col.appendChild(singleTask);
        parent.appendChild(col);

    function createTaskControler(parent) {
        let controlPalet = document.createElement('div');
        controlPalet.className = 'control-panel';
        controlPalet.className = 'd-flex';
        let colorPalet = createColors(parent);
        controlPalet.appendChild(colorPalet);

        let editbtn = createEdidBtn(parent);
        controlPalet.appendChild(editbtn);
        return controlPalet;
    }


    function createColors(parent) {
        let colors = ['red', 'green', 'blue', 'black', 'orange','#ddd','#d3c'];
        let colorsFor = document.createElement('div');
        colorsFor.className = 'd-flex';
        colors.forEach(color => {
        let div = document.createElement('div')
        div.className = 'colors_circle'
        div.style.background = color
        div.style.marginLeft = '5px'
        div.addEventListener('click', function () {
            parent.style.backgroundColor = color;
        })
        colorsFor.appendChild(div);
        })
        return colorsFor;
    }

    function createEdidBtn(parent) {
        let editSpan = document.createElement('span');
        editSpan.className = 'createEdidClass'
        editSpan.className = 'ml-4';
        editSpan.innerHTML = "<i class='fas fa-edit'></i>"
        parent.appendChild(editSpan);
        editSpan.addEventListener('click',function(){
            let p = parent.querySelector('p');
            let textarea = document.createElement('textarea');
            textarea.className = 'textareaColor';
            textarea.style.width = parent.offsetWidth +'px';
            textarea.style.height = parent.offsetHeight + 'px';
            textarea.innerHTML = p.innerHTML;

            textarea.addEventListener('keypress', function (event){
                if(event.keyCode === 13){
                    event.stopPropagation()
                    if(this.value){
                        p.innerHTML = this.value
                        parent.removeChild(this)
                }else{
                    alert('Please put some data');
                }
            }
            })
            parent.appendChild(textarea);
        })
        return editSpan;
    }

    addValue.addEventListener('submit', function () {
        return TaskValue.value;
    })

}