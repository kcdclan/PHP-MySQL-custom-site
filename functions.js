function int()
{ 
	//view('debug');
	document.getElementById('loading').className = 'hide';
	document.getElementById('site').className = 'show';
	document.getElementById('scrolling_mod').innerHTML = get_mod();
	view('shownews');
	if(alertmsg)
	{
		alert(alertmsg);
	}
}
function colcheck(to)
{	
while (to.indexOf(':BR:') !=-1){
	to =  to.replace(':r:',"");
	to =  to.replace(':BR:',"<br>");
	to =  to.replace(':br:',"<br>");
	to =  to.replace(':angry:',"<img src='"+em+"angry.gif' />");
	to =  to.replace(':biggrin:',"<img src='"+em+"biggrin.gif' />");
	to =  to.replace(':blink:',"<img src='"+em+"blink.gif' />");
	to =  to.replace(':blush:',"<img src='"+em+"blush.gif' />");
	to =  to.replace(':cool:',"<img src='"+em+"cool.gif' />");
	to =  to.replace(':dry:',"<img src='"+em+"dry.gif' />");
	to =  to.replace(':excl:',"<img src='"+em+"excl.gif' />");
	to =  to.replace(':happy:',"<img src='"+em+"happy.gif' />");
	to =  to.replace(':huh:',"<img src='"+em+"huh.gif' />");
	to =  to.replace(':laugh:',"<img src='"+em+"laugh.gif' />");
	to =  to.replace(':mad:',"<img src='"+em+"mad.gif' />");
	to =  to.replace(':mellow:',"<img src='"+em+"mellow.gif' />");
	to =  to.replace(':ohmy:',"<img src='"+em+"ohmy.gif' />");
	to =  to.replace(':ph34r:',"<img src='"+em+"ph34r.gif' />");
	to =  to.replace(':rolleyes:',"<img src='"+em+"rolleyes.gif' />");
	to =  to.replace(':sleep:',"<img src='"+em+"sleep.gif' />");
	to =  to.replace(':smile:',"<img src='"+em+"smile.gif' />");
	to =  to.replace(':tongue:',"<img src='"+em+"tongue.gif' />");
	to =  to.replace(':unsure:',"<img src='"+em+"unsure.gif' />");
	to =  to.replace(':wacko:',"<img src='"+em+"wacko.gif' />");
	to =  to.replace(':wink:',"<img src='"+em+"wink.gif' />");
	to =  to.replace(':wub:',"<img src='"+em+"wub.gif' />");
}	
	return to;
}
function debugg()
{
	document.getElementById('debug').className = 'show';
}

function debuglog(to)
{
	debg++;
	document.getElementById('debug').innerHTML += debg + ':' + to + '</br>';
}

function imageload()
{scrollTo(document.getElementById('big_pic').scrollHeight,0);}

function view(input)
{
	switch(input)
	{
		case 'shownews':
			document.title = "News - " + sitetitle;	
			shownews();
			break;
		case 'debug':
			document.title = "DBUg - " + sitetitle;	
			debugg();
			break;
		case 'showpic':
			document.title = "Pictures - " + sitetitle;	
			showpic();
			break;
		case 'showmemberships':
			document.title = "Memberships - " + sitetitle;	
			showmemberships();
			break;
		case 'showaboutme':
			document.title = "About Us - " + sitetitle;	
			showaboutme();
			break;
		case 'board':
			document.title = "Board - " + sitetitle;	
			board();
			break;
		case 'showblog':
			document.title = "BLOG - " + sitetitle;	
			showblog();
			break;
		case 'showvlog':
			document.title = "VLOG - " + sitetitle;	
			showvlog();
			break;
		case 'showgoals':
			document.title = "Goals - " + sitetitle;	
			showgoals();
			break;
	}
	lastclick = input;
}
	
function get_mod()
{		
	posts = xmlDoc.getElementsByTagName('post') ;
	output = '';
	for (i=0;i<posts.length;i++)
	{
		if(posts[i].getElementsByTagName('type')[0].childNodes[0].nodeValue == 5)
		{
			output += '   ' + posts[i].getElementsByTagName('message')[0].childNodes[0].nodeValue + '   ';
			i = posts.length;
		}
	}
	return output;
}

function shownews()
{ 

	posts = xmlDoc.getElementsByTagName('post') ;
	output = '';
	for (i=0;i<posts.length;i++)
	{
		id = posts[i].getElementsByTagName('id')[0].childNodes[0].nodeValue;
		date = posts[i].getElementsByTagName('date')[0].childNodes[0].nodeValue;
		title = posts[i].getElementsByTagName('title')[0].childNodes[0].nodeValue;
		message = posts[i].getElementsByTagName('message')[0].childNodes[0].nodeValue;
		user = posts[i].getElementsByTagName('user')[0].childNodes[0].nodeValue;
		type = posts[i].getElementsByTagName('type')[0].childNodes[0].nodeValue
		userid = posts[i].getElementsByTagName('userid')[0].childNodes[0].nodeValue
		if(posts[i].getElementsByTagName('type')[0].childNodes[0].nodeValue == 1)
		
		{
			output += "<table width='90%' border='0' align='center' id='post_"+id+"' class='news_table'>";
			output += "<tr>";
			output += "<td width='19%' class='news_table_date'>"+date+"</td>";
			output += "<td width='81%' class='news_table_title'>"+title+"</td>";
			output += "</tr>";
			output += "<tr>";
			output += "<td class='news_table_imgbox'><img src='"+news_image+"' width='47' height='48' /><br>"+user+"</td>";
			output += "<td class='news_table_body'>"+colcheck(message)+"</td>";
			output += "</tr>";
			output += "</table><br>";
		}
	}
		document.getElementById('main').innerHTML = output;
}

function showpic()
{
	posts = xmlDoc.getElementsByTagName('post') ;
	output = '';
	for (i=0;i<posts.length;i++)
	{
		id = posts[i].getElementsByTagName('id')[0].childNodes[0].nodeValue;
		date = posts[i].getElementsByTagName('date')[0].childNodes[0].nodeValue;
		title = posts[i].getElementsByTagName('title')[0].childNodes[0].nodeValue;
		message = posts[i].getElementsByTagName('message')[0].childNodes[0].nodeValue;
		user = posts[i].getElementsByTagName('user')[0].childNodes[0].nodeValue;
		type = posts[i].getElementsByTagName('type')[0].childNodes[0].nodeValue
		if(posts[i].getElementsByTagName('type')[0].childNodes[0].nodeValue == 11)
		{
			output += "<table width='90%' border='0' align='center' id='post_"+id+"' class='news_table'>";
			output += "<tr>";
			output += "<td width='19%' class='news_table_date'>"+date+"</td>";
			output += "<td width='81%' class='news_table_title'>"+title+"</td>";
			output += "</tr>";
			output += "<tr>";
			output += "<td class='news_table_imgbox'><img src='"+news_image+"' width='47' height='48' /><br>"+user+"</td>";
			output += "<td class='news_table_body'><img id='effect-img' width='50%' height='50%'  src='./img/"+colcheck(message)+"' alt='"+title+"' /></td>";
			output += "</tr>";
			output += "</table><br>";
		}
	}
		document.getElementById('main').innerHTML = output;
}


function showaboutme()
{ 

	posts = xmlDoc.getElementsByTagName('post') ;
	output = '';
	for (i=0;i<posts.length;i++)
	{
		id = posts[i].getElementsByTagName('id')[0].childNodes[0].nodeValue;
		date = posts[i].getElementsByTagName('date')[0].childNodes[0].nodeValue;
		title = posts[i].getElementsByTagName('title')[0].childNodes[0].nodeValue;
		message = posts[i].getElementsByTagName('message')[0].childNodes[0].nodeValue;
		user = posts[i].getElementsByTagName('user')[0].childNodes[0].nodeValue;
		type = posts[i].getElementsByTagName('type')[0].childNodes[0].nodeValue
		userid = posts[i].getElementsByTagName('userid')[0].childNodes[0].nodeValue
		if(posts[i].getElementsByTagName('type')[0].childNodes[0].nodeValue == 7)
		
		{
			output += "<table width='90%' border='0' align='center' id='post_"+id+"' class='news_table'>";
			output += "<tr>";
			output += "<td width='19%' class='news_table_date'>"+date+"</td>";
			output += "<td width='81%' class='news_table_title'>"+title+"</td>";
			output += "</tr>";
			output += "<tr>";
			output += "<td class='news_table_imgbox'><img src='"+news_image+"' width='47' height='48' /><br>"+user+"</td>";
			output += "<td class='news_table_body'>"+colcheck(message)+"</td>";
			output += "</tr>";
			output += "</table><br>";
			i = posts.length;
		}
	}
		document.getElementById('main').innerHTML = output;
}


function showgoals()
{ 

	posts = xmlDoc.getElementsByTagName('post') ;
	output = '';
	for (i=0;i<posts.length;i++)
	{
		id = posts[i].getElementsByTagName('id')[0].childNodes[0].nodeValue;
		date = posts[i].getElementsByTagName('date')[0].childNodes[0].nodeValue;
		title = posts[i].getElementsByTagName('title')[0].childNodes[0].nodeValue;
		message = posts[i].getElementsByTagName('message')[0].childNodes[0].nodeValue;
		user = posts[i].getElementsByTagName('user')[0].childNodes[0].nodeValue;
		type = posts[i].getElementsByTagName('type')[0].childNodes[0].nodeValue
		userid = posts[i].getElementsByTagName('userid')[0].childNodes[0].nodeValue
		if(posts[i].getElementsByTagName('type')[0].childNodes[0].nodeValue == 10)
		
		{
			output += "<table width='90%' border='0' align='center' id='post_"+id+"' class='news_table'>";
			output += "<tr>";
			output += "<td width='19%' class='news_table_date'>"+date+"</td>";
			output += "<td width='81%' class='news_table_title'>"+title+"</td>";
			output += "</tr>";
			output += "<tr>";
			output += "<td class='news_table_imgbox'><img src='"+news_image+"' width='47' height='48' /><br>"+user+"</td>";
			output += "<td class='news_table_body'>"+colcheck(message)+"</td>";
			output += "</tr>";
			output += "</table><br>";
			i = posts.length;
		}
	}
		document.getElementById('main').innerHTML = output;
}

function readdatabase()
{
 file = 'getdb.php?what=posts';
	if(window.ActiveXObject)
	{			
		xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
		xmlDoc.async = 'false';
		xmlDoc.load(file);
	}
	else if(window.XMLHttpRequest)
	{
		xmlDoc = new window.XMLHttpRequest();
		xmlDoc.open('GET',file,false);
		xmlDoc.send('');
		xmlDoc = xmlDoc.responseXML;
	}
	else
	{	alert('Browser Issue');		}	
}

function showblog()
{
	output= '';
		for (i=0;i<posts.length;i++)
	{
		if(posts[i].getElementsByTagName('type')[0].childNodes[0].nodeValue == 2)
		{
			output += '   ' + posts[i].getElementsByTagName('message')[0].childNodes[0].nodeValue + '   ';
			i = posts.length;
		}
	}
	window.location = output;
} 
function showvlog()
{
	output= '';
		for (i=0;i<posts.length;i++)
	{
		if(posts[i].getElementsByTagName('type')[0].childNodes[0].nodeValue == 3)
		{
			output += '   ' + posts[i].getElementsByTagName('message')[0].childNodes[0].nodeValue + '   ';
			i = posts.length;
		}
	}
	window.location = output;
} 
	
function board()
{
	output= '';
		for (i=0;i<posts.length;i++)
	{
		if(posts[i].getElementsByTagName('type')[0].childNodes[0].nodeValue == 8)
		{
			output += '   ' + posts[i].getElementsByTagName('message')[0].childNodes[0].nodeValue + '   ';
			i = posts.length;
		}
	}
	window.location = output;
} 

