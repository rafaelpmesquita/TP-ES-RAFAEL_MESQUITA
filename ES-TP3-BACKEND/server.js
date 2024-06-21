const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package
const app = express();
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const actionRoutes = require('./routes/actionRoutes');
const statsRoutes = require('./routes/statsRoutes');
const { sequelize } = require('./models');

// Define CORS options
const corsOptions = {
    origin: '*', // Substitua pela origem do seu frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};

// Use the CORS middleware with the defined options
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/actions', actionRoutes);
app.use('/api/stats', statsRoutes);

sequelize.authenticate().then(() => {
    console.log('Connection to the database has been established successfully.');
    sequelize.sync().then(() => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
