// require("dotenv").config();
// const express = require("express");

// const cors = require("cors");

// const swaggerUi = require("swagger-ui-express");
// let swaggerDocument = require("./swagger/swagger.json");
// const path = require("path");

// const app = express();

// app.use(cors());
// app.use(express.json());

// app.use("/static", express.static(path.join(__dirname, "public")));

// // const PORT = process.env.PORT || 6501;
// const PORT = process.env.PORT;
// const startServer = (port = 3000) => {
//   const server = app.listen(3000, async () => {
//     console.log(`Server running on port ${port}`);
//     swaggerDocument.servers = [
//       {
//         url: `http://localhost:${port}`,
//         description: "Local server",
//       },
//     ];

//     app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//     console.log(
//       `Swagger API docs are available at http://localhost:${port}/api-docs`
//     );
//     // Truncate route : http://localhost:<port>/truncate
//   });

//   server.on("error", (err) => {
//     if (err.code === "EADDRINUSE") {
//       console.log(`Port ${port} is in use, trying port ${+port + 1}...`);
//       startServer(+port + 1);
//     } else {
//       console.error("Server error:", err);
//     }
//   });
// };

// app.use(require("./routes/dev"));
// app.use("/auth", require("./routes/auth"));
// app.use("/tour", require("./routes/tour"));
// app.use("/basket", require("./routes/basket"));
// app.use("/user", require("./routes/user"));
// app.use("/order", require("./routes/order"));

// app.get("/", (req, res) => {
//   res.send("Welcome to the Tour and Travel Agency API!");
// });

// startServer();

// export default app;

const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

export default app;
