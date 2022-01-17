//결과보기
//제목을 클릭했을 때 ~~~실행해라
document.querySelector(".result1t h4").addEventListener("click", function(){
    document.querySelector(".result1").style.display = "block";
})

document.querySelector(".result2t h4").addEventListener("click", function(){
    document.querySelector(".result2").style.display = "block";
})

document.querySelector(".result3t h4").addEventListener("click", function(){
    document.querySelector(".result3").style.display = "block";
})

document.querySelector(".result4t h4").addEventListener("click", function(){
    document.querySelector(".result4").style.display = "block";
})

document.querySelector(".result5t h4").addEventListener("click", function(){
    document.querySelector(".result5").style.display = "block";
})

document.querySelector(".result6t h4").addEventListener("click", function(){
    document.querySelector(".result6").style.display = "block";
})

document.querySelector(".result7t h4").addEventListener("click", function(){
    document.querySelector(".result7").style.display = "block";
})

document.querySelector(".result8t h4").addEventListener("click", function(){
    document.querySelector(".result8").style.display = "block";
})

document.querySelector(".result9t h4").addEventListener("click", function(){
    document.querySelector(".result9").style.display = "block";
})

document.querySelector(".result10t h4").addEventListener("click", function(){
    document.querySelector(".result10").style.display = "block";
})

document.querySelector(".result11t h4").addEventListener("click", function(){
    document.querySelector(".result11").style.display = "block";
})

document.querySelector(".result12t h4").addEventListener("click", function(){
    document.querySelector(".result12").style.display = "block";
})

document.querySelector(".result13t h4").addEventListener("click", function(){
    document.querySelector(".result13").style.display = "block";
})

document.querySelector(".result14t h4").addEventListener("click", function(){
    document.querySelector(".result14").style.display = "block";
})

document.querySelector(".result15t h4").addEventListener("click", function(){
    document.querySelector(".result15").style.display = "block";
})

//for문을 이용해서 1~12까지 출력

// for(let i=1; i<=12; i++){
//     document.querySelector(".result"+i+"t h4").addEventListener("click", function(){
//         document.querySelector(".result" + i).style.display = "block";
//     });
// }


//forEach()을 이용해서 1~12까지 출력
// document.querySelectorAll(".result h4").forEach(function(el){
//     // console.log(el)
//     el.addEventListener("click", function(){
//         alert("클릭");
//     })
// });
