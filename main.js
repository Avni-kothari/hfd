var images = ["https://i.pinimg.com/600x315/22/5c/2e/225c2eb9c4fb005a314254ca67a81c94.jpg","https://github.com/Avni-kothari/photos/blob/main/InShot_20210724_172143580.jpg?raw=true","https://github.com/Avni-kothari/photos/blob/main/1627110343533.jpg?raw=true","https://github.com/Avni-kothari/photos/blob/main/IMG_20210724_144345.jpg?raw=true"];
var reasons = ["Friends", "Besties", "Cute", "Dance"];


var i = 1;

function change() {
    document.getElementById("IMG").src = images[i];
    document.getElementById("para").innerHTML = reasons[i];
    i++;
    if (i == 4) {
        i = 0;
    }
}
