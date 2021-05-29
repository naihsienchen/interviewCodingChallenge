window.onload = function() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://sandbox.bittsdevelopment.com/code1/fetchemployees.php', true);

    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
        // Success!
        var data = JSON.parse(this.response);
        } else {
            // We reached our target server, but it returned an error
            alert('error');
        }
        //get html container
        var container =  document.getElementsByClassName('container')[0];
        var putName = document.getElementsByClassName('name')[0];
        var putBio = document.getElementsByClassName('bio')[0];
        var putRoles = document.getElementsByClassName('role')[0];
        var putImg = document.getElementsByClassName('img')[0];
        
        //get essential json key/value from data JSON object
        var getId = data[2].employeeid;
        var getImg = data[2].employeefname;
        var getFname = data[2].employeefname;
        var getLname = data[2].employeelname;
        var getBio = data[2].employeebio;
        var getRoles = data[2].roles;
        console.log(getRoles.length);
        console.log(getRoles[0]);
        console.log(getRoles[1]);
        //appending img src
        //https://stackoverflow.com/questions/17634019/javascript-load-an-image-from-url-and-display
        
            //var val = document.getElementById('imagename').value,//get the current id
            var src = 'http://sandbox.bittsdevelopment.com/code1/employeepics/' + getId +'.jpg',
            img = document.createElement('img');
            img.src = src;
            putImg.appendChild(img);
            

        putName.innerHTML = getFname;
        putBio.innerHTML = getBio;
        putRoles.innerHTML = getRoles;

        
    };

    request.onerror = function() {
    // There was a connection error of some sort
    alert("error connecting to database.")
    };

    request.send();
};