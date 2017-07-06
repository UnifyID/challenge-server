$(document).ready(function() {

$('#sharedWithMe').on('click', () => {
  $.ajax({
    method: 'GET',
    url: 'https://unify.id/frontend_challenge/user.json'
  })
  .done((sharedWithMe) => {
    var credentialsToDisplay = document.getElementById('credentials_ul').childNodes.length;
    console.log(sharedWithMe, '=========')
    for (var i = credentialsToDisplay; i < sharedWithMe.length; i++) {
      $('#credentials_ul').append(`<li style="list-style:none"${shared_with_me[i]}></li>`);
    }
  })
});
});
