import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type ChatbotResponse = {
  summary: string;
  result_text: string;
  result_table_path?: string;
  result_visualization_path?: string;
};

type ResponsesState = {
  responses: ChatbotResponse[];
};

const initialState: ResponsesState = {
  responses: [],
};

export const responsesSlice = createSlice({
  name: "responses",
  initialState,
  reducers: {
    saveResponse: (state, action: PayloadAction<ChatbotResponse>) => {
      state.responses.push(action.payload);
    },
  },
});

export const { saveResponse } = responsesSlice.actions;
export default responsesSlice.reducer;
