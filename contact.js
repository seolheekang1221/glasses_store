const errMessage = {
  name: '',
  email: '',
  address: '',
  city: '',
  postal: '',
  options: '',
  message: ''
};

const contactsForm = {
  inputHandler: function(e) {
    const { name, value } = e.target;
    console.log(name, value);
    switch (name) {
      case 'postal':
        contactsForm.validatePostal(value);
        break;
      case 'options':
        contactsForm.optionsHandler(value);
    }
  },
  optionsHandler: function(option) {
    const orderProblem = document.querySelector('#order-problem');
    if (option === 'Problem') {
      orderProblem.style.display = 'block';
    } else {
      orderProblem.style.display = 'none';
    }
  },
  validatePostal: function(postalCode) {
    const postalRegex = /^[A-Za-z]\d[A-Za-z][ ]?\d[A-Za-z]\d$/;
    const error = document.querySelectorAll('.error');
    if (postalCode.length !== 0 && !postalRegex.test(postalCode)) {
      error[0].style.display = 'block';
      errMessage.postal = 'Invalid form';
      error[0].innerText = errMessage.postal;
    } else {
      error[0].style.display = 'none';
    }
  }
};

const setEventHandler = function() {
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const address = document.querySelector('#address');
  const city = document.querySelector('#city');
  const postal = document.querySelector('#postal');
  const question = document.querySelector('#question');
  const comment = document.querySelector('#comment');
  const problem = document.querySelector('#problem');
  const problemComment = document.querySelector('#problem_comment');
  const message = document.querySelector('#message');

  name.addEventListener('input', contactsForm.inputHandler);
  email.addEventListener('input', contactsForm.inputHandler);
  address.addEventListener('input', contactsForm.inputHandler);
  city.addEventListener('input', contactsForm.inputHandler);
  postal.addEventListener('input', contactsForm.inputHandler);
  question.addEventListener('input', contactsForm.inputHandler);
  comment.addEventListener('input', contactsForm.inputHandler);
  problem.addEventListener('input', contactsForm.inputHandler);
  problemComment.addEventListener('input', contactsForm.inputHandler);
  message.addEventListener('input', contactsForm.inputHandler);
};

window.onload = function() {
  setEventHandler();
};
