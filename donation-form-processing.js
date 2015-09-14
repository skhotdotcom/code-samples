//declare variables and set to null
var params = "";
	amount = null;
	fn = null;
	ln = null;
	a1 = null;
	a2 = "";
	city = null;
	state = null;
	zip = null;
	email = null;
	p1 = null;
	p2 = null;
	p3 = null;
	o = null;
	t = null;
	event = null;
	phone = null;
	data = null;
	l = null;
	y = null;
	eu = null;
	

//apply rules to field
function rules(field) {
var a = field;
var b = field.value;

//check the amount fields for rules
	if ( a.name == "amount" ) {						
		if ( b == "other" ) {
			document.getElementById("amount-other").setAttribute("class", "field ");
			document.getElementById("amount-div").setAttribute("class", "row help");
			document.getElementById("amount-error").setAttribute("class", "field error");
			
amount = "other";				
		} else {
			document.getElementById("amount-other").setAttribute("class", "off field");
			document.getElementById("amount-div").setAttribute("class", "row success");
			document.getElementById("amount-error").setAttribute("class", "field off error");
				
			amount = b;				
		};

		if ( b == "s" ) {
			document.getElementById("amount-div").setAttribute("class", "row alert");
			document.getElementById("amount-error").setAttribute("class", "field error");
				
			amount = "s";				
		};
	};
	
	if (a.name == "amount_dollars" || a.name == "amount_cents") {
			
		var b = document.getElementById("amount-dollars").value;
		var c = "." + document.getElementById("amount-cents").value;
						
		if (b != null
			&& c != null
			&& b != ""
			&& c != ""
			&& isNaN(b) == false
			&& isNaN(c) == false
			&& (b + c) <= 500
			&& (b + c) >= 5) {
			
		
			document.getElementById("amount-div").setAttribute("class", "row success");
			document.getElementById("amount-error").setAttribute("class", "field off error");

			amount = b;				
				
		} else {
			document.getElementById("amount-div").setAttribute("class", "row help");
			document.getElementById("amount-error").setAttribute("class", "field error");			
			amount = "other";
		};
	};

	//check the name fields for rules	
	if (a.name == "first_name" || a.name == "last_name" ) {
		var b = document.getElementById("first_name").value;
		var c = document.getElementById("last_name").value;				
		if (b != null
			&& c != null
			&& b != ""
			&& c != ""
			&& isNaN(b) == true
			&& isNaN(c) == true
			&& b.length >= 2
			&& c.length >= 2) {
	
			document.getElementById("name").setAttribute("class", "row success");
			document.getElementById("name-error").setAttribute("class", "field off error");
				
			fn = b;
			ln = c;
		} else {
			
			document.getElementById("name").setAttribute("class", "row help");
			document.getElementById("name-error").setAttribute("class", "field error");

			fn = "";
			ln = "";
		}
	}
	
	//check the address fields for rules	
	if (a.name == "address1" || a.name == "address2" || a.name == "city" || a.name == "state" || a.name == "zip" ) {
		b = document.getElementById("address1").value
		c = document.getElementById("address2").value
		d = document.getElementById("city").value
		e = document.getElementById("state").value
		f = document.getElementById("zip").value

		if (b != null
			&& d != null
			&& e != null
			&& f != null
			&& b != ""
			&& d != ""
			&& e != ""
			&& f != ""
			&& isNaN(b) == true
			&& isNaN(d) == true
			&& isNaN(e) == true
			&& isNaN(f) == false
			&& f.length == 5
			&& b.length >= 4
			&& d.length >= 3) {
	
			document.getElementById("address").setAttribute("class", "row success");
			document.getElementById("address-error").setAttribute("class", "field off error");
			
			if (a.name == "address1") {a1 = b;}
if (a.name == "address2") {a2 = c;}
if (a.name == "city") {city = d;}
if (a.name == "state") {state = e;}
if (a.name == "zip") {zip = f;}
				
		} else {
			document.getElementById("address-error").setAttribute("class", "field error");
			document.getElementById("address").setAttribute("class", "row help");
			
			a1 = "";
			a2 = "";
			city = "";
			state = "";
			zip = "";
		}
	}
	
	//check the contact section for rules
	if (a.name == "login_email" || a.name == "phoneAreaCode" || a.name == "phonePrefix" || a.name == "phoneExt") {
	
		b = document.getElementById("email").value
		c = document.getElementById("phone-area-code").value
		d = document.getElementById("phone-prefix").value
		e = document.getElementById("phone-ext").value
		f = c + d + e
		reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
	
		if (b != null
			&& reg.test(b) == true
			&& c != null
			&& d != null
			&& e != null
			&& f != ""
			&& isNaN(b) == true
			&& isNaN(f) == false
			&& f.length == 10) {
	
			document.getElementById("contact").setAttribute("class", "row success");
			document.getElementById("contact-error").setAttribute("class", "field off error");
				
			if (a.name == "login_email") {
					email = b;
				} else if (a.name == "phoneAreaCode") {
					p1 = c;
				} else if (a.name == "phonePrefix") {
					p2 = d;
				} else if (a.name == "phoneExt") {
					p3 = e;
				}
		} else {
			
			document.getElementById("contact").setAttribute("class", "row help");
			document.getElementById("contact-error").setAttribute("class", "field error");
			
			email = "";
			p1 = "";
			p2 = "";
			p3 = "";
		}
	}
	
	//check the occupation field for rules
	if (a.name == "occupation") {			
		if (b != null
			&& b != ""
			&& isNaN(b) == true
			&& b.length >= 2) {
	
			document.getElementById("occupation-div").setAttribute("class", "row success");
			document.getElementById("occupation-error").setAttribute("class", "field off error");
				
			o = b;

		} else {
			
			document.getElementById("occupation-div").setAttribute("class", "row help");
			document.getElementById("occupation-error").setAttribute("class", "field error");
				
			o = "";
			
		};
	};
};

//recursive input function for individual fields
function handleInput(field) {

	rules(field);
};
	
//check the entire form for rules
function checkAllFields () {


	//check if amount is preset or “other”
	if(document.getElementById('amount-field').value == "other") {
		
		rules(document.getElementById('amount-dollars'));
		rules(document.getElementById('amount-cents')); 
		
			
	} else {
			
		rules(document.getElementById('amount-field'));
		

	}
	
		
	rules(document.getElementById('first_name'));
	rules(document.getElementById('last_name'));
	rules(document.getElementById('address1'));
	rules(document.getElementById('city'));
	rules(document.getElementById('state'));
	rules(document.getElementById('zip'));
	rules(document.getElementById('email'));
	rules(document.getElementById('phone-area-code'));
	rules(document.getElementById('phone-prefix'));
	rules(document.getElementById('phone-ext'));
	rules(document.getElementById('occupation'));
	
	//check checkbox fields
	if (document.getElementById('door_to_door').checked == true) {
		t = "yes";
	} else {
		t = "no";
	}
		
	if (document.getElementById('host_event').checked == true) {
		event = "yes";
	} else {
		event = "no";
	}
	
if (document.getElementById('phone_bank').checked == true) {
		phone = "yes";
	} else {
		phone = "no";
	}		
	
if (document.getElementById('clerical').checked == true) {
		data = "yes";
	} else {
		data = "no";
	}		
		
if (document.getElementById('letter_to_editor').checked == true) {
		l = "yes";
	} else {
		l = "no";
	}		
	
if (document.getElementById('yard_sign').checked == true) {
		y = "yes";
	} else {
		y = "no";
	}
	
if (document.getElementById('email_updates').checked == true) {
		eu = "yes";
	} else {
		eu = "no";
	}
}


//Submit the form
function submitForm() {

	//check all the fields in the form for rules
	checkAllFields();
	
	//check to make sure all required fields are no longer null
if (amount != null
		&& amount != "s"
		&& amount != "other"
		&& fn != null && fn != ""
		&& ln != null && ln != ""
		&& a1 != null && a1 != ""
		&& city != null && city != ""
		&& state != null && state != ""
		&& zip != null && zip != ""
		&& email != null && email != ""
		&& p1 != null && p1 != ""
		&& p2 != null && p2 != ""
		&& p3 != null && p3 != ""
		&& o != null && o != "") {
			
		//parse paramaters
		params += "amount=" + amount + "&first_name=" + fn + "&last_name=" + ln + "&address1=" + a1 + "&address2=" + a2 + "&city=" + city + "&state=" + state + "&zip=" + zip + "&login_email=" + email + "&phoneAreaCode=" + p1 + "&phonePrefix=" + p2 + "&phoneExt=" + p3 + "&occupation=" + o + "&door_to_door=" + t + "&host_event=" + event + "&phone_bank=" + phone + "&clerical=" + data + "&letter_to_editor=" + l + "&yard_sign=" + y + "&email_updates=" + eu;
	
		//begin ajax processing
if (window.XMLHttpRequest){
// code for IE7+, Firefox, Chrome, Opera, Safari
			contentAjaxRequest=new XMLHttpRequest();
		} else {
// code for IE6, IE5
			contentAjaxRequest=new ActiveXObject("Microsoft.XMLHTTP");
		}
			
		contentAjaxRequest.open("POST", "/donate/process.php", true);
		contentAjaxRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		contentAjaxRequest.setRequestHeader("Connection", "close");
		contentAjaxRequest.send(params);
				
		contentAjaxRequest.onreadystatechange=function(){
			if (contentAjaxRequest.readyState==4 && contentAjaxRequest.status==200){
				document.getElementById('content').innerHTML =  contentAjaxRequest.responseText
				document.getElementById('frm').submit();
						
			}
}
	}
}

Filtered Columns (jQuery)
This file arranges html list items in two columns creating an active tab and hiding inactive tabs. Used in research.ifas.ufl.edu.

(function ($) {

	$(document).ready(function() {

//start logic and functions

		//add class to li's
		$('#filter-column.panel-2col .panel-col-first li').each(function() {
		
			var c = $(this).text();
			c = c.replace(/^\s+|\s+$/g,"");
			c = c.replace(/^\s+/,"");
			c = c.replace(/\s+$/,"");
			c = c.replace(/\s+/g, '-');
			c = c.replace(/[^a-zA-Z 0-9-]+/g,'');
			c = c.toLowerCase();
		
			$(this).addClass(c);
		
		});
		
		//handles hashed urls from within content
		$('.fc-link').click(function() {
		
			var m = this.hash;
			m = m.replace(/#/i, '');
			$('#filter-column.panel-2col .panel-col-first li.'+ m).click();
$('html, body').animate({scrollTop:0}, 'slow');
    			return false;
		
		});

		// gets the hash
		var h = window.location.hash;
		
		// convert it to matching class format
		h = h.replace(/\s+/g, '-').replace(/[^a-zA-Z 0-9-]+/g,'').toLowerCase();
		
		if(h == '') {
		
			// sets the default li's to active
			$('#filter-column.panel-2col .panel-col-first li.views-row-1').addClass('active');
			$('#filter-column.panel-2col .panel-col-last li.views-row-1').addClass('active');
			
			//set the default hash tag
			var s = $('#filter-column.panel-2col .panel-col-first li.views-row-1').text();
			s = s.replace(/^\s+|\s+$/g,"");
			s = s.replace(/^\s+/,"");
			s = s.replace(/\s+$/,"");
			s = s.replace(/\s+/g, '-');
			s = s.replace(/[^a-zA-Z 0-9-]+/g,'');
			s = s.toLowerCase();

			window.location.hash = s;
			
		} else {
		
			//set the matching class active
			$('.' + h).addClass('active');
			
			//get the index of the active class
			var m = $('#filter-column.panel-2col .panel-col-first li').index($('.' + h));
			m = m + 1;
			
			//set the respective li to active
			$('#filter-column.panel-2col .panel-col-last li.views-row-' + m).addClass('active');
		
		}
		


		//changes the active content based on what is clicked
		$("#filter-column.panel-2col .panel-col-first li").click(function() {
					
			// gets the class that matches this element
			var i = $(this).attr('class').match(/views-row\-.+?\b/);			
			var z = $(this).text();
			z = z.replace(/^\s+|\s+$/g,"");
			z = z.replace(/^\s+/,"");
			z = z.replace(/\s+$/,"");
			z = z.replace(/\s+/g, '-');
			z = z.replace(/[^a-zA-Z 0-9-]+/g,'');
			z = z.toLowerCase();
						
			window.location.hash = z;

$('#filter-column.panel-2col li').removeClass('active');
			$('#filter-column.panel-2col .panel-col-first li.' + i).addClass('active');
			$('#filter-column.panel-2col .panel-col-last li.' + i).addClass('active');
		
		});
		
//end logic and functions

	});

})(jQuery);
