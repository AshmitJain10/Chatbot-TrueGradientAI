import React, { useEffect, useState } from "react";
import { ChatbotResponse } from "../redux/responseSlice";
import axios from "axios";
import { Paper, Typography, Box } from "@mui/material";

const HistoryTab = () => {
  const [history, setHistory] = useState<ChatbotResponse[]>([]);
  const userId = "user123";
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const { data } = await axios.get("/api/responses/history/${userId}");
        setHistory(data);
      } catch (error) {
        console.log("Error fetching history: ", error);
      }
    };
    fetchHistory();
  }, [userId]);

  return (
    <Box sx={{ p: 3, display: "flex", justifyContent: "center" }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 800 }}>
        <Typography variant="h4" gutterBottom>
          History Tab
        </Typography>
        {history.length > 0 ? (
          <Box>
            {history.map((response, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Typography variant="h6">Response {index + 1}</Typography>
                <Typography variant="body1">{response.summary}</Typography>
                <Typography variant="body2">{response.result_text}</Typography>
              </Box>
            ))}
          </Box>
        ) : (
          <Typography variant="body1">No saved history.</Typography>
        )}
      </Paper>
    </Box>
  );
};

export default HistoryTab;
