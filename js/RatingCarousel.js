document.addEventListener('DOMContentLoaded', () => {

    const Reviews = [
        { name: "Sarah J.", rating: 4.5, desc: "Lorem ipsum dolor sit amet consectetur." },
        { name: "Michael T.", rating: 4.9, desc: "Lorem ipsum dolor sit amet consectetur." },
        { name: "Emily R.", rating: 5, desc: "Lorem ipsum dolor sit amet consectetur." },
        { name: "Bob T.", rating: 5, desc: "Lorem ipsum dolor sit amet consectetur." },
    ]

    function writeReviews() {
        groupamount = 2;
        carouselwrapper.innerHTML = "";
        ShowItems = ""
        for (let index = 0; index <  groupamount; index++) {
            ShowItems += '<div class="group flex flex-row justify-evenly">'
            // <div class="flex flex-col items-center p-8 gap-y-2 carousel-item"> <p>%=${stars}</p> <p class="w-1/2 text-center">${element.desc}</p> <h5 class="w-1/2 text-center text-2xl font-bold">${element.name}</h5> </div>
            Reviews.forEach(element => {
                ShowItems += `<div class="flex flex-col items-center p-8 gap-y-2 carousel-item"> <p>${AmountofStars(element.rating)}</p> <p class="w-1/2 text-center">${element.desc}</p> <h5 class="w-1/2 text-center text-2xl font-bold">${element.name}</h5> </div>`
            });
            ShowItems += `</div>`
        }

        // alert(ShowItems)
        carouselwrapper.innerHTML = ShowItems;
    }

    function AmountofStars(string) {
        let stars = []
        starsamount = string % 5;
        halfstarsamount = string % 1
        let starsreview = ""
        if (starsamount == 0)
            starsamount = 5
        for (let index = 1; index <= starsamount; index++) {
            stars.push('<i class="fa-solid fa-star"></i>')
        }
        if (halfstarsamount >= 0.5 && halfstarsamount < 1) {
            stars.push('<i class="fa-solid fa-star-half-stroke"></i>')
        }
        if (stars.length < 5) {
            let tilcomplete = 5 - stars.length
            for (let index = 0; index < tilcomplete; index++) {
                // const element = array[index];
                stars.push('<i class="fa-regular fa-star"></i>')
            }
        }
        // console.log(halfstarsamount)
        // console.log(stars.toString().replace(/,/g , " "))
        // console.log(stars.replace(',' , ' '))
        return stars.toString().replace(/,/g , " ");
    }
    // AmountofStars(4.9)
    writeReviews()
    // <div class="group flex flex-row justify-evenly"> <div class="flex flex-col items-center p-8 gap-y-2 carousel-item"> <p><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star-half-stroke"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p> <p class="w-1/2 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat porrototam aaspernatur ad, corporis officia.</p> <h5 class="w-1/2 text-center text-2xl font-bold">Name</h5> </div> </div>
});