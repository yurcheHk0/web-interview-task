1. Goal:
========
   Create UI to review details on a DNA match between two users.

   You have a limited time, try to do as much as you can.
   You can use any external module, framework, stack-overflow answer, etc.

   You have an environment that is welcoming and accepts ES6 / TypeScript.
   
   "design_assets" folder have screens to guide you.
   Run "gulp" in the terminal and go to "http://localhost:5000" and start implementing the page.
      

2. Overall:
===========
   a.  Try to fix any bugs you find.
   b.  Try to leave the code better than when you found it.


3. Data:
========
   The API http://localhost:5000/fetch-dna-match will respond with the needed data for the page.
   Implement an asynchronous call to fetch the data and use it in the page.

   The response object contains the following fields:
       {
           your_dna: Object, // Details on this user's DNA
           other_dna: Object // Details on the other user's DNA
       }


4. UI:
======
   a.  Implement two boxes that are always exactly the same height,
       even if the content of one of them is longer.

   b.  The header of the boxes should be clickable and toggle both boxes.

   c.  Fill the two boxes with the two sides of the match:
       1)  Left side:
           Details on this user's DNA, like in the design.
       2)  Right side:
           Details on the other user's DNA, like in the design.
           In this side you need to indicate if the values are equal to the respectful left-side values - by adding '[EQUAL]'.
           For checking if the values are equals, use the designated function in "client/scripts/areValuesEquals.js".


5. Theme:
=========
   The page has 3 buttons to control the theme of the page, for some reason, they don't work.