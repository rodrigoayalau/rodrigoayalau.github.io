// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation')

    // Loop over them and prevent submission
    Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  }, false)

  document.getElementById('redeem-the-code').addEventListener('click', () => {
    event.preventDefault();
    console.log('clicked!');
    if (document.getElementById('the-text-for-promo').value === '' || document.getElementById('the-text-for-promo').value != 'promo') {
      alert("Invalid Code!");
    } else if (document.getElementById('the-text-for-promo').value === 'promo') {
      setTimeout(() => {
        document.getElementById('the-promo-code').style.display = 'block';
        document.getElementById('the-price').innerHTML = '$20';
      }, 2000);

    } else {
      return false;
    }
  });

  function openIframe() {
    var iframe = document.getElementById('openiframe');
    iframe.innerHTML.iframe
  }
}())
