function showGreeting() {
    var name = document.getElementById("nameInput").value;
    if (name.trim() === "") {
        document.getElementById("greeting").innerHTML = "Please enter your name!";
    } else {
        document.getElementById("greeting").innerHTML = `<b>${name}</b> ke ghar aaye Eid ki khushiyon ki sawari, <b>${name}</b> ki dua ho kabul har dafa sari, <b>${name}</b> ki Eid ho sabse nirali.`

     document.getElementById("me").innerHTML = "Aapko aur Aapki puri family ko <b>Aamer</b> ke pure Family ki Tarf se dil se <b>Eid ul Fitr Mubarak</b> 🎉!";
    }
}
