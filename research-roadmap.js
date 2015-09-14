$(document).ready(function(){
	$('#rr-search').click(function() {
		if ($("#rr-search-box").is(":hidden")) {
			$("#rr-search-box").slideDown("slow");
			$(this).addClass('on');
		} else {
			$("#rr-search-box").slideUp("slow");
			$(this).removeClass('on');
		}
	});

	$("#rr-search-field").focus(function(){ 
		if($(this).val() == $(this).attr('defaultValue')){
			$(this).val('');
		}
	});

	$("#rr-search-field").blur(function(){
		if($(this).val() == ''){
			$(this).val($(this).attr('defaultValue'));
		}
	});
});

var previousLink;	

function slide(link){
	if ($(link).next().is(":hidden")) {
		$(link).next().slideDown("slow",function(){
			var uagent = navigator.userAgent.toLowerCase();
			if(uagent.indexOf("ipad") == -1 && uagent.indexOf("iphone") == -1 && uagent.indexOf("ipod") == -1)
				$("html, body").animate({scrollTop: $(link).offset().top}, "slow");
		});
		$(link).next().addClass('a-print');
		$(link).addClass('a-print')
	} else {
	$(link).next().slideUp("slow");
		$(link).next().removeClass('a-print');
		$(link).removeClass('a-print');
	}

	if(previousLink != link){
		$(previousLink).next().slideUp("slow");
		$(previousLink).next().removeClass('a-print');
		$(previousLink).removeClass('a-print');
	}
	previousLink = link;
}

function showResults() {
	$("#status").css("display","block");
	$("#loader").css("visibility","visible");
	
	//get the search string
	var str = document.getElementById("rr-search-field").value;
	if(str == $("#rr-search-field").attr('defaultValue'))
		str = "";

	//get all the filter checkboxes
	var filters = document.getElementById('rr-search-filter').getElementsByTagName('input');

	//initialize filter string
	var filter = "";

	//loop through the filters and generate filter string
	for( var i = 0; i < filters.length; ++i )
	{
		if(filters[i].checked)
		{
			//add filter value to string
			filter += filters[i].value + '!';
		}
	}

	//remove the last !
	filter = filter.substring(0,filter.length-1);

	if (window.XMLHttpRequest)

	{
// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	} else {
// code for IE6, IE5
xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("rr-list").innerHTML= xmlhttp.responseText;
			if((str == "") && (filter == "")) {
				$("#status").css("display","none");
			} else {
				$("#status").css("display","block");
				$("#loader").css("visibility","hidden");
			}
		}
	}
	xmlhttp.open("GET","search.php?searchString="+str+"&filter="+filter,true);
	xmlhttp.send();
}

//resets the search form
function resetSearch(){
	//resets search field to default value
	document.getElementById("rr-search-field").value = $("#rr-search-field").attr('defaultValue');
	var filters = document.getElementById('rr-search-filter').getElementsByTagName('input');

	
	//loop through the filters and uncheck them
	for( var i = 0; i < filters.length; ++i )
	{
		if(filters[i].checked)
		{
			//uncheck filter
			filters[i].checked = false;
		}
	}
	
	//show all the results
	showResults();
}

function printPreview() {
	var visible;
	var svisible;
		if($('#rr-search-box').is(":visible")) {
			$('#rr-search-box').css('display', 'none');
			visible = true;
		};
	
		if($('#status').is(':visible')) {
			$('#status').css('display', 'none');
			svisible = true;
		};	

	window.print();
		if(visible == true) {
			$('#rr-search-box').css('display', 'block');
		};

		if(svisible == true) {
			$('#status').css('display', 'block');
		};
}
