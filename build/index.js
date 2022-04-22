"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('public'));
const port = 3000;
app.get('/', (req, res) => {
    res.send('Backend de whatsapp  en Typescript');
});
app.listen(port, () => {
    console.log(`Servidor levantado en el puerto ${port}`);
});
