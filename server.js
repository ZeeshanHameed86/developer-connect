const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("API Running");
});
app.use("/api/users", require("./routes/users-route"));
app.use("/api/auth", require("./routes/auth-route"));
app.use("/api/profile", require("./routes/profile-route"));
app.use("/api/posts", require("./routes/posts-route"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
