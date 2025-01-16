const teamData = [
    {
        name: "Mukesh Kumar Tyagi",
        emailName: "Mukesh",
        role: "CEO & Founder",
        email: "mukesh@nutricrop.co.in",
        image: "https://bacf.org.in/wp-content/uploads/2025/01/IMG_7308.jpg"
    },
    {
        name: "Asha Tyagi",
        emailName: "Asha",
        role: "CTO & Lead Developer",
        email: "asha.tyagi@rhytmelo.com",
        image: "https://bacf.org.in/wp-content/uploads/2025/01/IMG_7309.jpg"
    },
    {
        name: "Ajay Kumar",
        emailName: "Ajay",
        role: "Head of Production",
        email: "ajay@nutricrop.co.in",
        image: "https://media.licdn.com/dms/image/v2/D5622AQES4SteQ6Zv1Q/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1716898956360?e=2147483647&v=beta&t=QoyG4ijlrX_pfx61Ry9hoe3jATdgBefv5gRC0OTjogY"
    },
    {
        name: "Pradeep Chawla",
        emailName: "Pradeep",
        role: "Head of Marketing",
        email: "pradeep@nutricrop.co.in",
        image: "https://media.licdn.com/dms/image/sync/v2/D5627AQGNerkvblcuwQ/articleshare-shrink_800/articleshare-shrink_800/0/1715152252644?e=2147483647&v=beta&t=gZJGLn3a21AddHzR08w3Pc2gI1fag-6hGYOyQPWo1T0"
    },
    {
        name: "Sunidhi Chaudhary",
        emailName: "Sunidhi",
        role: "Products Advisor",
        email: "Sunidhi@nutricrop.co.in",
        image: "https://media.licdn.com/dms/image/v2/C4D22AQFRua8GP0BtjA/feedshare-shrink_800/feedshare-shrink_800/0/1668592472630?e=2147483647&v=beta&t=Ahg6YeXpC2Hr8Hx87hZAhdnZerFaI6HaI4OVUmz8SBY"
    }
];

const teamSection = document.getElementById("teamSection");

teamData.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("rhytmelo_team-card");

    card.innerHTML = `
        <img src="${member.image}" alt="${member.name}">
        <h5>${member.name}</h5>
        <p>${member.role}</p>
        <a href="mailto:${member.email}" class="rhytmelo_icon-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"></path>
            </svg>
            Email ${member.emailName}
        </a>
    `;

    teamSection.appendChild(card);
});
