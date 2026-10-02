import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin:[
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:3000'
    //add production url
  ],
  credentials:true,
  methods:['GET','POST'],
  allowedHeaders:['Content-Type','Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root Route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Welcome from Hustle with Amit!' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
