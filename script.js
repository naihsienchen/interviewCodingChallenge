window.onload = function() {
    var request = new XMLHttpRequest();
    request.open('GET', 'http://sandbox.bittsdevelopment.com/code1/fetchemployees.php', true);

    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
        // Success!
        var data = JSON.parse(this.response);

        //loop through 
        //get the JSON object keys and returns an array
        var keys = Object.keys(data);//Object.keys(data) returns an array
        var keysCount = keys.length;
        console.log(keysCount);
        //console.log(data[1]);//JSON object index starts with 1

        for (i=1; i<=keysCount;i++) {
            //create element containers
            var container = document.createElement('div');
            container.classList.add('container');
            
            var roleStatus = document.createElement('div');
            roleStatus.classList.add('role-status');

            var featured = document.createElement('span');
            //featured.classList.add('featured');

            var renderContainer = document.createElement('div');
            renderContainer.classList.add('render-container');

            var putImg = document.createElement('div');
            putImg.classList.add('img');

            var putName = document.createElement('h2')
            putName.classList.add('name');

            var putBio = document.createElement('p')
            putBio.classList.add('bio');

            //get value from JSON
            var getId = data[i].employeeid;
            var getFeatured = data[i].employeeisfeatured;
            var featuredIcon = '&#128081';
            var getFname = data[i].employeefname + " ";
            var getLname = data[i].employeelname;
            var getImg = document.createElement('img');
            getImg.src = 'http://sandbox.bittsdevelopment.com/code1/employeepics/' + getId +'.jpg';
            var getBio = data[i].employeebio;
            var getRoles = data[i].roles;

            //text nodes
            //var featuredNode = document.createTextNode(featuredIcon);
            var fnameNode = document.createTextNode(getFname);
            var lnameNode = document.createTextNode(getLname);
            var bioNode = document.createTextNode(getBio);

            //featured.innerHTML = featuredIcon;
            roleStatus.appendChild(featured);
            putName.appendChild(fnameNode);
            putName.appendChild(lnameNode);
            putBio.appendChild(bioNode);
            renderContainer.appendChild(getImg);
            renderContainer.appendChild(putName);
            renderContainer.appendChild(putBio);
            container.appendChild(roleStatus);
            //featured
  
            
            if (data[i].employeeisfeatured === "1") {
                //console.log(document.getElementsByTagName('span')[i]);
                document.getElementsByTagName('span')[i-1].classList.add('featured');//i-1 works but not quite sure why
                featured.innerHTML = featuredIcon;
            }    

            //roles
            var rolesCount = data[i].roles.length;
            
            for (j=0; j<rolesCount; j++){
                //creating element
                var putRole = document.createElement('div');

                //getting value
                var getRoles = data[i].roles[j];
                console.log(getRoles);
                var getRoleName = data[i].roles[j].rolename;
                //console.log(getRoleName);
                var getRoleColor = data[i].roles[j].rolecolor;
                console.log(getRoleColor);
                var getRoleid = data[i].roles[j].roleid;
                console.log(getRoleid);

                //add class for css
                putRole.classList.add("role-" + getRoleid);

                var roleNode = document.createTextNode(getRoleName);
                putRole.appendChild(roleNode);
                renderContainer.appendChild(putRole);
            
            }
            container.appendChild(renderContainer);
            document.body.appendChild(container);
        }
    } else {
            // We reached our target server, but it returned an error
            alert('error');
        }
    };
    


    request.onerror = function() {
    // There was a connection error of some sort
    alert("error connecting to database.")
    };

    request.send();
};