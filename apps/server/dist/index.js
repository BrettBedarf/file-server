"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const app = (0, express_1.default)();
// Middleware to be able to use json
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('API is running....');
});
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`));
