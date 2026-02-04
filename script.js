const message = document.getElementById("message");

function goodMorning() {
    const messages = [
        "Good morning love ☀️ I hope today treats you kindly 💕",
        "Wake up handsome 😌 I’m so proud of you",
        "Good morning my favorite person 🤍 Eat well today, okay?"
    ];
    message.innerText = random(messages);
}

function randomCompliment() {
    const compliments = [
        "You’re my safest place 🫶",
        "I love the way your mind works",
        "You make my bad days better just by existing",
        "I’m so lucky to have you 💖"
    ];
    message.innerText = random(compliments);
}

function mood(type) {
    const responses = {
        miss: [
            "I miss you too 🥺 Come here, I need a hug",
            "Distance is annoying but you’re worth it 💕"
        ],
        stress: [
            "Hey… breathe 🤍 I’m right here",
            "You’re doing your best and that’s enough 🫂"
        ],
        happy: [
            "YAY 😄 Tell me everything!",
            "Your happiness makes me happy too 💖"
        ]
    };
    message.innerText = random(responses[type]);
}

function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

