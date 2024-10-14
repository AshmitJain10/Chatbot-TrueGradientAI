const mongoose = require("mongoose");
const { Schema } = mongoose;

// interface IResponse extends Document {
//   summary: string;
//   result_text: string;
//   result_table_path?: string;
//   result_visulaization_path?: string;
//   user_id: string;
// }

const responseSchema = new Schema(
  {
    summary: { type: String, required: true },
    result_text: { type: String, required: true },
    result_table_path: { type: String },
    result_visualization_path: { type: String },
    user_id: { type: String, required: true },
  },
  { timestamps: true }
);

const Response = mongoose.model("Response", responseSchema);
module.exports = Response;
