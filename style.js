// fron.
const tinput = document.getElementById("taskinput");
const tlist = document.getElementById("tasklist");
const addButton = document.getElementById("add");

function addtask(){
    const t_input = tinput.value;
    console.log(t_input);
    if(t_input !== '')
    {
        const task = {
            id:Date.now(),
            text:t_input
        }
        // t_input='';

        axios.post('http://localhost:1515/addtask',task).then((response)=>{
            console.log(response);
            tinput.value='';
            rendertasklist();
        }).catch((err)=>{
            console.log(err);
        })
    }
}




function rendertasklist() {
    tlist.innerHTML = '';

    axios.get('http://localhost:1515/gettask').then((result)=>{
        console.log(result);
        result.data.forEach(task =>{ 
            var li = document.createElement('li');
            li.innerHTML = `<span> ${task.text} </span>`
            /*<div>
            <button onclick="deletetask(${task.id})">Delete</button>
            </div>*/
            
            /*;*/

            tlist.appendChild(li);

        });
        
    }).catch((err)=>{
        console.log(err);
    })
}