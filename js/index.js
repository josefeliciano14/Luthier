let tl = gsap.timeline();

//tl.from('#bio-card', {left: 60, opacity: 0, duration: 1});
//tl.from('#bio-text', {opacity: 0, duration: 0.5});
tl.from('#menu', {opacity: 0, duration: 1.5});

function scaleup(target){
    let tl = gsap.timeline();

    tl.to(target, {scale: 1.2, duration: 0.3});
}

function scaledown(target){
    let tl = gsap.timeline();

    tl.to(target, {scale: 1.0, duration: 0.3});
}

document.getElementById("guitarist-item").addEventListener("mouseover", () => scaleup("#guitarist-item"));
document.getElementById("guitarist-item").addEventListener("mouseout", () => scaledown("#guitarist-item"));

document.getElementById("luthier-item").addEventListener("mouseover", () => scaleup("#luthier-item"));
document.getElementById("luthier-item").addEventListener("mouseout", () => scaledown("#luthier-item"));

document.getElementById("contact-item").addEventListener("mouseover", () => scaleup("#contact-item"));
document.getElementById("contact-item").addEventListener("mouseout", () => scaledown("#contact-item"));

document.getElementById("vai-item").addEventListener("mouseover", () => scaleup("#vai-item"));
document.getElementById("vai-item").addEventListener("mouseout", () => scaledown("#vai-item"));

document.getElementById("bio-item").addEventListener("mouseover", () => scaleup("#bio-item"));
document.getElementById("bio-item").addEventListener("mouseout", () => scaledown("#bio-item"));