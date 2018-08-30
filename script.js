var btns=document.getElementsByTagName('button');

var cat=document.getElementsByClassName('cat')[0];

for(i=0;i<btns.length;i++)
{
  console.log(btns[i]);
    
  btns[i].addEventListener('click',()=>{

          cat.classList.add('blue-eyes');
          cat.classList.remove('blue-eyes');
         
    
  
  });

}