fetch("data/account-sample.json")
    .then(response => response.json())
    .then(data => {
        const username = data.account.username;
        
        const headerUsername = document.querySelector(".username");
        headerUsername.textContent = username;
    });