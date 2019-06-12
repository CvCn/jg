<!--
//显示导航
function createPageHTML(_nPageCount, _nCurrIndex, _sPageName, _sPageExt)
{
	var nCurrIndex = _nCurrIndex || 0;
	document.write("当前第" + (nCurrIndex+1) + "页 | 共" + _nPageCount + "页 | ");
	
	if(nCurrIndex == 0)
	{
		document.write("首页 | ");
		document.write("上一页 | ");
		if(_nPageCount > 1)
		{
			document.write("<a href="+_sPageName+"_" + (nCurrIndex+1) + "."+_sPageExt+" target='_parent'>下一页</a>| ");
			document.write("<a href="+_sPageName+"_" + (_nPageCount-1) + "."+_sPageExt+" target='_parent'>尾页</a>");
		}
		else
		{
			document.write("下一页 | ");
			document.write("尾页 ");
		}
	}
	else if(nCurrIndex == _nPageCount-1)
	{
		document.write("<a href="+_sPageName+"."+_sPageExt+" target='_parent'>首页</a> |");
		if(nCurrIndex > 1)
		{
			document.write("<a href="+_sPageName+"_" + (nCurrIndex-1) + "."+_sPageExt+" target='_parent'>上一页</a> | ");
		}
		else
		{
			document.write("<a href="+_sPageName+"."+_sPageExt+" target='_parent'>上一页</a> | ");
		}
		document.write("下一页 | ");
		document.write("尾页 ");
		
	}
	else
	{
		document.write("<a href="+_sPageName+"."+_sPageExt+" target='_parent'>首页</a> | ");
		if(nCurrIndex == 1)
		{
			document.write("<a href="+_sPageName+ "."+_sPageExt+" target='_parent'>上一页</a> | ");
		}
		else
		{
			document.write("<a href="+_sPageName+"_" + (nCurrIndex-1) + "."+_sPageExt+" target='_parent'>上一页</a> | ");
		}
		if(nCurrIndex == _nPageCount-1)
		{
			document.write("<a href="+_sPageName+"_" + (_nPageCount-1) + "."+_sPageExt+" target='_parent'>下一页</a> | ");
		}
		else
		{
			document.write("<a href="+_sPageName+"_" + (nCurrIndex+1) + "."+_sPageExt+" target='_parent'>下一页</a> | ");
		}
		document.write("<a href="+_sPageName+"_" + (_nPageCount-1) + "."+_sPageExt+" target='_parent'>尾页</a>");
	}
	
}

//===============goto()直接跳转函数=============================================
function goto(_nPageCount, _nCurrIndex, _sPageName, _sPageExt)
{
	var page = document.getElementById("CP").value;
	if(isNaN(page))
	{
		alert("请输入正确的页码！");
	}
	else
	{
		var pagenum = parseInt(page, 10);
		if(pagenum < 1 || pagenum > _nPageCount) 
		{
			alert("请输入正确的页码！");
		}
		else
		{
			if(pagenum == 1)
				document.location.href = _sPageName+"."+_sPageExt;
			else
				document.location.href = _sPageName+"_" + (pagenum-1) +"."+_sPageExt;
		}
	}
}

//设置页码
function setPagenum(_nCurrIndex)
{
	var nCurrIndex = _nCurrIndex || 0;
	document.getElementById("CP").value = _nCurrIndex + 1;
}
//-->