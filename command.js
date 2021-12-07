
window.onload = function() {
    var xhttp = new XMLHttpRequest();
    
    console.log("HERE WE now ARE")
    xhttp.onreadystatechange = function() {
	console.log("HERE NOW");
        if(this.readyState == 4 && this.status == 200){
            responseJSON = JSON.parse(this.responseText);
	    console.log("We are in the response function");
	    console.log(responseJSON);
            for(i in responseJSON){
		        console.log(i);
                document.getElementById("courseTable").innerHTML += "<tr><td id=" + i + ">" + responseJSON[i].id + "</td><td>" + responseJSON[i].name + "</td><td>" + responseJSON[i].num + 
                "</td><td>" + responseJSON[i].description + "</td></tr>";
            }
        }
    }
    xhttp.open("POST", 'courses.php', true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var data = "uname=something";
    xhttp.send(data);
    document.getElementById('submit').addEventListener("click", selection, false);
}

function selection(event){
    event.preventDefault();
    var x = document.getElementById("choice").selectedIndex;
    switch(x){
        case 0:
            window.location.href = "add.html";
            break;
        case 1:
            window.location.href = "remove.html";
            break;
    }
}


