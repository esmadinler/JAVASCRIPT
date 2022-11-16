<html>
<head>
<title>Dijital Saat</title>
</head>
 
<body>
<h1>Bilgisayarın Şuanki Saati: <span id="zemin"> </span></h1>
 
<script>
var saatZemin = document.getElementById("zemin");

function format(gelen) {
var StrYap = gelen.toString();
if (StrYap.length === 1) {
return "0" + StrYap;
} else {
return StrYap;
}
}
 
function saatGuncelle() {
var dd = new Date();
var hh = dd.getHours();
var mm = dd.getMinutes();
var ss = dd.getSeconds();
saatZemin.textContent = format(hh) + ":" + format(mm) + ":" + format(ss);
}
 
setInterval(saatGuncelle, 1000);
 
</script> 
</body>
</html>
