// 判断证件号码的格式和长度，底层有，改了一下
		function checknumber(str,len) 
	{
		if (str.value=='')
			return;
		var re=/^[A-Za-z0-9]*$/; 
		if(!re.test(str.value))
		{
			alert("只能输入数字和字母！");
			str.value='';
			str.select();
			str.focus();
			
		}
		if(str.value.length>len){
			alert("您输入的证件号码有误,请输入正确的证件号码!");
			str.value='';
			str.select();
			str.focus();
		}
		
	}
	
// 判断姓名的格式，要全是汉字
	function checkHanZi(str){
		if (str.value=='')
			return;
		var re = /^[\u4e00-\u9fa5]+$/i;
		if(!re.test(str.value))
		{
			alert("请输入中文名字！"); 
			str.value='';
			str.select();
			str.focus();
		}
	}
	
	

	function checkInt(str) 
	{
		if (str.value=='')
			return;
		strValue=str.value;
		var sVal="";
		for (var i=0; i<strValue.length; i++)      
		{      
			if (!IsDigit(strValue.charAt(i)))      
			{      
				alert("此处只能输入数字！(如21)")
				str.value=sVal;
				str.select();
				str.focus();
				return;
			} else{sVal=sVal+strValue.charAt(i);}
		}      
	}