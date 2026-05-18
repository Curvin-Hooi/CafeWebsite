const Menuitems = [
    {
        name: "Caramel Macchiato",
        description: "Smooth espresso blended with steamed milk, vanilla syrup, and rich caramel drizzle.",
        price: 4.20,
        image: "images/coffee.jpg",
        categoryID: "1",
        rating: 4.8
    },
    {
        name: "Classic Cappuccino",
        description: "Bold espresso topped with velvety milk foam for a rich and balanced flavor.",
        price: 3.80,
        image: "images/coffee.jpg",
        categoryID: "1",
        rating: 4.7
    },
    {
        name: "Hazelnut Latte",
        description: "Creamy steamed milk with espresso and sweet roasted hazelnut syrup.",
        price: 4.50,
        image: "images/coffee.jpg",
        categoryID: "1",
        rating: 4.9
    },
    {
        name: "Mocha Delight",
        description: "A rich combination of espresso, chocolate, and steamed milk topped with cocoa.",
        price: 4.10,
        image: "images/coffee.jpg",
        categoryID: "1",
        rating: 4.6
    },
    {
        name: "Vanilla Cold Brew",
        description: "Slow-steeped cold brew infused with smooth vanilla cream and ice.",
        price: 4.70,
        image: "images/coffee.jpg",
        categoryID: "2",
        rating: 4.8
    },
    {
        name: "Iced Caramel Latte",
        description: "Refreshing iced latte with creamy caramel sweetness and espresso shots.",
        price: 4.90,
        image: "images/coffee.jpg",
        categoryID: "2",
        rating: 4.7
    },
    {
        name: "Blueberry Muffin",
        description: "Soft baked muffin filled with juicy blueberries and a golden crust.",
        price: 2.90,
        image: "images/coffee.jpg",
        categoryID: "3",
        rating: 4.5
    },
    {
        name: "Chocolate Croissant",
        description: "Flaky buttery croissant with melted dark chocolate filling.",
        price: 3.20,
        image: "images/coffee.jpg",
        categoryID: "3",
        rating: 4.9
    },
    {
        name: "Matcha Latte",
        description: "Premium Japanese matcha whisked with creamy steamed milk.",
        price: 4.60,
        image: "images/coffee.jpg",
        categoryID: "4",
        rating: 4.8
    },
    {
        name: "Espresso Shot",
        description: "Strong and intense single-origin espresso with deep roasted notes.",
        price: 2.20,
        image: "images/coffee.jpg",
        categoryID: "1",
        rating: 4.6
    },
    {
        name: "Espresso Shot",
        description: "Strong and intense single-origin espresso with deep roasted notes.",
        price: 5.20,
        image: "images/coffee.jpg",
        categoryID: "4",
        rating: 3.5
    },
    {
        name: "Shot Espresso",
        description: "Strong and intense single-origin espresso with deep roasted notes.",
        price: 3.10,
        image: "images/coffee.jpg",
        categoryID: "4",
        rating: 4.9
    }
]

function AllMenuItems() {
    menuitemscontained.innerHTML = "";
    ShowItems = ""
    Menuitems.forEach(element => {
        ShowItems += `<div class="card">
                            <div class="">
                                <h4 class=""> ${element.name} </h4>
                            </div>
                            <p class="txt-muted"> ${element.description} </p>
                            <h4 class="">$ ${element.price}0 </h4>
                        </div>`
    });
    menuitemscontained.innerHTML = ShowItems;
    ChangeBtnClass(0)
}
function SortMenuItems(event, index) {

    menuitemscontained.innerHTML = "";
    ShowItems = ""

    Menuitems.forEach(element => {
        if (element.categoryID == event) {
            ShowItems += `<div class="card">
                            <div class="">
                                <h4 class=""> ${element.name} </h4>
                            </div>
                            <p class="txt-muted"> ${element.description} </p>
                            <h4 class="">$ ${element.price}0 </h4>
                        </div>`
        }
    });
    menuitemscontained.innerHTML = ShowItems;
    ChangeBtnClass(index)
}
function GetAllButtons() {
    return document.getElementsByClassName("choice")
}
function ChangeBtnClass(index) {
    const buttons = GetAllButtons()

    for (let index = 0; index < buttons.length; index++) {
        const element = buttons[index];
        element.classList.remove("choiceactive")
    }
    buttons[index].classList.add("choiceactive")
}
window.addEventListener("load", (event) => {
    AllMenuItems()
});