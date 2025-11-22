
function login() {
    const name = document.getElementById('username').value;
    if (!name) {
        alert("กรอกชื่อก่อนน้า");
        return;
    }
    document.getElementById("login-box").style.display = "none";
    document.getElementById("app").style.display = "block";
}

const gacha = [
    { emoji: "💖", msg: "ขอให้วันนี้เป็นวันที่ดีนะ" },
    { emoji: "✨", msg: "เธอเก่งมากเลยนะ ภูมิใจด้วย!" },
    { emoji: "🌈", msg: "ทุกอย่างจะดีขึ้นทีละนิดนะ เชื่อฉันสิ" },
    { emoji: "⭐", msg: "พักบ้างก็ได้นะ เธอเหนื่อยมาเยอะแล้ว" },
    { emoji: "💫", msg: "สู้ๆ นะ ฉันเชียร์เธออยู่เสมอ" }
];

function rollGacha() {
    const r = gacha[Math.floor(Math.random() * gacha.length)];
    document.getElementById("result").innerHTML = r.emoji + " " + r.msg;
}
