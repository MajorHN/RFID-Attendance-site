fetch("data/account-sample.json")
    .then(response => response.json())
    .then(data => {
        const firstName = data.account.firstName;

        const greetingHeader = document.querySelector(".greetings h1");
        greetingHeader.textContent = `Welcome, ${firstName}!`;

        const greetingParagraph = document.querySelector(".greetings p");
        const today = new Date();
        const formattedDate = today.toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        greetingParagraph.textContent = formattedDate;

    })