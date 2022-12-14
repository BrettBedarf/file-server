import express from 'express';
require('dotenv').config();
const app = express();

// Middleware to be able to use jsonå
app.use(express.json());

app.get('/', (req, res) => {
	res.send('API is running....');
});

const port = process.env.PORT || 5000;
app.listen(port, () =>
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${port}`
	)
);
