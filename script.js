const number1_btn = document.getElementById("number1-btn");
const number_1= document.getElementById("number-1");
const number_2= document.getElementById("number-2");
const number_3= document.getElementById("number-3");
const number_4= document.getElementById("number-4");
const details = document.getElementById("details");
const step2_monthly = document.getElementById("step2_monthly");
const step2_yearly = document.getElementById("step2_yearly");
const toggleoff = document.getElementById("toggleoff");
const toogleon = document.getElementById("toogleon");
const gobackstep2monthly = document.getElementById("gobackstep2monthly");
const gobackstep2yearly = document.getElementById("gobackstep2yearly");
const step3_monthly = document.getElementById("step3_monthly");
const step3_yearly = document.getElementById("step3_yearly");
const step2nextmonthly = document.getElementById("step2nextmonthly");
const step2nextyearly = document.getElementById("step2nextyearly");
const gobackstep3monthly = document.getElementById("gobackstep3monthly");
const gobackstep3yearly = document.getElementById("gobackstep3yearly");
const step3nextmonthly = document.getElementById("step3nextmonthly");
const step3nextyearly = document.getElementById("step3nextyearly");
const step4 = document.getElementById("step4");
const confirm_btn = document.getElementById("confirm");
const thankyou = document.getElementById("thankyou");
const gobackstep4 = document.getElementById("gobackstep4");
const pack_type=document.querySelector(".pack-type")
const change=document.querySelector(".change");
const total=document.querySelector(".total");
const amount_chosen=document.querySelector(".amount-chosen");
const selected_packscustom=document.querySelector(".selected-packscustom");
let radiobtnmn= document.querySelectorAll('input[name="radio"]');
let radiobtnyr= document.querySelectorAll('input[name="radioyr"]');
let checkboxes = document.getElementsByName('checkbox');
let checkboxyr = document.getElementsByName('checkboxyr');
var value;
let selectedpack;
let amountchosen;
let amountofextraservices;
let count =0;


async function totalamount(amountchosen){

    amountchosenawait= await amountchosen;
    // console.log(amountchosenawait)
    console.log(amountofextraservices)
    console.log(count)
    let totalValue=amountchosenawait+count
    total.innerHTML=`<i class="fa-solid fa-dollar-sign"></i>${totalValue}`
}
number1_btn.addEventListener("click", () => {
    details.classList.toggle("hidden");
    step2_monthly.classList.toggle("hidden");
    number_1.classList.toggle("background");
    number_2.classList.toggle("background");
   


});
toggleoff.addEventListener("click", () => {
    step2_yearly.classList.toggle("hidden");
    step2_monthly.classList.toggle("hidden");

});
toogleon.addEventListener("click", () => {
    step2_yearly.classList.toggle("hidden");
    step2_monthly.classList.toggle("hidden");

});
gobackstep2monthly.addEventListener("click", () => {
    details.classList.toggle("hidden");
    step2_monthly.classList.toggle("hidden");
    number_1.classList.toggle("background");
    number_2.classList.toggle("background");
});
gobackstep2yearly.addEventListener("click", () => {
    details.classList.toggle("hidden");
    step2_yearly.classList.toggle("hidden");
    number_1.classList.toggle("background");
    number_2.classList.toggle("background");
});
step2nextmonthly.addEventListener("click", () => {
    step3_monthly.classList.toggle("hidden");
    step2_monthly.classList.toggle("hidden");
    number_2.classList.toggle("background");
    number_3.classList.toggle("background");
    

    for (let radio of radiobtnmn){
    if (radio. checked) {    
             selectedpack=radio.value;
             console.log(selectedpack);
              if (selectedpack==="Arcade(Monthly)") {
                  amount_chosen.innerHTML= '<i class="fa-solid fa-dollar-sign"></i>9/mon';
                amountchosen=9;
                 return amountchosen;
              }
              else if (selectedpack==="Advanced(Monthly)") {
                amount_chosen.innerHTML= '<i class="fa-solid fa-dollar-sign"></i>12/mon';
                amountchosen=12;
                return amountchosen;

                  
              }
              else if (selectedpack==="Pro(Monthly)") {
                amount_chosen.innerHTML= '<i class="fa-solid fa-dollar-sign"></i>15/mon';
                amountchosen=15;

                return amountchosen;

                  
              }
              
              break;
            }
            
        }
        pack_type.innerHTML=""
                 pack_type.innerHTML=selectedpack

});
step2nextyearly.addEventListener("click", () => {
    step3_yearly.classList.toggle("hidden");
    step2_yearly.classList.toggle("hidden");
    number_2.classList.toggle("background");
    number_3.classList.toggle("background");
    
    for (let radioyr of radiobtnyr){
        if (radioyr. checked) {    
                 selectedpack=radioyr.value;
                 console.log(selectedpack);
                 if (selectedpack==="Arcade(Yearly)") {
                    amount_chosen.innerHTML= '<i class="fa-solid fa-dollar-sign"></i>90/mon';
                    amountchosen=90;

                return amountchosen;
                }
                else if (selectedpack==="Advanced(Yearly)") {
                  amount_chosen.innerHTML= '<i class="fa-solid fa-dollar-sign"></i>120/mon';
                  amountchosen=120;

                   return amountchosen;
                    
                }
                else if (selectedpack==="Pro(yearly)") {
                  amount_chosen.innerHTML= '<i class="fa-solid fa-dollar-sign"></i>150/mon';
                  amountchosen=150;

                  return amountchosen;
                    
                }
                   
                 break;
                         }
                }
    
                     pack_type.innerHTML=""
                     pack_type.innerHTML=selectedpack
});

function extraamountfunc(result){
    console.log(result)

    if (result==="custom") {
        amountofextraservices=2;
        console.log(amountofextraservices)
        return amountofextraservices;
    }
   else if (result==="large-storage") {
        amountofextraservices=2;
        console.log(amountofextraservices)
        return amountofextraservices;
        
    }
    else if (result==="online-services") {
        amountofextraservices=1;
        console.log(amountofextraservices)
        
        return amountofextraservices;
        
    }
}

function extraamountfuncyr(result){
    console.log(result)

    if (result==="online-services") {
        amountofextraservices=10;
        return amountofextraservices;
    }
    else if (result==="large-storage") {
        amountofextraservices=20;
        console.log(amountofextraservices)

       return amountofextraservices;
        
    }
    else if (result==="Custom") {
        amountofextraservices=20;
        console.log(amountofextraservices)


      return amountofextraservices;
        
    }
}

gobackstep3monthly.addEventListener("click", () => {
    step2_monthly.classList.toggle("hidden");
    step3_monthly.classList.toggle("hidden");
    number_2.classList.toggle("background");
    number_3.classList.toggle("background");
});
gobackstep3yearly.addEventListener("click", () => {
    step2_yearly.classList.toggle("hidden");
    step3_yearly.classList.toggle("hidden");
    number_2.classList.toggle("background");
    number_3.classList.toggle("background");
});



confirm_btn.addEventListener("click", () => {
    step4.classList.toggle("hidden");
    thankyou.classList.toggle("hidden");
});

step3nextmonthly.addEventListener("click", () => {
    step4.classList.toggle("hidden");
    step3_monthly.classList.toggle("hidden");
    number_4.classList.toggle("background");
    number_3.classList.toggle("background");
    totalamount(amountchosen);
    for (let i = 0; i < checkboxes.length; i++) {
        
        if (checkboxes[i].checked) {
            let result;
            result = checkboxes[i].value;
            extraamountfunc(result);
             selected_packscustom.insertAdjacentHTML("beforeend",`
          <div class="flex-container-yr/mn" >
                 <p class="extra-services">
                  ${result}
                  </p>
                  </div>
               <p class="amount-chosen">
               <i class="fa-solid fa-dollar-sign"></i>${amountofextraservices}
              </p>
        `)
         count=count+amountofextraservices
                 console.log(count)
    }
    
    
}
            value = true;
            return value;
});
step3nextyearly.addEventListener("click", () => {
    step4.classList.toggle("hidden");
    step3_yearly.classList.toggle("hidden");
    number_4.classList.toggle("background");
    number_3.classList.toggle("background");
    
    totalamount(amountchosen);
    for (var i = 0; i < checkboxyr.length; i++) {
        let resultyr;
        if (checkboxyr[i].checked) {
            resultyr= checkboxyr[i].value;
            console.log(resultyr) 
            extraamountfuncyr(resultyr)
            selected_packscustom.insertAdjacentHTML("beforeend",`
            <div class="flex-container-yr/mn" >
                   <p class="extra-services">
                    ${resultyr}
                    </p>
                    </div>
                 <p class="amount-chosen">
                 <i class="fa-solid fa-dollar-sign"></i>${amountofextraservices}
                </p>
          `)
          count=count+amountofextraservices
                 console.log(count)
               
        }
    }
     value = false;
    return value;
});
gobackstep4.addEventListener("click", asyncfunc);
async function asyncfunc() {
        step4.classList.toggle("hidden");
        number_4.classList.toggle("background");
        number_3.classList.toggle("background");
        value = await value;
        console.log(value)
        if (value) {
            console.log(value)
            step3_monthly.classList.toggle("hidden");
        }
        else {
            console.log(value)
            step3_yearly.classList.toggle("hidden");
        }
        selected_packscustom.innerHTML=""
        count=0;
    };
change.addEventListener("click",()=>{
    step4.classList.toggle("hidden");
    step2_monthly.classList.toggle("hidden");
    number_4.classList.toggle("background");
    number_2.classList.toggle("background");
    selected_packscustom.innerHTML="";
    count=0;

})

