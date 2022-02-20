             //phone plus button handler
const phonePlusBtn = document.getElementById('first-plus-btn');
phonePlusBtn.addEventListener('click', function(){
    allPlusBtnHndlr('phone-value');
    const phonePrice = document.getElementById('phone-price').innerText;
    const phonePriceNumber = parseFloat(phonePrice);
    const input = document.getElementById('phone-value').value;
    const numInput = parseFloat(input);
    const numInp2 = numInput -1;
    const totalPrice = (numInput * phonePriceNumber) / numInp2;
    document.getElementById('phone-price').innerText = totalPrice;
    const honePrice = document.getElementById('phone-price').innerText;
    const honePriceNumber = parseFloat(honePrice);
    console.log(honePriceNumber)
})

              //case plus button handler
const casePlusBtn = document.getElementById('second-plus-btn');
casePlusBtn.addEventListener('click', function(){
    allPlusBtnHndlr('case-value');
    const phonePrice = document.getElementById('case-price').innerText;
    const phonePriceNumber = parseFloat(phonePrice);
    const input = document.getElementById('case-value').value;
    const numInput = parseFloat(input);
    const numInp2 = numInput -1;
    const totalPrice = (numInput * phonePriceNumber) / numInp2;
    document.getElementById('case-price').innerText = totalPrice;
})


              //phone minus button handler
const phoneMinusBtn = document.getElementById('first-minus-btn');
phoneMinusBtn.addEventListener('click', function(){
    allMinusBtnHndlr('phone-value');
    const phonePrice = document.getElementById('phone-price').innerText;
    const phonePriceNumber = parseFloat(phonePrice);
    const input = document.getElementById('phone-value').value;
    const numInput = parseFloat(input);
    const numInp2 = numInput +1;
    const totalPrice = (phonePriceNumber * numInput) / numInp2;
    const originalPrice  = phonePriceNumber / numInp2;
    
    if(totalPrice <= originalPrice){
        document.getElementById('phone-price').innerText = 1200;
    }
    else{
        document.getElementById('phone-price').innerText = totalPrice;
    }
})

             //case minus button handler
const caseMinusBtn = document.getElementById('second-minus-btn');
caseMinusBtn.addEventListener('click', function(){
    allMinusBtnHndlr('case-value');
    const phonePrice = document.getElementById('case-price').innerText;
    const phonePriceNumber = parseFloat(phonePrice);
    const input = document.getElementById('case-value').value;
    const numInput = parseFloat(input);
    const numInp2 = numInput +1;
    const totalPrice = (phonePriceNumber * numInput) / numInp2;
    const originalPrice  = phonePriceNumber / numInp2;
    
    if(totalPrice <= originalPrice){
        document.getElementById('case-price').innerText = 56;
    }
    else{
        document.getElementById('case-price').innerText = totalPrice;
    }
})


                             //sub total

// Updating New Total and Subtotal
  updateTotal();

// Total/Subtotal Calculation and Update to DOM
function updateTotal(){
   const priceOfItem1 = document.getElementById("phone-price").innerText;
   const priceOfItem2 = document.getElementById("case-price").innerText;
   const getSubTotal = parseFloat(priceOfItem1) + parseFloat(priceOfItem2);
   document.getElementById('subtotal').innerText = getSubTotal;
   // Adding 5% tax with price Amount
   const tax = getSubTotal * 5 / 100 ;
   document.getElementById('tax').innerText =  tax;
   document.getElementById('overall').innerText = getSubTotal + tax;
}



                    //All functions//
                //plus minus buttons
function allPlusBtnHndlr(id){
    const phoneInput = document.getElementById(id).value;
    const numPhnInput = parseFloat(phoneInput);
    const totalInputValue = numPhnInput + 1;
    document.getElementById(id).value = totalInputValue;
}

function allMinusBtnHndlr(id){
    const phoneInput = document.getElementById(id).value;
    const numPhnInput = parseFloat(phoneInput);
    const totalInputValue = numPhnInput - 1;
    if(totalInputValue == 0){
        document.getElementById(id).value = 1;
    }
    else{
        document.getElementById(id).value = totalInputValue;
    }
}                 //plus minus button ends here


