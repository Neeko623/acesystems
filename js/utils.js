const setDate = () => {
    let currentDate = new Date().getFullYear();
    let date = document.querySelector('.date');

    date.textContent = currentDate
}

console.log(setDate());