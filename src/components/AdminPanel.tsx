import React from "react";
import { useSelector } from "react-redux";
import { Paper, Typography, Box } from "@mui/material";
import { RootState } from "../redux/store";

const AdminPanel: React.FC = () => {
  const responses = useSelector(
    (state: RootState) => state.responses.responses
  );

  return (
    <Box sx={{ p: 3, display: "flex", justifyContent: "center" }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 800 }}>
        <Typography variant="h4" gutterBottom>
          Saved Responses
        </Typography>
        {responses.length > 0 ? (
          <Box>
            {responses.map((response, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Typography variant="h6">Response {index + 1}</Typography>
                <Typography variant="body1">{response.summary}</Typography>
                <Typography variant="body2">{response.result_text}</Typography>
              </Box>
            ))}
          </Box>
        ) : (
          <Typography variant="body1">No saved responses yet.</Typography>
        )}
      </Paper>
    </Box>
  );
};

export default AdminPanel;
