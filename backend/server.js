const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
const app = express();

connectDB();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/owner', require('./routes/ownerRoutes'));
app.use('/api/user', require('./routes/userRoutes'));
app.use('/api/reservation', require('./routes/reservationRoutes'));
app.use('/api/tables', require('./routes/tableRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
