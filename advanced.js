//closure-----lexical scope

// const parent=()=>{
//     let c=0;
//     console.log("parent"+c)
//     return child=()=>{
//         c=c+1
//         console.log(c)
//     }
// };

// let child1=parent();
// child1()
// child1()
// child1()


// parent();


// let arr=[];


// const sub=document.querySelector("#sub");
// console.log(sub)
// sub.addEventListener("click",add)
// function add(){
//     const a=document.getElementById("id");
    
//     arr.push(a.value);
//     a.value=""
//     console.log(arr)
// }

// __proto__
//old_type
// let par={job:"cm",hom:"2bhk",
// get home(){
//     return this.hom
// },
// set home(val){
//     this.hom=val
// }
// }
// let child={}
// child.__proto__=par
// //child.home="3bhk"
// console.log(child.home)



// Decorators

// let area=(l,b)=>{
//    return l*b;
// }


// const check=function(fn){
//     return (...args)=>{
//         if(args.length!==fn.length){
//            throw new Error('incorrect params'); 
//         }
//         else{
//             console.log("len"+fn.length)
//         }
//         return fn(...args);
//     }
// }

// area1=new check(area)
// //console.log(area1(2,3,4))
// console.log("area"+area1(2,3))



