const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const connectDb = require("./conn/db");

const authRoutes = require("./routes/authRoute");

dotenv.config();

const app = express();

// app.use(
//   cors({ credentials: true, origin: "https://blogifyblogs.netlify.app/" })
// );

// app.use(
//   cors({
//     credentials: true,
//     origin: ["http://localhost:3000", "https://blogifyblogs.netlify.app"],
//   })
// );

const allowedOrigins = [
  "http://localhost:3000",
  "https://blogifyblogs.netlify.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // Allow requests with no origin (like mobile apps, curl, etc.)
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static(__dirname + "/uploads"));

app.use("/api/auth", authRoutes);

connectDb();

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
