
// highlight
const highlight = function(){
    hljs.highlightAll()
}

//modal
const modal = function(){
    //버튼을 클릭하면 modal 창을 보이게 해주세요(show 추가)
    document.querySelector(".source-btn").addEventListener("click", ()=> {
        document.querySelector("#modal").classList.add("show");
        document.querySelector("#modal").classList.remove("hide");
    });
    document.querySelector(".modal-close").addEventListener("click", ()=>{
        document.querySelector("#modal").classList.add('hide');
    })
}


//tabmenu
const tabMenu = function(){
    const tabBtn = document.querySelectorAll(".view-title > ul > li");
    const tabCont = document.querySelectorAll(".view-cont > div");

    //각각의 버튼을 클릭하면 경고창을 
    tabBtn.forEach((btn, index) => {
        btn.addEventListener("click", ()=> {

            //모든 클래스 active 삭제
            tabBtn.forEach((el)=>{
                el.classList.remove("active");
            })
            //내가 클릭한건 active 추가
            btn.classList.add("active");

            //모든 컨텐츠 박스 안보이게
            tabCont.forEach((el)=>{
                el.style.display = "none";
            })
            //내가 클릭한 콘텐츠 박스를 보이게
            tabCont[index].style.display ="block";
            })
    })
}



   



    const modal2  = function(){
        let windowWrapper = document.querySelector('#modal');                   //#modal을 windowWrapper에 저장
        document.querySelector(".source_btn").addEventListener("click",()=>{ //source_btn을 클릭하면
            document.querySelector("#modal").classList.add("show")          //modal에 show를 추가하고
            document.querySelector("#modal").classList.remove("hide")        //hide를 삭제
        })
        document.querySelector("#modal-close").addEventListener("click", ()=>{      //modal-close를 클릭하면
            document.querySelector("#modal").classList.add('hide');          //hide를 추가
        })
    }


    const tabMenu2 = function(){
        var tabBtn = document.querySelectorAll(".menu-bar > ul > li");
        var tabCont = document.querySelectorAll(".content > div");

        tabBtn.forEach((btn, index)=>{
            btn.addEventListener("click", ()=>{
                 //모든 클래스 active 삭제
            tabBtn.forEach((el)=>{
                el.classList.remove("active");
            })
            //내가 클릭한건 active 추가
            btn.classList.add("active");

            //모든 컨텐츠 박스 안보이게
            tabCont.forEach((el)=>{
                el.style.display = "none";
            })
            //내가 클릭한 콘텐츠 박스를 보이게
            tabCont[index].style.display ="block";
            })
        })
    }


          //클릭하지 않은건 active 삭제
        // for(let btn of tabBtn){
        //     btn.classList.remove("active");
        // }

        // <!-- <script>
    //      const modal = function(){
    //         $(".source-btn").click(()=>{
    //             $("#modal").addClass("show");
    //         });
    //         $(".modal-close").click(()=>{
    //             $("#modal").removeClass("show");
    //         })
    //     }
    //     modal();
    // </script> -->