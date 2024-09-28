const inputFields = document.querySelectorAll("input");
const unCompleted = document.querySelector(".uncompleted");
const form = document.querySelector(".form");
const button = document.querySelector("button");
const Email_address =document.querySelector('.Email-address');

// console.log(button);

let filledInputFields = false;

inputFields.forEach((input) => {
    // console.log(input.value);

   input.addEventListener("input", () => {
        // console.log(input.id);
        input.classList.add('input-border');
        filledInputFields = [...inputFields].every((input) => {
            //    console.log(input.value);
            return input.value;
        });
        // console.log(filledInputFields);
    });
    input.addEventListener("focus", () => {
        form.classList.remove("uncompleted");
    });
});

button.addEventListener("click", (e) => {
    // console.log("hello");
    form.classList.add('placeholder');

    if (!filledInputFields ) {
        form.classList.add("uncompleted");
    }
    
});
