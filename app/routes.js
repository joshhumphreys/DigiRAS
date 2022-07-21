const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'excess_question_answer'
router.post('/excess_question_answer', function (req, res) {

  // Make a variable and give it the value from 'excess_question'
  var yesorno = req.session.data['excess_question']

  // Check whether the variable matches a condition
  if (yesorno == "No"){
    // Send user to 'no excess' flow
    res.redirect('interim_claim/no_excess/reference_question')
  } else {
    // Send user to 'yes excess' flow
    res.redirect('interim_claim/yes_excess/excess_schedule')
  }

})

module.exports = router
