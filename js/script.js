document.getElementById("label").style.display = "none"
document.getElementById("effect").style.display = "none"
document.getElementById("button").style.display = "none"


function loopimages() {
    for (i = 1; i < 6; i++) {
        let img = document.createElement("img");
        img.setAttribute("src", `images/pic${i}.jpg`);
        img.id = `pic${i}`;
        let bar = document.getElementById("thumb-bar");
        bar.appendChild(img)
    }
}

loopimages()

document.getElementById("thumb-bar").addEventListener("mouseover", new_img, true);

function new_img() {
    document.getElementById("pic1").onmouseover = function() {setimg1()};
    document.getElementById("pic2").onmouseover = function() {setimg2()};
    document.getElementById("pic3").onmouseover = function() {setimg3()};
    document.getElementById("pic4").onmouseover = function() {setimg4()};
    document.getElementById("pic5").onmouseover = function() {setimg5()};
    document.getElementById("label").style.display = "inline";
    document.getElementById("effect").style.display = "inline";
    document.getElementById("button").style.display = "inline"
}

document.getElementById("button").addEventListener("click", blur);

function blur() {
    let input = document.getElementById("effect")
    let imgb = document.getElementById("displayed-img");
    if (input.value === "blur") {
        imgsrc = document.getElementById("displayed-img").src
        if (imgsrc.includes("pic1")){
            imgb.setAttribute("src", "images/pic1B.jpg")
        } else if (imgsrc.includes("pic2")) {
            imgb.setAttribute("src", "images/pic2B.jpg")
        } else if (imgsrc.includes("pic3")) {
            imgb.setAttribute("src", "images/pic3B.jpg")
        } else if (imgsrc.includes("pic4")) {
            imgb.setAttribute("src", "images/pic4B.jpg")
        } else{
            imgb.setAttribute("src", "images/pic5B.jpg")
        }
    }   else{
        alert("unavailable input. Please eneter 'blur'");
    }
    input.value = ""
}

function setimg1() {
    let newimg = document.getElementById("displayed-img");
    newimg.setAttribute("src", `images/pic1.jpg`)
}

function setimg2() {
    let newimg = document.getElementById("displayed-img");
    newimg.setAttribute("src", `images/pic2.jpg`)
}

function setimg3() {
    let newimg = document.getElementById("displayed-img");
    newimg.setAttribute("src", `images/pic3.jpg`)
}

function setimg4() {
    let newimg = document.getElementById("displayed-img");
    newimg.setAttribute("src", `images/pic4.jpg`)
}

function setimg5() {
    let newimg = document.getElementById("displayed-img");
    newimg.setAttribute("src", `images/pic5.jpg`)
}