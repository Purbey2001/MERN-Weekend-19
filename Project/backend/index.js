import app from "./src/app.js";
import mongoDB from "./config/db.config.js";

mongoDB();

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
