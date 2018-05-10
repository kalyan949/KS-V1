var sno=0;
$("#submit").on("click",function(){
 
  sno++;
  var name =$("#form-name").val();
  var age=$("#form-age").val();
  var email = $("#email").val();
  var op="<tr><td>" + sno + "</td><td>"+name+"</td><td>"+age+"</td><td>" + email + "</td><td>"+ "<span><i class='fa fa-pencil'><span></i>" + "</td></tr>";
  
  $("#td").append(op);
  $("input[type='text']").val("");
    $("input[type='number']").val("");
    $("input[type='email']").val("");
    $("input[type='date']").val("");
   
});
var op1 = null;
$("tbody").on("click","span", function(){
    
     op1=$(this).closest('tr');
     var name=$(op1).find('td:eq(1)').text();
     var age=$(op1).find('td:eq(2)').text();
     var email=$(op1).find('td:eq(3)').text();
  
    $("input[type='text']").val(name);
    $("input[type='number']").val(age);
    $("input[type='email']").val(email);
   
 });

$("#clear").click(function(){
  

   var name =$("#form-name").val();
   var age=$("#form-age").val();
   var email = $("#email").val();
  
   $(op1).find('td:eq(1)').text(name);
   $(op1).find('td:eq(2)').text(age);
   $(op1).find('td:eq(3)').text(email);
    
  
  
  
 });
