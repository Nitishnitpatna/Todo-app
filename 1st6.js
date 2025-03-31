// Eventbubbling:- if in nested element we triggers the event for inner element then it also triggers the event for it's parent / upper level element's also if event was same 
//  to avoid this use an event in methode stopPropagation() 
// let div = document.querySelector('div');
// let ul  = document.querySelector('ul');
// let li = document.querySelectorAll('li');

// div.addEventListener('click',function(){
//     console.log("div was clicked");
// });

// ul.addEventListener('click',function(e){
//     e.stopPropagation();
//     console.log("ul was clicked");
// });

// for(lis of li){
//     lis.addEventListener('click',function(e){
//         e.stopPropagation();
//         console.log("li was clicked");
//     })
// }


// 2nd :- todo App

    let ul = document.querySelector('ol');
    let inp = document.querySelector('input');
    let btn = document.querySelector('button');
    btn.addEventListener('click',function(){
        let item = document.createElement('li');
        let val = inp.value;
        // console.log(val);
        item.innerText = val;
        // alert(li.innerText);


        let deletbtn = document.createElement('button');
        deletbtn.innerText = "Delete";
        deletbtn.classList.add('delete');
        item.appendChild(deletbtn);
        ul.appendChild(item);
        inp.value = "";
    })

                // by this way the same elemet add event is not get applied for the same new created element.
    // let deletbtn = document.querySelectorAll('.delete');
    // for(dbtn of deletbtn){
    //     dbtn.addEventListener('click',function(){
    //         console.log("element deleted")
    //         let par = dbtn.parentElement;
    //         console.log(par);
    //     })
    // }


                // use of event delegation
    // Step 1st:- choose the parent element of button
    let ol = document.querySelector('ol');
    ol.addEventListener('click',function(e) {
        console.log(e.target.nodeName); // to know which trigger the event
        // console.log(`button is clicked`);

        if(e.target.nodeName == "BUTTON"){
            let listitem = e.target.parentElement;
            listitem.remove();
            console.log("deleted");
        }
        
    });
    