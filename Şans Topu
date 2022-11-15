<html>
<head>
<title>OYNA</title>
<style>

.top
{
background:rgba(59,182,233,1.00);
width:100px;
height:100px;
line-height:100px;
border-radius:50%;
text-align:center;
font-size:1.5em;
font-weight:500;
float:left;
margin:5px;
}

button
{
background:rgba(33,37,15,1.00);
font-weight:bold;
font-size:2em;
color:#D8DD05;
padding:10px;
border:none;
}
 
</style>
</head>
 
<body>

<button>OYNA</button>
<div style="clear:both"></div>
<script>

//sayisalOyna fonksiyonunu çağırıyoruz.
$("button").click(sayisalOyna);
 
/*toplarımızı oluşturup ekrana yerleştiriyoruz.*/
for(i=1;i<50;i++)
{
$("<div class='top'>").appendTo($("body")).html(i);	
}
 
function sayisalOyna(){
/*sayıların belirlenmesi için gerekli global değişkenlerin tanımlanması*/
var toplar=[],sayi,sayac=0;
 
/*şanslı sayıları belirliyoruz*/
while(sayac<6)
{
	sayi=Math.floor(Math.random()*49)+1;
	if(toplar.indexOf(sayi)==-1)
	{
		toplar.push(sayi);
		sayac++;
	}
}
/*arkaplanı ilk rengi ile boyuyoruz. ikinci ve diğer tıklamalar için önemli*/
$(".top").css({"background":"rgba(59,182,233,1.00)"});
 
$(".top").each(function(index, element) {
  
   var kutuSayi=Number($(element).html());
   if(toplar.indexOf(kutuSayi)>=0)
   {
   		$(element).css({"background":"red"});
   }
});
 
}

</script>
</body>
</html>
