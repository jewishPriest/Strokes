document.querySelector('a.send').addEventListener('click', function () { // Ask the document to find me an A tag that has the class "send", and have it tell me when it's clicked.
  var mydata = { // This is a folder that stores the data the user put in the form
    date: document.querySelector('#date').value, // Put the value of the element with an ID of "date" into the "date" file.
    comment: document.querySelector('#comment').value,  // Put the value of the element with an ID of "comment" into the "comment" file.
    // ...
  }
  // Do stuff with your data here...
  console.log(mydata) // Just an example.
});
