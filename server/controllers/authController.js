const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { loginValidator, registerValidator } = require("../utils/validations");

exports.register = async (req, res) => {
  try {
    const result = await registerValidator.validateAsync(req.body);
    const { email, password } = result;

    const emailExists = await User.findOne({ email });
    if (emailExists) {
      throw new Error("Email already in use.");
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({ email, password: hashedPassword });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(201).json({ token });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const result = await loginValidator.validateAsync(req.body);
    const { email, password } = result;

    let user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid Email/Password");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid Email/Password");
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"] || "";
  const token = authHeader.replace("Bearer ", "");

  if (!token) {
    return next("Unauthorized");
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken;
  } catch (error) {
    res.status(403).json({ message: "Invalid token" });
  }
};
