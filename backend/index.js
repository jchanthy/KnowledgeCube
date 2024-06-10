import express from 'express';


const app = express();
// Suggested code may be subject to a license. Learn more: ~LicenseLog:4153753550.
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, ()=>{console.log(`server running on port ${port}`)});