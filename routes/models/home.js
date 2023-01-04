const express = require("express")
const router = express.Router()
const users = require("../../user.json")

router.get("/", (req, res) => {
  res.render("index")
})

router.post("/", (req, res) => {
  const InputEmail = req.body.InputEmail
  const InputPassword = req.body.InputPassword
  const index = users.findIndex(user => user.email === InputEmail && user.password === InputPassword)
  
  if (index === -1) {
    res.render("index", {index})
  } else {
    res.render("success", {firstName: users[index].firstName})
  }
})

module.exports = router