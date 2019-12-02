<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>MadLib!</title>
		<link href='http://fonts.googleapis.com/css?family=Indie+Flower' rel='stylesheet'>
		<style>
			body { font-size: 1.5em; }
		</style>
	</head>
	<body style="background-color:#000;">
		<div style="width:800px; margin:0 auto; background-color:#FDFDFD; border:4px double #00A;"> 
			<h1>Today's MadLib!</h1>
			<hr />
			<p style="padding:25px; text-align:left;"> 
                Good 
                <span style="color:red;"><?php if(isset($_GET['email'])){echo ucfirst($_GET['email']);} ?></span> 
                
			
		 </div>
		<script src="/js/w3c.js"></script>	
	</body>
</html>