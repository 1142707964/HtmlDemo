function $(id)
{
	return document.getElementById(id).value;
}
function divId(div)
{
	return document.getElementById(div);
}
function checkname()
{
	var txtname=$("txtname");	
	var userId=divId("divname");
	userId.innerHTML="";
	if(txtname=="")
	{
		userId.innerHTML="请填写姓名 ∧";
		return false;
	}
	return true;
	
}
function checkphone()
{
	var txtname=$("txtphone");	
	var userId=divId("divphone");
	userId.innerHTML="";
	var reg=/^\d{7}$/;
	if(reg.test(txtname)=="")
	{
		userId.innerHTML="请填写正确的电话号码 ∧";
		return false;
	}
	return true;
	
}
function checkid()
{
	var txtname=$("txtid");	
	var userId=divId("divid");
	userId.innerHTML="";
	id1=/^\d{17}(\d|x)$/;
	if(id1.test(txtname)==false)
	{
		userId.innerHTML="请填写身份证号码(18位数字末端可以字母) ∧";
		return false;
	}
	return true;
	
}
function checkemail()
{
	var txtname=$("txtemail");	
	var userId=divId("divemail");
	userId.innerHTML="";
	var reg=/^\w+@\w+(.[a-zA-Z0-9]{2,3}){1,2}$/
	if(reg.test(txtname)==false)
	{
		userId.innerHTML="请填写邮箱(123456@qq.com) ∧";
		return false;
	}
	return true;
	
}
function checkqq()
{
	var txtname=$("txtqq");	
	var userId=divId("divqq");
	userId.innerHTML="";
	if(txtname=="")
	{
		userId.innerHTML="请填写QQ账号∧";
		return false;
	}
	return true;
	
}
function checkadd()
{
	var txtname=$("txtadd");	
	var userId=divId("divadd");
	userId.innerHTML="";
	if(txtname=="")
	{
		userId.innerHTML="请填写地址信息∧";
		return false;
	}
	return true;
	
}