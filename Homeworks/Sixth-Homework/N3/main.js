let calculateButton = document.getElementById('calculateButton');
let averageResult = document.getElementById('averageResult');
calculateButton.addEventListener('click',calculateAverage);
function calculateAverage(){
    const numberInput = document.getElementById('numberInput').value;
    const numberArr = numberInput.split(':').filter(item => item !== '').map(Number);
   
        if(numberArr.length === 0){
            averageResult.textContent='No numbers entered';
            return;
        }else{
            let sum = 0
        for(let i=0;i<numberArr.length;i++){
            sum+=numberArr[i];
            console.log(numberArr[i]);
        }
        const average = sum / (numberArr.length);
        averageResult.textContent = `Average ${average}`;
        }
    
}
