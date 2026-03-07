
var theme = prompt("choisir un theme: green, red, blue");
var img = document.getElementById(img);
var message = document.getElementById("theme message");

if (theme === "green") {
    style.backgroundColor = "#c8e6c9";
    style.img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb66GL5N3iqA9fKJW4k0ELFuwaBMUp1bGXmg&s";
    message.textContent = "theme vert applique";
}
if (theme === "blue") {
    theme.style.backgroundColor = "blue";
    theme.style.color = darkblue;
    img.src = "https://upload.wikimedia.org/wikipedia/commons/5/5e/Blue_ocean.jpg";
    message.textContent = "theme blue applique";
}
if (theme === "red") {
    theme.style.border = "red";
    img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA2oASENe7GdCli1KnAl6cnDnuD6lGT60txQ&s";
    message.textContent = "theme red applique";
}

while (true) {
    let theme = prompt("Choisir un thème : green, red, blue"); 

    if (theme === "green") {
        style.backgroundColor = "#c8e6c9";
        style.img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb66GL5N3iqA9fKJW4k0ELFuwaBMUp1bGXmg&s";
        message.textContent = "theme vert applique";
    }
    if (theme === "blue") {
        theme.style.backgroundColor = "blue";
        theme.style.color = darkblue;
        img.src = "https://upload.wikimedia.org/wikipedia/commons/5/5e/Blue_ocean.jpg";
        message.textContent = "theme blue applique";
    }
    if (theme === "red") {
        theme.style.border = "red";
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA2oASENe7GdCli1KnAl6cnDnuD6lGT60txQ&s";
        message.textContent = "theme red applique";
    } {
        break; 
    } else {
        alert("Invalid input. Please type green, blue, or red"); 
    }
}

if (theme === "green") {
    theme.border = "green";
    theme.backgroundColor = "darkblue";
    theme.color = "green";
}
if (theme === "blue") {
    theme.border = "blue";
    theme.backgroundColor = "blue";
    theme.color = "blue";
}
if (theme === "red") {
    theme.border = "red";
    theme.border = "yellow";
    theme.backgroundColor = "red";
}
if (theme === "green") {
    message.textContent = "green theme applique";
}
if (theme === "blue") {
    message.textContent = "blue theme applique";
}
if (theme === "red") {
    message.textContent = "red theme applique";
}