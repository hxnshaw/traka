const express = require("express");
const app = express();

const port = 2023;

app.listen(port, () => {
  console.log(`Server is live on port ${port}`);
});
