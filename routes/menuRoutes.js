const express = require('express')
router = express.Router();
const MenuItem = require("./../models/menu");
router.post("/", async (req, res) => {
    try {
        const data = req.body;
        const newMenu = new MenuItem(data);
        const response = await newMenu.save();
        console.log("data saved");
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

router.get("/", async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
})

router.get("/:taste", async (req, res) => {
    const taste = req.params.taste;
    try {
        if (taste == "sweet" || taste == "spicy" || taste == "sour") {
            const response = await MenuItem.find({ taste: taste })
            res.send(response)
        } else {
            res.status(404).json({ error: "Invalid taste" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
})


module.exports = router;