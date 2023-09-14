const BaseURL = "http://localhost:3004";

const TELEPHONE = document.querySelector(".telephone");

fetch(`${BaseURL}/telephone`)
  .then((response) => response.json())
  .then((response) =>
    response.map((element, index) => {
      console.log(element);
      TELEPHONE.innerHTML += `
        <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
             <div class="telephonE">
              <div class="icons">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-solid fa-scale-unbalanced"></i>
              </div>
              <div class="image">
                <img src="${element.image}" alt="">
              </div>
              <div class="sale">
                <a href="" class="first">TOP SATIŞ</a>
                <a href="" class="second">${
                  element.stok === true ? "Stockda var" : "yoxdur"
                }</a>
              </div>
              <div class="text">
                <p>${element.text}</p>
              </div>
              <div class="stars">
                <i class="fa-solid fa-star" data-value="1" onclick="setRating(${
                  element.id
                }, 1)"></i>
                <i class="fa-solid fa-star" data-value="2" onclick="setRating(${
                  element.id
                }, 2)"></i>
                <i class="fa-solid fa-star" data-value="3" onclick="setRating(${
                  element.id
                }, 3)"></i>
                <i class="fa-solid fa-star" data-value="4" onclick="setRating(${
                  element.id
                }, 4)"></i>
                <i class="fa-solid fa-star" data-value="5" onclick="setRating(${
                  element.id
                }, 5)"></i>
                
              </div>
              <div class=${element.stok === true ? "money" : "not_money"}>
                <span>${
                  element.money
                } <i class="fa-solid fa-manat-sign"></i></span>
              </div>
             
                <button class="btn btn-danger deleteimg">DELETE</button>
              
             </div>
         </div>
        `;
      const deleteTelephone = document.querySelectorAll(".deleteimg");

      for (let index = 0; index < deleteTelephone.length; index++) {
        const deleteBtns = deleteTelephone[index];
        deleteBtns.addEventListener("click", (event) => {
          event.preventDefault();
          const currentElement = response[index];
          fetch(`${BaseURL}/telephone/${currentElement.id}`, {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(),
          });
        });
      }
    })
  );

let popup = document.getElementById("popup");

function OpenForm() {
  popup.classList.add("open-popup");
}
function CloseForm() {
  popup.classList.remove("open-popup");
}

const IMAGE = document.querySelector("#image");
const STOK = document.querySelector("#stok");
const TEXT = document.querySelector("#text");
const MONEY = document.querySelector("#money");

const AddingButton = document.querySelector("#adding");

<<<<<<< HEAD
AddingButton&&
AddingButton.addEventListener("click",(event)=>{
  event.preventDefault();
  if(!IMAGE.value || !STOK.value || !TEXT.value || !MONEY.value){
     return swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please,fill all fields!'
      })
  }
  const TELEPHONE={
    id:self.crypto.randomUUID(),
  image:IMAGE.value,
  stok: Boolean(STOK.value),
  text:TEXT.value,
  money:MONEY.value
 }
 fetch(`${BaseURL}/telephone`,{
    method:"POST",
    headers:{

    },


  AddingButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (!IMAGE.value || !STOK.value || !TEXT.value || !MONEY.value) {
      return swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please,fill all fields!",
      });
    }
    const TELEPHONE = {
      id: self.crypto.randomUUID(),
      image: IMAGE.value,
      stok: Boolean(STOK.value),
      text: TEXT.value,
      money: MONEY.value,
    };
    fetch(`${BaseURL}/telephone`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(TELEPHONE),
    })
      .then((res) => {
        if (res === 201) {
          return swal.fire({
            icon: "success",
            title: "Success",
            text: "User added successfully",
          });
        }
      })
      .catch((error) => {
        throw error;
      });
  })
})

const BLOG = document.querySelector(".blog");

fetch(`${BaseURL}/blog`)
  .then((response) => response.json())
  .then((response) =>
    response.map((element, index) => {
      console.log(element);
      BLOG.innerHTML += `
        <div class="col-xl-4 col-lg-4 col-md-8 col-sm-12">
           <div class="blocks">
            <img src="../src/assets/500x500q100-hype_ru_black_friday_2017_deals.webp" alt="">
           <div class="footer">
            <div class="texts">
                <a href="">#Məsləhətlər</a>
                <span>31.08.2022 10:03:54</span>
               </div>
               <p>Məktəb üçün hansı noutbuku seçmək lazımdır?</p>
           </div>
           </div>
          </div>
        `;
    })
);
  }
