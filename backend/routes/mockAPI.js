const express = require("express");
const router = express.Router();

const mockResponses = {
  "Who is Lionel Messi?": {
    summary:
      "Lionel Messi is a footballer who plays for Argentina and Inter Miami.",
    result_text:
      "He is widely regarded as one of the greatest football players of all time.",
    result_table_path: "",
    result_visualization_path: "",
  },
  "What is AI?": {
    summary: "AI stands for Artificial Intelligence.",
    result_text:
      "AI refers to the simulation of human intelligence in machines.",
    result_table_path: "",
    result_visualization_path: "",
  },
  "What is a chatbot?": {
    summary: "A chatbot is an AI program that simulates human conversation.",
    result_text:
      "Chatbots can be integrated into websites and applications to provide customer service.",
    result_table_path: "",
    result_visualization_path: "",
  },
};

router.post("/query", (req, res) => {
  const query = req.body.query;
  const response = mockResponses[query] || {
    summary: "I don't know the answer to that question.",
    result_text: "Please try asking something else!",
    result_table_path: "",
    result_visualization_path: "",
  };

  res.json(response);
});

module.exports = router;
