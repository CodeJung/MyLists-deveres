const list_itens= document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

let draggedItem = null;


for (let i = 0; i < list_itens.length; i++){
   const item = list_itens[i];

   item.addEventListener('dragstart',function() {

   // console.log('dragstart');
    draggedItem=item;
    setTimeout(function() {
    item.style.display='none';
    },0)

   });
   
   item.addEventListener('dragend', function () {
    //console.log('dragend');
    setTimeout(function(){
        draggedItem.style.display='block';
        draggedItem=null;

    },0);

   })


   for(let j = 0; j < lists.length; j++){
    const list = lists[j];

    list.addEventListener('dragover',function(e){
        e.preventDefault();
    });

    list.addEventListener('dragenter',function(e){
        e.preventDefault();
        this.style.backgroundColor='rgba(0, 0, 0, 0.2)';

    });
    list.addEventListener('dragleave',function(e){
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';

    });

    list.addEventListener('drop',function(e) {
        console.log('drop');
        this.append(draggedItem);
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';


    });
   }
}