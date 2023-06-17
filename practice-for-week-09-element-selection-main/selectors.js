const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Accessing elements by class name
    var seedElements = document.getElementsByClassName('seed'); // Returns a HTMLCollection of elements with class 'seed'

    // Log seeded fruit elements to console
    console.log(seedElements);
    
    // 2. Get all seedless fruit elements
        // Accessing elements by class name
        var seedlessElements = document.getElementsByClassName('seedless'); // Returns a HTMLCollection of elements with class 'seed'

        // Log seeded fruit elements to console
        console.log(seedlessElements);
    

    // 3. Get first seedless fruit element
    // Getting the second seedless fruit element
    var firstSeedlessElement = seedlessElements[0]; // Index 0 corresponds to the first element in the NodeList

    // Log the second seedless fruit element to console
    console.log(firstSeedlessElement);

    /* Section 2 */
    // 4. Get inner span with text "you"
    //selects the span element that is a descendant of an element with the id "wrapper"
    var innerSpan = document.querySelector('#wrapper span');
    console.log(innerSpan);


    // 5. Get all children of element "wrapper"
    var childWrapper = document.querySelectorAll('#wrapper');
    console.log(childWrapper[0].children);


    // 6. Get all odd number list items in the list
    // Accessing the ordered list element
    var orderedList = document.querySelector('ol');

    // Accessing all list items within the ordered list
    var listItems = orderedList.querySelectorAll('li');

    // Filtering odd-numbered list items
    var oddNumberListItems = Array.from(listItems).filter(function(item, index) {
    return index % 2 === 1; // Keep the items with odd indices
    });

    // Log the odd-numbered list items to the console
    console.log(oddNumberListItems);

    // 7. Get all even number list items in the list
    // Filtering even-numbered list items
    var evenNumberListItems = Array.from(listItems).filter(function(item, index) {
    return index % 2 === 0; // Keep the items with even indices
    });

    // Log the even-numbered list items to the console
    console.log(evenNumberListItems);

    /* Section 3 */
    // 8. Get all tech companies without a class name
    var techCompanies = document.querySelectorAll('.section a:not([class])');
    console.log(techCompanies);


    // 9. Get "Amazon" list element
    var amazonListItem = document.querySelector('li:contains("Amazon")');
    console.log(amazonListItem);

    // 10. Get all unicorn list elements (not the image element)
    var unicornListItems = document.querySelectorAll('li.unicorn:not(:has(img))');
    console.log(unicornListItem);
}

window.onload = select;