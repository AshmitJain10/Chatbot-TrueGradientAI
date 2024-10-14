import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { saveResponse } from "../redux/responseSlice";
import {
  TextField,
  Button,
  CircularProgress,
  Typography,
  Paper,
  Box,
  Snackbar,
} from "@mui/material";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Chatbot: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/mock/query",
        { query }
      );
      setResponse(data);
    } catch (error) {
      console.log("Error fetching API response:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = () => {
    if (response) {
      dispatch(saveResponse(response));
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{ p: 3, display: "flex", justifyContent: "center" }}>
      <Paper elevation={3} sx={{ p: 4, maxWidth: 600 }}>
        <Typography variant="h4" gutterBottom>
          Chatbot Interface
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Ask a question"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            margin="normal"
            variant="outlined"
          />
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Send"}
            </Button>
          </Box>
        </form>

        {response && (
          <Box sx={{ mt: 3 }}>
            <Typography variant="h5">Response:</Typography>
            <Typography variant="body1">{response.summary}</Typography>
            <Typography variant="body2">{response.result_text}</Typography>

            <Button
              variant="outlined"
              color="secondary"
              sx={{ mt: 2 }}
              onClick={handleSave}
            >
              Save Response
            </Button>
          </Box>
        )}

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Response saved successfully!
          </Alert>
        </Snackbar>
      </Paper>
    </Box>
  );
};

export default Chatbot;
