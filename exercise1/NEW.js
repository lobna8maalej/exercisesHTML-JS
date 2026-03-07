
let page = document.getElementById("page");
let image = document.getElementById("image");
let message = document.getElementById("message");


let theme;
while (true) {
    theme = prompt("Choisir un thème : green, red, blue");
    if (theme === "green" || theme === "red" || theme === "blue") {
        break;
    }
    alert("Invalid input. Please type green, blue, or red");
}


if (theme === "green") {
    page.style.backgroundColor = "lightgreen";   
    page.style.color = "green";                  
    page.style.border = "5px solid darkgreen";   
    image.src = "https://greggvanourek.com/wp-content/uploads/2023/08/Nature-path-by-water-trees-and-mountains-AdobeStock_291242770-scaled.jpeg";
    message.textContent = "green theme applied";
} 
else if (theme === "blue") {
    page.style.backgroundColor = "lightblue";   
    page.style.color = "blue";                  
    page.style.border = "5px solid darkblue";   
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6HWRrkicvnDZ-RupPdWnyW3bMilY1JfDz8Q&s";
    message.textContent = "blue theme applied";
} 
else if (theme === "red") {
    page.style.backgroundColor = "pink";        
    page.style.color = "red";                   
    page.style.border = "5px solid darkred";    
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJrT7MI9fsrc6mWRBJBwhrf4vwTL7S5B8CzQ&s";
    message.textContent = "red theme applied";
}

if (theme === "green") {
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH8_j8hO5ekWfaRjYmYjZZ_qsfRzMRCbjXkw&s";  
} 
else if (theme === "blue") {
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTND3J7QUimP-6IFs4393f0Mvxg1cAE14tRrg&s";  // mets ici l'image que tu veux pour le thème bleu
} 
else if (theme === "red") {
    image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbspCVkfI_IJYPEpTu8Qbb9s-FE5sMbdNDbQ&s"; // mets ici l'image que tu veux pour le thème rouge
}