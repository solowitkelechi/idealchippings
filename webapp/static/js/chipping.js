
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    root: null,
    threshold: 0.25,
    rootMargin: "0px 0px -150px 0px"
}

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        if (!entry.isIntersecting){
            return;
        }else{
            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
        }
    })
}, appearOptions)

faders.forEach(fader => {
    observer.observe(fader)
})