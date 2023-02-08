// 1

// let n1=document.querySelector('.n1');
// let n2=document.querySelector('.n2');
// let button=document.querySelector('.button');
// let res=document.querySelector('.res');

// button.onclick = ()=>{
//     res.innerHTML=`Thi big number is ${Math.max(n1.value,n2.value)}`;
// }



// 2

// let button=document.querySelector('.button');
// let number=document.querySelector('.number');

// button.onclick = () =>{
//     alert(number.value*number.value)
// }




// 3

// let number=document.querySelector('.number');
// let button=document.querySelector('.button')
// let res=document.querySelector('.res')

// button.onclick = () => {
//     res.innerHTML= number.value<10 ? 'Welcome' : 'Good bye'
// }



// 4

// let name=document.querySelector('.name')
// let number=document.querySelector('.number')
// let button=document.querySelector('.button')
// let result=document.querySelector('.result')
// let cnt=1;

// button.onclick = () => {
//     for (let i=1;i<=number.value;i++){
//         cnt=cnt*i;
//     }
//     result.innerHTML=cnt;
// }




// 5

// let counter=document.querySelector('.counter')
// let plus=document.querySelector('.plus')
// let reset=document.querySelector('.reset')
// let minus=document.querySelector('.minus')
// let resultat=document.querySelector('.resultat')
// let cnt=0;

// reset.onclick = () => {
//     resultat.innerHTML=0;
//     resultat.style.color='black'
// }
// plus.onclick = () => {
//     cnt++;
//     resultat.innerHTML=cnt;
//     resultat.style.color='green'
// }
// minus.onclick = () => {
//     cnt--;
//     resultat.innerHTML=cnt;
//     resultat.style.color='red'
// }





// 6

// let click=document.querySelector('.click')
// let h2=document.querySelector('.h2')
// let color=document.querySelector('.color')
// let container=document.querySelector('.container')
// let arr=['red','green','yellow','blue','brown','pink']

// click.onclick = () => {
//     let a=Math.floor(Math.random()*arr.length)
//     container.style.width='20%'
//     container.style.height='30vh'
//     container.style.background=arr[a]
// }



// 7

// let img=document.querySelector(".img")
// let btn=document.querySelector(".btn")

// img.style.width="10%"
// btn.style.backgroundColor="yellow"

// btn.onclick = () => {
//     if (btn.innerHTML==='On'){
//         btn.innerHTML==='Off'
//         img.src="./img/on.png"
//     }
//     else{
//         btn.onclick==='On'
//         img.src="./img/off.png"
//     }
// }