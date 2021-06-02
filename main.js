var names = [ "Srinivas (dad)", "Mahi (mom)", "Anusri", "Anukrita" ];

var images = [ "Srinivas.jpg","Mahi.jpg","Anusri.jpg", "Anukrita.jpg"];
var i=0;
function happen()
{
    i= i +1;
 document.getElementById("names").text=names[i];
 document.getElementById("images").src=images[i];
}
