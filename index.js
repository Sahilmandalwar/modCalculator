const input_number = document.getElementById('number');
const input_mod = document.getElementById("mod");
const resultDiv = document.querySelector('.result');
const resultText = document.getElementById('result');

const calculateMod = (e) => {
    e.preventDefault();
    const number = Number(input_number.value);
    const mod = Number(input_mod.value);
    if(mod === 0) {
        throw new Error("MOD value 0 is not valid")
    }else{
        const result = number % mod;
        resultDiv.style.display='flex'
        resultText.innerText = result;
    }
   
}