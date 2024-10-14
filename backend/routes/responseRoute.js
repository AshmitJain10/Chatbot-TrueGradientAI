const express = require("express");
const Response = require("../models/responseModel.js");

const router = express.Router();

router.post("/save", async (req, res) => {
  const {
    summary,
    result_text,
    result_table_path,
    result_visualization_path,
    user_id,
  } = req.body;

  try {
    const response = new Response({
      summary,
      result_text,
      result_table_path,
      result_visualization_path,
      user_id,
    });

    await response.save();
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json({ message: "Error saving response", error });
  }
});

router.get("/history/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const responses = await Response.find({ user_id: userId });
    res.status(200).json(responses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching history", error });
  }
});

module.exports = router;
