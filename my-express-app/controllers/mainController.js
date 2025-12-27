// controllers/mainController.js

const home = (req, res) => res.send("Welcome to backend server");
const about = (req, res) => res.send("About page");
const contact = (req, res) => res.send("Contact page");
const getTime = (req, res) => res.json({ time: new Date().toLocaleTimeString() });
const echoData = (req, res) => res.json({ message: "Data received", data: req.body });

module.exports = { home, about, contact, getTime, echoData };
