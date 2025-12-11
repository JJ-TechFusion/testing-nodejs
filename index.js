import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});


app.get('/about', (req, res) => {
  res.send('About Us');
});

app.get('/contact-us', (req, res) => {
  res.send('Contact Us');
});

app.get('/products', (req, res) => {
  res.send('Products');
});

app.get('/services', (req, res) => {
  res.send('Services');
});

app.get('/blog', (req, res) => {
  res.send('Blog');
});

app.get('/blog/:id', (req, res) => {
  res.send(`Blog ${req.params.id}`);
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});