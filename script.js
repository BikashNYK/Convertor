const convert = document.getElementById('convert');

const swap = document.getElementById('swap');

const from = document.getElementById('from');

const to = document.getElementById('to');

const inputNumber = document.getElementById('input-box'); 

const resultWrapper = document.getElementById('result-box')
// convert

convert.addEventListener('click',()=>{
    let fromValue = from.value;
    // console.log(fromValue)
    let toValue = to.value;

    let input = inputNumber.value;
    let result = covertBase (fromValue,toValue,input);
    resultWrapper.innerHTML= `<h3>${result}</h3>`
    // console.log(result,resultWrapper)
})

const covertBase = (frombase,tobase,num)=>{
    let a = parseInt(num,frombase);
    let res = a.toString(tobase);
    return res;
}


//  Swapping

swap.addEventListener('click',()=>{
    let temp = from.value;
    from.value=to.value;
    to.value=temp;
})