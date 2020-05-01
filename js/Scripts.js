


(function(){
  $(document).ready(function(){
  $("form").submit(function(e){



  if($('#email').val() === '' && $("#tel").val() === '' && $('#message').val() === '' )
  {
    $('#mailvalidationmessage').text('Email field is required');
    $('#telvalidationmessage').text('Tel field is required');
    $('#msgvalidationmessage').text('Message field is required');
  }else
  if($('#email').val() === '')
  {
  
    $('#telvalidationmessage').text('');
    $('#msgvalidationmessage').text('');
    $('#mailvalidationmessage').text('Email field is required');
  }  else if($("#tel").val() === '')
  {
    $('#mailvalidationmessage').text('');
  
    $('#msgvalidationmessage').text('');
    $('#telvalidationmessage').text('Tel field is required');
  
  } 
  
  else if($('#message').val() === '')
  {
    $('#mailvalidationmessage').text('');
    $('#telvalidationmessage').text('');

    $('#msgvalidationmessage').text('Message field is required');
  } 
  else{
    var result = confirm("Are you sure you want to send message?");
    if(result){
      $('#mailvalidationmessage').text('');
      $('#telvalidationmessage').text('');
      $('#msgvalidationmessage').text('');
    $("#info").text("Message has send sucessfully");
    $("#showmodal").modal("show");

    }
  }

e.preventDefault();
  });

  });

})();


