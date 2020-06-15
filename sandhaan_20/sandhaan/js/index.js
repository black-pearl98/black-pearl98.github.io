 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB5LoV430gxmsR5Rn_ywVM3enR6VjZ8eH0",
    authDomain: "sandhaanapp.firebaseapp.com",
    databaseURL: "https://sandhaanapp.firebaseio.com",
    projectId: "sandhaanapp",
    storageBucket: "sandhaanapp.appspot.com",
    messagingSenderId: "890014948486",
    appId: "1:890014948486:web:07fa1df27161d16ad28507",
    measurementId: "G-Z7CYHZCTWK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  
  firebase.auth.Auth.Persistence.LOCAL;
  
  $("#btn-login").click(function(){
	  var email=$("#email").val();
	  var password= $("#pass").val();
	  
	  if(email!="" && password!= ""){
		  var result= firebase.auth().signInWithEmailAndPassword(email,password);

		result.catch(function(error){
			var errorCode=error.code;
			var errorMessage=error.message;
			
			console.log(errorCode);
			console.log(errorMessage);
			window.alert("Message: "+ errorMessage);
		});
		  
	  }
	  else{
		  window.alert('Complete the login details');
	  }
	  
  });
  
   $("#btn-signup").click(function(){
	  var email=$("#emailid").val();
	  var password= $("#password").val();
	   var cpassword= $("#cpassword").val();
	  
	  if(email!="" && password!= "" && cpassword!=""){
		  if(password == cpassword){
			  var result= firebase.auth().createUserWithEmailAndPassword(email,password);

				result.catch(function(error){
					var errorCode=error.code;
					var errorMessage=error.message;
					
					console.log(errorCode);
					console.log(errorMessage);
					window.alert("Message: "+ errorMessage);
				});
		  }
		  else{
			   window.alert('passwords do not match');
		  }
		  
	  }
	  else{
		  window.alert('Complete the details');
	  }
	  
  });
  
  
   $("#btn-update").click(function(){
	   
	  var name=$("#name").val();
	  var branch= $("#branch").val();
	  var roll= $("#roll").val();
	  var mobile= $("#mobile").val();
	  var hostel= $("#hostel").val();
	  var email= $("#email").val();
	  
	  var engineer;
	  if($("#engineer").prop("checked") == true){
               engineer="yes"; 
            }
            else if($("#engineer").prop("checked") == false){
                engineer="no"; 
            }
			
			var toy;
	  if($("#toy").prop("checked") == true){
               toy="yes"; 
            }
            else if($("#toy").prop("checked") == false){
                toy="no"; 
            }
			
			var deadoralive;
	  if($("#deadoralive").prop("checked") == true){
               deadoralive="yes"; 
            }
            else if($("#deadoralive").prop("checked") == false){
                deadoralive="no"; 
            }
			
			var carrombot;
	  if($("#carrombot").prop("checked") == true){
               carrombot="yes"; 
            }
            else if($("#carrombot").prop("checked") == false){
                carrombot="no"; 
            }
			
			var kurukshetra;
	  if($("#kurukshetra").prop("checked") == true){
               kurukshetra="yes"; 
            }
            else if($("#kurukshetra").prop("checked") == false){
                kurukshetra="no"; 
            }
			
			var roboseguidor;
	  if($("#roboseguidor").prop("checked") == true){
               roboseguidor="yes"; 
            }
            else if($("#roboseguidor").prop("checked") == false){
                roboseguidor="no"; 
            }
			
			var mazecorredor;
	  if($("#mazecorredor").prop("checked") == true){
                mazecorredor="yes"; 
            }
            else if($("#mazecorredor").prop("checked") == false){
                 mazecorredor="no"; 
            }
			
			var expositio;
	  if($("#expositio").prop("checked") == true){
               expositio="yes"; 
            }
            else if($("#expositio").prop("checked") == false){
                expositio="no"; 
            }
			
			var ceo;
	  if($("#ceo").prop("checked") == true){
               ceo="yes"; 
            }
            else if($("#ceo").prop("checked") == false){
                ceo="no"; 
            }
			
			var scientica;
	  if($("#scientica").prop("checked") == true){
               scientica="yes"; 
            }
            else if($("#scientica").prop("checked") == false){
                scientica="no"; 
            }
			
			var modex;
	  if($("#modex").prop("checked") == true){
               modex="yes"; 
            }
            else if($("#modex").prop("checked") == false){
                modex="no"; 
            }
			
			var bikeassembling;
	  if($("#bikeassembling").prop("checked") == true){
               bikeassembling="yes"; 
            }
            else if($("#bikeassembling").prop("checked") == false){
                bikeassembling="no"; 
            }
			
			var davincicode;
	  if($("#davincicode").prop("checked") == true){
               davincicode="yes"; 
            }
            else if($("#davincicode").prop("checked") == false){
                davincicode="no"; 
            }
			
			var t2b;
	  if($("#t2b").prop("checked") == true){
               t2b="yes"; 
            }
            else if($("#t2b").prop("checked") == false){
                t2b="no"; 
            }
			
			var aavishkar;
	  if($("#aavishkar").prop("checked") == true){
               aavishkar="yes"; 
            }
            else if($("#aavishkar").prop("checked") == false){
                aavishkar="no"; 
            }
			
			var hydro;
	  if($("#hydro").prop("checked") == true){
               hydro="yes"; 
            }
            else if($("#hydro").prop("checked") == false){
                hydro="no"; 
            }
			
			var matlab;
	  if($("#matlab").prop("checked") == true){
               matlab="yes"; 
            }
            else if($("#matlab").prop("checked") == false){
                matlab="no"; 
            }
			
			var shoot;
	  if($("#shoot").prop("checked") == true){
               shoot="yes"; 
            }
            else if($("#shoot").prop("checked") == false){
                shoot="no"; 
            }
	  
	  var rootRef= firebase.database().ref().child("users");
	  var userID= firebase.auth().currentUser.uid;
	  var usersRef= rootRef.child(userID);
	  
	  if(name!="" && branch!="" && roll!="" && mobile!="" && hostel!="" && email!="" ){
		  var userData={
			  "name": name,
			  "branch": branch,
			  "roll": roll,
			  "mobile": mobile,
			  "hostel": hostel,
			  "email": email,
			  "engineer": engineer,
			  "toy": toy,
			  "deadoralive": deadoralive,
			  "carrombot": carrombot,
			  "kurukshetra": kurukshetra,
			  "roboseguidor": roboseguidor,
			  "mazecorredor": mazecorredor,
			  "expositio": expositio,
			  "ceo": ceo,
			  "scientica": scientica,
			  "modex": modex,
			  "bikeassembling": bikeassembling,
			  "davincicode": davincicode,
			  "t2b": t2b,
			  "aavishkar": aavishkar,
			  "hydro": hydro,
			  "matlab": matlab,
			  "shoot": shoot
			  
		  };
		  
		  usersRef.set(userData, function(error){
			  if(error){
				  
				  var errorCode=error.code;
					var errorMessage=error.message;
					
					console.log(errorCode);
					console.log(errorMessage);
					window.alert("Message: "+ errorMessage);
				  
				  
			  }
			  else{
				  
				  window.alert("Successfully Registered");
				  window.location.href="../index.html";
			  }
		  });
	  }
	  else{
		  window.alert("Complete the registration form");
	  }
		  
  });
  
  
 function logout(){
	  firebase.auth().signOut();
	  window.alert('You are logged out');
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  