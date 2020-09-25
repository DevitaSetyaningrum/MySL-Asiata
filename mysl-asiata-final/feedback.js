const resetButton = document.getElementById('resetButton')
resetButton.onclick = () => document.getElementById('feedback').reset()



function validateFeedback() {
    console.log("test")
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value 

    if(name.length >= 5 && 
        name.length <= 25 && 
        email.split('@').length-1 == 1 && 
        email.split('.').length-1 >= 1 && 
        email.indexOf('..') == -1 && 
        email.indexOf('@.') == -1 && 
        email.indexOf('.@') == -1 && 
        email.charAt(0) != '@' && 
        email.charAt(0) != '.') {
        alert('Thank you for the feedback 😊');
        document.getElementById('feedback').reset()
    }
    else{
        alert('Wrong feedback format. Please Try Again')
    }
}

$(document).ready(function(){
    var oldSize = parseFloat($("#title").css('font-size'));
    var newSize = oldSize  * 1.3;
    
      $("#title").hover(
        function() {
         $("#title").animate({ fontSize: newSize}, 200);
        },
        function() {
        $("#title").animate({ fontSize: oldSize}, 200);
       }
     );
    
});