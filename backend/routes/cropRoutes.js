const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

// GET all crops
router.get("/", async (req, res) => {
  try {
    const crops = await prisma.crop.findMany({
      orderBy: { id: "desc" },
    });

    res.json(crops);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET one crop
router.get("/:id", async (req, res) => {
  try {
    const crop = await prisma.crop.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json(crop);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// CREATE crop
router.post("/", async (req, res) => {
  try {
    const { cropName, season, description } = req.body;

    const crop = await prisma.crop.create({
      data: {
        cropName,
        season,
        description,
      },
    });

    res.json(crop);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE crop
router.put("/:id", async (req, res) => {
  try {
    const { cropName, season, description } = req.body;

    const crop = await prisma.crop.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        cropName,
        season,
        description,
      },
    });

    res.json(crop);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE crop
router.delete("/:id", async (req, res) => {
  try {
    await prisma.crop.delete({
      where: {
        id: Number(req.params.id),
      },
    });

    res.json({
      message: "Crop deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;