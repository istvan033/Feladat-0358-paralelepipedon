const aoldalInput = document.querySelector('#aoldal');
const boldalInput = document.querySelector('#boldal');
const coldalInput = document.querySelector('#coldal');
const calcButton = document.querySelector('#calcButton');
const Terfog = document.querySelector('#terfog');

calcButton.addEventListener('click', () => {
    console.log("terfog")
    const aoldal = Number(aoldalInput.value);
    const boldal = Number(boldalInput.value);
    const coldal =Number(coldalInput.value);
    let terfog =calcTerfog(aoldal ,boldal, coldal);
    Terfog.value=terfog;
    result.style.display='block';
    deleteInputs();
});

function calcTerfog(aoldal,boldal,coldal){
return aoldal*boldal*coldal

}

function deleteInputs(){
   aoldalInput.value= "";
   boldalInput.value= "";
   coldalInput.value= "";
    
}
