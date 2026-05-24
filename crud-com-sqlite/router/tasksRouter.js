const express = require("express")
const router = express.Router()
const db = require("../db")

//route test
router.get("/", (req, res) => {
    return res.status(200).json({
        message: "Router connected successfully 📍🔥 "
    })
})

module.exports = router