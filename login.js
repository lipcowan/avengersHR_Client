async function login() {
    let token; 
    const base = "http://localhost:7000";

    // get login info from inputs
    let loginPackage = {};
    loginPackage.username = document.getElementById("username").value;
    if(loginPackage.username === null) {
        alert("username cannot be null");
        return;
    }
    loginPackage.password = document.getElementById("password").value;
    if(loginPackage.username === null) {
        alert("password cannot be null");
        return;
    }

    // send login request
    const response = await fetch(`${base}/login`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(loginPackage)
    });
    token = await response.text();
    try {
        let parsedToken = parseJwt(token);
        if(parsedToken.isManager) {
            localStorage.setItem("role", "manager");
        }else{
            localStorage.setItem("role", "member");
        }
        localStorage.setItem("token", token);
        window.location.assign("dashboard.html");
    } catch(e) {
        alert("Login Attempt failed, please try again");
        return;
    }
}

function parseJwt(token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

document.addEventListener("keypress", function(e) {
    if(e.key === 'Enter') {
        login();
    }
});