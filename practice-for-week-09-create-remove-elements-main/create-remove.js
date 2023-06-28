/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        // maybe use regex, substring, or split
        const breed = url.split("/")[4];


        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
        // create url similar to 
        // <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg" />
            
        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here
        // use createElement, setAttribute, and appendChild
        const gallery = document.querySelector(".gallery ul");
        gallery.appendChild(newDogCard);

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    const firstDogCard = document.querySelector(".gallery ul li:first-child");

    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
    // need to use the querySelector and remove method
    if (firstDogCard) {
        firstDogCard.remove();
    }

});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    // 
    const lastDogCard = document.querySelector(".gallery ul li:last-child");


    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
    // need to use the query selector and the remove method again
    if (lastDogCard) {
        lastDogCard.remove();
    }
});