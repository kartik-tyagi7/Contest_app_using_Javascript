let url = "https://kontests.net/api/v1/all"

let response = fetch(url)

response.then((res) => {
    return res.json()
}).then((contests) => {
    console.log(contests)


    var img = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW6OrwUbF1Og8brFhp_cJvX1kOrmMQgJI5fA&usqp=CAU", "https://techsteamcenter.com/wp-content/uploads/2022/01/computer-language.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJo2UIUzQup5w6ok6Gx-JJ0YrYOo934FXzBQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWY7Q6NMhKkBH6YDrW1eS7Ub_xRm30UrH4rw&usqp=CAU"]

    inner_html = ""

    for (item in contests) {
        console.log(contests[item])
        let randomElement = img[Math.floor(Math.random() * img.length)]
        inner_html += `<div class="card" style="width: 22rem; margin: 14px">
                <img src= ${randomElement} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${contests[item].site}</h5>
                    <h5>${contests[item].name}</h5>
                    <p class="card-text">${contests[item].start_time}</p>
                    <p class="card-text">${contests[item].end_time}</p>
                    <p class="card-text">In 24 hours = ${contests[item].in_24_hours}</p>
                    <a href="${contests[item].url}" target = "_blank" class="btn btn-primary">Visit contest</a>
                </div>
            </div>`

        cardContainer.innerHTML = inner_html
    }
})




// const person = {
//     fname: "Kartik",
//     lname: "Tyagi",
//     fullname: function(){
//         return `My name is ${this.fname} ${this.lname}`
//     }
// }

// const getname = person.fullname()
// console.log(getname)

// console.log(person.fullname())