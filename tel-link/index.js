
  /*фильтр телефона в href*/  
  let phone = document.querySelectorAll('.tel-link');

  for(let i = 0; i < phone.length; i++){
    let phoneHref = phone[i].getAttribute('href');

    phoneHref = phoneHref.replace(/[ ()-]/g, '');

    phone[i].href = 'tel:' + phoneHref;
  }