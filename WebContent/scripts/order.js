/**
 * 
 */

function nameCheck(cname){
	
	var nameConfirm = prompt("Confirm Your Name!",cname);
	document.getElementById('cname').value = nameConfirm;
	
}

function summaryDisplay(){
	var summary = "Customer Name : " + document.getElementById('cname').value + "\n";
	var i;
	var x = document.getElementsByName("offer");
	summary += "Offers Opted : ";
	for (i = 0; i < x.length; i++) {
	    if (x[i].type == "checkbox") {
	        if(x[i].checked == true){
	        	summary += (i+1) + ") " + x[i].value + " ";
	        }
	    }
	}
	
	summary += "\n";
	if (document.getElementById('r1').checked) {
		  summary += "Payment Mode : " + document.getElementById('r1').value + "\n";
		}
	else if(document.getElementById('r2').checked) {
		  summary += "Payment Mode : " + document.getElementById('r2').value + "\n";
	}
	else if(document.getElementById('r3').checked) {
		summary += "Payment Mode : " + document.getElementById('r3').value + "\n";
	}
	
	var e = document.getElementById("loc");
	var strUser = e.options[e.selectedIndex].text;
	summary += "Location : " + strUser + "\n";
	confirm(summary);
	
}
