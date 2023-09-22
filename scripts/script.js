// A $( document ).ready() block.
// $ = jQuery world 
$( document ).ready(function() { 
  
  console.log( "ready!" ); 
  
  //click the button
  
  $('#btnUserName').click(function() { 
    console.log("button clicked")
    
    let fname = $('#fname').val()
     
    console.log(fname);
      // $('#fname').val()
       
    let greeting; 
    
    greeting = "Hi There, " + fname + "! What's Up?"
    
    $('#something').text(greeting);
    

  }); 
  
});