
function checkPassword() {
  const pass = document.getElementById("password").value;
  if (pass === "All my life") {
    window.location.href = "page1.html";
  } else {
    document.getElementById("error").innerText = "Wrong Password";
  }
}
// قلوب
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (10 + Math.random() * 10) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 500);

// شجر كريسمس
for (let i = 0; i < 12; i++) {
    const tree = document.createElement("div");
    tree.className = "tree";
    tree.innerHTML = "🎄";
    tree.style.left = Math.random() * 100 + "vw";
    tree.style.animationDuration = (4 + Math.random() * 4) + "s";
    document.body.appendChild(tree);
}