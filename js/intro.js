$(document).ready(function(){
    digiRain(width, height, 15, 0.5, 50, '#20F54A', fontSize, '#000000');
new TypeIt('.type-it', {
    strings: ['# system initializing;','# accessing user data;','# system initialized;', '# system boot finished;', '# loading SiliconValleyChallenge;', '# loading (33%) ...', '# loading (66%) ...', '# SiliconValleyChallenge loaded;', '# Accessing the Matrix.'],
    speed: 33,
    cursorChar: "_",
    startDelay: 0,
    afterComplete: function(instance){
        setTimeout(function(){
            $("#typeit").fadeOut(1500, function(){
                $("#DigiRain").fadeIn(3000, function(){
                    setTimeout(function(){
                        $("#login").fadeIn(1500);
                    }, 3000)
                });
            });
        }, 5000)}
    });     
    $("#decrypt").click(decrypt);

    $('#username').keypress(function(event){
	
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            decrypt();
        }
    
    });
    $('#password').keypress(function(event){
	
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            decrypt();
        }
    
    });
    $('#help').click(passwordReset);
});

function decrypt(){
    if (!$("#username").val()) {
        alert("Application decryption not possible without valid username.");
    } else if (!$("#password").val()){
        alert("Passwort required in order to decrypt application of User " + $('#username').val());
    } else {
        $("#decrypt").disabled = true;
        alert("Success. Access granted.");
        window.location.assign("./application.html");
    }
}

function passwordReset(){
    alert('Try username "WACKER" and password "TakingChancesTogether"');
}