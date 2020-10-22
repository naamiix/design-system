const $inputs = document.querySelectorAll('.inputs')
const $submitButton = document.querySelector('.js-submit-login-button')

$submitButton.addEventListener('click', ()=>
{
    for (let i = 0; i < $inputs.length; i++) 
    {
        if(!($inputs[i].value))
        {
            $inputs[i].classList.remove('inputs_valid')
            $inputs[i].classList.add('inputs_unvalid')
        }
        else if($inputs[i].value)
        {
            $inputs[i].classList.remove('inputs_unvalid')
            $inputs[i].classList.add('inputs_valid')
        }
        
    }
})

console.log(!($inputs[0].value))