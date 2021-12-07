document.getElementById('submit').addEventListener("click", addC, false);

function addC(event) {
    event.preventDefault();    
    var cname = document.forms["addF"]["name"].value;
    var cnum = document.forms["addF"]["num"].value;
    var cdesc = document.forms["addF"]["desc"].value;

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", 'add.php', true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200){
            response = JSON.stringify(this.responseText);
            if(response.charAt(0) == 1){
                window.location.href = "index.html";
            }
            else {
                alert(response + "ERROR PLEASE TRY AGIAN!");
            }
        }
    }
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var data = "name=" + cname + "&num=" + cnum + "&desc=" + cdesc;
    xhttp.send(data);
}

