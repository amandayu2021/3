const express = require('express')
const router = express.Router()

// this is gray text area, just for reference for self, Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/juggling-balls-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var number = req.session.data['how-many-balls']

  // Check whether the variable matches a condition
  if (number == "3 or more"){
    // Send user to next page
    res.redirect('/juggling-trick')
  } else {
    // Send user to ineligible page
    res.redirect('/ineligible')
  }

})



// thisis for the multi_choice routes use let xxx = something '
router.post('/multi_choice/02_multiplechoices', function (req, res) {

  // Make a variable and give it the value from '02_multiplechoices'
  let numberamanda = req.session.data['id-for-5'];

  // Check whether the variable matches a condition
  if (numberamanda === "1"){
    // Send user to 1
    res.redirect('/multi_choice/1')
  }
    if (numberamanda === "2"){
      // Send user to 2
      res.redirect('/multi_choice/2')
  }
      if (numberamanda === "3"){
        // Send user to 2
        res.redirect('/multi_choice/3')
  }
        if (numberamanda === "4"){
          // Send user to 2
          res.redirect('/multi_choice/4')
  }
          if (numberamanda === "5"){
            // Send user to 2
            res.redirect('/multi_choice/5')
  } else {
    // Send user to ineligible page
    res.redirect('/start')
  }

})

module.exports = router
