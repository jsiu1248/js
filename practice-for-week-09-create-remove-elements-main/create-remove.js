/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */

        // get the breed as the fourth element
        const breed = url.split("/")[4];


        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // <img src="https://images.dog.ceo/breeds/hound-afghan/n02088094_1007.jpg" />

        // create newDogCards with the images and captions inside.
        const newDogCard = document.createElement("li");
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        const figcaption = document.createElement("figcaption");

        //it dynamically assigns a new source URL to the img element, allowing you to change the image displayed on the webpage programmatically. 
        img.setAttribute("src", url);
        figcaption.textContent = breed;

        figure.appendChild(img);
        figure.appendChild(figcaption);
        newDogCard.appendChild(figure);

            
        /* Add the new dog card as a child to the ul in the .gallery element */
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
    if (firstDogCard) {
        firstDogCard.remove();
    }

});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    const lastDogCard = document.querySelector(".gallery ul li:last-child");


    /*-------------------- Remove the last dog card ----------------------- */
    if (lastDogCard) {
        lastDogCard.remove();
    }
});