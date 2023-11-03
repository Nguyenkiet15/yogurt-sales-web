//---------------------SEARCH---------------------
// Reference to DOM
const btnSearch = document.querySelector('#search');
const searchBox = document.querySelector('#searchBox');
const form = document.querySelector('#searchForm');

// Function
const FormValidate = () => {
    if (searchBox.value.trim() === "") { // Use trim() to remove leading and trailing spaces
        form.reset();
        searchBox.focus();
        return false;
    }
    return true;
};

// Event Listeners
searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        btnSearch.click()
    }
});

btnSearch.addEventListener('click', (event) => {
    if (!FormValidate()) {
        event.preventDefault(); 
    } else {
        form.submit();
    }
});

// --------------------ORDER----------------------

//item lists
const itemList = {
    "sp001": {
        "name": "Sữa chua vị kiwi",
        "price": 21000,
        "photo": "images/sanpham/kiwi.jpg"
    },
    "sp002": {
        "name": "Sữa chua vị Xoài",
        "price": 23000,
        "photo": "images/sanpham/mango.jpg"
    },
    "sp003": {
        "name": "Sữa chua vị Dưa lưới",
        "price": 22000,
        "photo": "images/sanpham/cantaloupe.jpg"
    },
    "sp004": {
        "name": "Sữa chua vị Mâm xôi",
        "price": 26000,
        "photo": "images/sanpham/blackberry.jpg"
    },
    "sp005": {
        "name": "Sữa chua vị Dâu tây",
        "price": 29000,
        "photo": "images/sanpham/strawberry.jpg"
    },
    "sp006": {
        "name": "Sữa chua vị Việt Quất",
        "price": 30000,
        "photo": "images/sanpham/blueberry.jpg"
    },
    "sp007": {
        "name": "Sữa chua vị Bưởi",
        "price": 35000,
        "photo": "images/sanpham/grapes.jpg"
    },
    "sp008": {
        "name": " Sữa chua vị Táo Xanh",
        "price": 34000,
        "photo": "images/sanpham/green-apple.jpg"
    },
    "sp009": {
        "name": "Sữa chua vị Dứa",
        "price": 20000,
        "photo": "images/sanpham/pineapple.jgp"
    }
}
//DOM
const btn = document.querySelectorAll("span > button");
const input = document.querySelectorAll("span > input");

//function
const addCart = (index, number) => {
    const code = "sp00"+(index+1);
    if(number === '0') 
        return;
    //add product if it haven't existed
     if(typeof localStorage[code] === 'undefined'){
         window.localStorage.setItem(code, number)
         console.log(localStorage);
         return;
     }
     else{
        // if number of product is less than 100, add new number to current
        if(localStorage.getItem(code) < 100){
            const number = parseInt(input[index].value);
            const current = parseInt(window.localStorage.getItem(code))
            window.localStorage.setItem(code, current + number);
        }

        // if number of product is more than 100, set to 100
        if(localStorage.getItem(code) > 100){
            window.localStorage.setItem(code,100)
        }
        console.log(localStorage);
        return;
    }
}

//EventListener 

for( let i = 0; i < btn.length ; i++){
    input[i].addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            btn[i].click()
        }
    });

    btn[i].addEventListener('click',() => {
        addCart(i,input[i].value);
    })
}
