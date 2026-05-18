document.addEventListener('DOMContentLoaded', () => {
   
});
function timer() {
    // const value = clockdivcontainer.dataset.value;
    const currentDate = new Date();
    const EventDate = new Date(2026, 4, 26, 10, 0, 0, 0);
    let TimeDistance = EventDate - currentDate
    let daysleft = Math.floor(TimeDistance / 1000 / 60 / 60 / 24);
    let hoursleft = Math.floor(TimeDistance / 1000 / 60 / 60 ) % 24;
    let minsleft = Math.floor(TimeDistance / 1000 / 60 ) % 60;
    let secsleft = Math.floor(TimeDistance / 1000 ) % 60;
    
    // console.log(daysleft +" "+ hoursleft +" "+ minsleft +" "+ secsleft)
    daysdiv.innerHTML = daysleft
    hoursdiv.innerHTML = hoursleft
    mintuessdiv.innerHTML = minsleft
    secondsdiv.innerHTML = secsleft
    // console.log(value)
}
setInterval(timer, 1000)