let myObj = {
    Name: "Marcedes",
    Model: "X5",
    Color: "Blue",
    Price: "$50,00,000",

    FullName: function() {
        console.log("Hi i am Marcedes ")
    }
}   
myObj.FullName()

document.write("<div style='text-align: center;'>");

for (let namta = 1; namta <= 10; namta++) {
    document.write("<h3 style='color: blue;'>Namta of " + namta + "</h3>");
    for (let i = 1; i <= 10; i++) {
        document.write("<span style='color: green;'>" + namta + " x " + i + " = " + (namta * i) + "</span><br>");
    }
    document.write("<hr>");
}


