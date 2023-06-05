<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="main.css">
</head>

<body>
    <div id="whole">
        <div id="h">
            <div>
                <h1 id="heading">Let us know your delivery information</h1>
                <h2 id="pn"></h2>
                <h2 id="pid"></h2>
            </div>
        </div>

        <form action="javascript:sendmail()" id="inputs">
            <input type="text" name="name" id="name" class="input" placeholder="Enter Your Name" autocomplete="off">
            <input type="text" name="email" id="email" class="input" placeholder="Enter Your Email adress"
                autocomplete="off">
            <input type="text" name="pin" id="pin" class="input" placeholder="Enter Your pin code/ postal code"
                autocomplete="off">
            <input type="text" name="adress" id="adress" class="input" placeholder="Enter Your delivery adress"
                autocomplete="off">
            <input type="text" name="mobile" id="m_no" class="input" placeholder="Enter Your mobile number"
                autocomplete="off">

            <input type="submit" value="Order Now" id="submitbtn">
        </form>
    </div>

</body>
<script src="enquiry.js"></script>
<script src="https://smtpjs.com/v3/smtp.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>

<script
  src="https://code.jquery.com/jquery-2.2.4.min.js"
  integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
  crossorigin="anonymous"></script>
<script src="https://smtpjs.com/v3/smtp.js"></script>
 
<script>  

     function sendmail(){
    
			var name = "$('#Name').val()";
			var email = "hello";
			var subject = "ubiubib";
      var message = "hello world";

			// var body = $('#body').val();

			var Body='Name: '+name+'<br>Email: '+email+'<br>Subject: '+subject+'<br>Message: '+message;
			//console.log(name, phone, email, message);

			Email.send({
        SecureToken:"dbe2a93a-98da-4418-b60e-a94282e191b2",
				To: 'sarthz.2008@gmail.com',
				From: "sarthakbiswas966@gmail.com",
				Subject: "New message on contact from "+name,
				Body: Body
			}).then(
				message =>{
					//console.log (message);
					if(message=='OK'){
					alert('Your mail has been send. Thank you for connecting.');
					}
					else{
						console.error (message);
						alert('There is error at sending message. ')
						
					}

				}
			);



		}


    </script>
 </script>
</html>