$(document).ready(function() {
  console.log('READY');
});

const btn = document.querySelector('#btn');

btn.addEventListener(click, function() {
  $.ajax({
    method: 'GET',
    url: 'https://unify.id/frontend_challenge/user.json'
  })
  .done((sharedWithMe) => {
    var credentialsToDisplay = document.getElementById('credentials_ul').childNodes.length;
    for (var i = credentialsToDisplay; i < sharedWithMe.length; i++) {
      $('#credentials_ul').append(`<li style="list-style:none"${shared_with_me[i]}></li>`);
    }
  })
});
