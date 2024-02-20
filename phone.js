// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaFF77dH0gcKMP5eXeJu-em2rNGGjcAGo",
  authDomain: "verification-e3b31.firebaseapp.com",
  projectId: "verification-e3b31",
  storageBucket: "verification-e3b31.appspot.com",
  messagingSenderId: "943159807637",
  appId: "1:943159807637:web:134514e8d2b38405bd959c"
};
	firebase.initializeApp(firebaseConfig);
render();
function render(){
	window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
	recaptchaVerifier.render();
}
	// function for send message
function phoneAuth(){
	var number = document.getElementById('number').value;
	firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function(confirmationResult){
		window.confirmationResult = confirmationResult;
		coderesult = confirmationResult;
		document.getElementById('sender').style.display = 'none';
		document.getElementById('verifier').style.display = 'block';
	}).catch(function(error){
		alert(error.message);
	});
}
	// function for code verify
function codeverify(){
	var code = document.getElementById('verificationcode').value;
	coderesult.confirm(code).then(function(){
		document.getElementsByClassName('p-conf')[0].style.display = 'block';
		window.open('Introduction.html')
		document.getElementsByClassName('n-conf')[0].style.display = 'none';
	}).catch(function(){
		document.getElementsByClassName('p-conf')[0].style.display = 'none';
		document.getElementsByClassName('n-conf')[0].style.display = 'block';
	})
}
