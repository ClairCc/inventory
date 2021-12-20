const express = require("express");
const router = express.Router();
const Inventory = require('../models/inventory')

router.get("/", async (req, res) => {
  const tareas = await Inventory.find()
  res.json(tareas)
});

router.get('/:id', async (req, res) => {
  const inventory = await Inventory.findById(req.params.id)
  res.json(inventory)
})

router.post("/", async (req, res) => {
  const { title, description } = req.body
  const inventory = new Inventory({ title, description })
  console.log(inventory)
  await inventory.save()
  res.json({ status: 'Inventario saved' })
})
router.delete('/:id', async (req, res) => {
  await Inventory.findByIdAndRemove(req.params.id)
  res.json({ status: 'Inventario delete' })
})

router.put('/:id', async (req, res) => {
  const { title, description } = req.body
  const newInventory = {
    title, description
  }
  await Inventory.findByIdAndUpdate(req.params.id, newInventory)
  res.json({ status: 'Inventario update' })
})



module.exports = router;
