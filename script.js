$('.btn').click(function() {
    // input'un içindeki email adresini alıyoruz
    var email = $('#emailAdress').val();
  
    // email adresini doğrulamak için bir regular expression kullanıyoruz
    var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  
    // email adresini regular expression ile doğruluyoruz
    if (emailRegex.test(email)) {
      // email adresi doğruysa .result class'ının display'ini none yapıyoruz
      $('.result').css('display', 'none');
      $("#emailAdress").css("border","1px solid black")

    } else {
      // email adresi yanlışsa .result class'ının display'ini block yapıyoruz
      $('.result').css('display', 'block');
      $("#emailAdress").css("border","1px solid red")
    }
  });
  