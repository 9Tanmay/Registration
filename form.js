<script type="text/javascript">
function required()
{
var empt = document.forms["registration"]["fname"].value;
if (empt == "")
{
alert("Please input a Value");
return false;
}
else 
{
alert('Code has accepted : you can try another');
return true; 
}
}
</script>
function ValidateEmail(mail) 
{
 