let ratings = document.querySelectorAll('.rating');
let btn = document.getElementById('send');
let panel = document.querySelector('.panel-container');
let selectedRating = 'Geri bildiriş seçmədiniz!'

ratings.forEach((rating) => {
    rating.addEventListener("click", (e) => {
        if (e.target.parentNode.classList.contains('rating')) {
            removeActive()
            e.target.parentNode.classList.add("active")
            selectedRating = e.target.nextElementSibling.innerHTML
        }

    })
})



function removeActive() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active')
    }
}

btn.addEventListener('click', () => {
    panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <br>
    <strong>Geri Bildiriş üçün Təşəkkürlər</strong>
    <br>
    <strong> Geri Bildirişiniz: ${selectedRating} </strong>
    <p>Geri Bildirişinizə görə Düzəliş Edəcəyik.</p>
    `
})








