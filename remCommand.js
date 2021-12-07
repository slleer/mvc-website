
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
    document.getElementById('submit').addEventListener("click", remove, false);
}

function remove(event){
    event.preventDefault();
    var del = document.getElementById("sel").textContent;
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'remove.php', true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            response = JSON.stringify(this.responseText);
            if(response.charAt(0) == 1){
                window.location.href = "index.html";
            }
            else {
                alert("ERROR PLEASE TRY AGIAN!");
                return false;
                window.location.href = "remove.html";
            }
        }
    }
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var data = "id=" + del;
    xhttp.send(data);



}


