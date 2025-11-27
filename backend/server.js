const express = require('express');
const dotenv = require('dotenv')
dotenv.config();
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const customerRoutes = require('./src/routes/customerRoutes');
const orderRoutes = require('./src/routes/orderRoutes');
const connecttoDb = require('./src/config/db');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/customers", customerRoutes);
app.use("/api/orders", orderRoutes);

app.get('/', (req, res) => {
    res.send('Laundry Management System Server');
});

app.listen(PORT, () => {
    connecttoDb();
    console.log(`Server running on port ${PORT}`);
});