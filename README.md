# DreamCarGenerator
This app uses html, css, javascript, express, and Heroku.
Now let's jump into the functionality of my web app

When the button is selected 3 items appear. A quote, an image of a car, and a reset button.
From here the user has two options to move forward.

1. either select the generate dream car button again which will display another quote, vehicle image, and the reset button.
Or 2. The user can select the reset button which will remove the quote, image, and reset button and that will take you back to the start.

I created this simple web app by using 1 event listener method which is invoked when the  Generate Dream Car button is clicked.

Once clicked, I set up a function that takes in an array of images which I added to my javascript file. This function uses the Math operator to select a random image from the array I created, and displays it on the page where I specified using a document.querySelector. I used the setAttribute method on the document.querySelector to set the src = to the image that the Math operator returned. That way every time the ‘generate dream car’ button is clicked a new random image appears.

I set up the random quote similarly to the random image by using the Math.random method and sending the random quote to a document.createElement. 

Once I got the quote, image and reset button to display, I built out the reset function within the generateDreamVehicle function. 

Now this was the hardest part for me to figure out but with a little research and help from peers I was able to find the correct methods to make the quote, image, and reset button to be removed.

At first I used a reload method that simply just reloaded the page after the reset button was clicked 
but I wanted to reset everything without having to reload the page.

To solve this problem I used the onclick property on the reset button. Once the reset button is clicked a few things happens within this function:

The removeChild method is invoked, which removes the reset button
The innerHtml property sets the quote string to an empty string
The setAtrribute method is invoked which sets the src of the image to an empty string
And finally I invoked the clearReset method which resets the values.

Thank you for watching this demo video. Let me know if you have any questions or feedback by leaving a comment below. Thanks Goodbye!
