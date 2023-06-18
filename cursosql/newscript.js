function validateForm() {
    var nombreInput = document.getElementsByName('nombre')[0];
    var apellidoInput = document.getElementsByName('apellido')[0];
    var emailInput = document.getElementsByName('email')[0];
  
    var isValid = true;
  
    if (nombreInput.value === '') {
      nombreInput.classList.add('error');
      isValid = false;
    } else {
      nombreInput.classList.remove('error');
    }
  
    if (apellidoInput.value === '') {
      apellidoInput.classList.add('error');
      isValid = false;
    } else {
      apellidoInput.classList.remove('error');
    }
  
    if (emailInput.value === '') {
      emailInput.classList.add('error');
      isValid = false;
    } else {
      emailInput.classList.remove('error');
    }
  
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(emailInput.value)) {
      emailInput.classList.add('error');
      isValid = false;
    } else {
      emailInput.classList.remove('error');
    }
  
    if (!isValid) {
      alert('Por favor, complete todos los campos correctamente.');
    }
  
    return isValid;
  }
  
  function removeError() {
    this.classList.remove('error');
  }
  
  var inputs = document.getElementsByTagName('input');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('input', removeError);
  }
  