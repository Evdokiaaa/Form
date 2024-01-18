document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('registration__form');
    form.addEventListener('submit', validateForm);
  
    console.log(form)
    function validateForm(e){
        e.preventDefault()
        let isValid = true;
        
        const a1 = isValid && validateField('first__name',validateName)
        const a2 = isValid && validateField('last__name',validateName)
        const a3 = isValid && validateField('email',validateEmail)
        const a4 = isValid && validateField('birthday',validateAge) 
        const a5 = isValid && validatePasswordField()
        document.getElementById('form__button').disabled = false;
        console.log([a1,a2,a3,a4,a5])//Заменить все буквы на isValid
        if(!isValid){
            alert('Где то ошибка в валидации')
            e.preventDefault();
            
        }
    }
    function validateField(field,validateFunc){
        const validateField = document.getElementById(field)
        const isValid = validateFunc(validateField.value)
        return isValid

    }
    function validateName(name){
        const reg = /^[a-zA-Zа-яА-ЯёЁ ]{2,30}$/
        return reg.test(name)
    }
    function validatePassword(pass){
        //От 8-12 символов, как минимум одна заглавная буква, одна строчная буква, одна цифра и один специальный символ:
        const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,25}$/
        
        return reg.test(pass)
    }
    function validatePasswordField(){
        const password = document.getElementById('password')
        const confirmPassword = document.getElementById('password__confirm')
        const isValid = validatePassword(password.value) && password.value === confirmPassword.value 
        return isValid
    }
    function validateAge(birthdayDate){
        const birthday = new Date(birthdayDate)
        const today = new Date()

        let age = today.getFullYear() - birthday.getFullYear()
        const month = today.getMonth() - birthday.getMonth();
        if(month < 0 || month === 0 && today.getDate() < birthday.getDate()) age--
        return age>=18
        
    }
    function validateEmail(email){
        const reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        return reg.test(email)

    }

})
    