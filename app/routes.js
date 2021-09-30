const express = require('express')
const router = express.Router()

// this is gray text area, just for reference for self, you can write as much as you want, Run this code when a form is submitted to 'juggling-balls-answer'
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

module.exports = router
