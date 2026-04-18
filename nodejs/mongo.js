import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());
// console.log(mongoose);

mongoose
  .connect(
    "mongodb+srv://vikaskumar20012001:Vikas123@dummy.oyfzhlq.mongodb.net/",
  )
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: ["user", "admin"],
});

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.end("hi");
});

app.post("/register", async (req, res) => {
  //   const { email, password } = req.body;
  const email = req.body.email;
  const password = req.body.password;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword });
    await user.save();
    res.end("user registered");
  } catch (err) {
    console.log(err);
    res.end("something went wrong");
  }
});

app.get("/allusers", async (req, res) => {
  try {
    const users = await User.find();
    if (!users) return res.status(404).json({ message: "no users found" });
    res.status(200).json({ users });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "something went wrong" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(404).json({ message: "please create a account first" });

    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched)
      return res.status(401).json({ message: "invalid credentials" });

    const token = jwt.sign({ id: user._id }, "secretkey", { expiresIn: "1h" });
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 3600000,
    });
    res.status(200).json({ message: "login successfull", token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "something went wrong" });
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser)
      return res.status(404).json({ message: "user not found" });
    res.status(200).json({ message: "user deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "something went wrong" });
  }
});

app.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { email, password } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { email, password },
      { new: true },
    );
    if (!updatedUser)
      return res.status(404).json({ message: "user not found" });
    res.status(200).json({ message: "user updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "something went wrong" });
  }
});

app.listen(3000, () => {
  console.log("server started");
});
