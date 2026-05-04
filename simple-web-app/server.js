const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Azure Pipeline Demo</title></head>
      <body style="font-family: Arial; text-align: center; padding: 50px;">
        <h1>✅ CI/CD Pipeline Success!</h1>
        <p>This app was automatically deployed via Azure DevOps Pipelines</p>
        <p>Project 2 - Pruthav Bhatt - Azure Cloud Portfolio</p>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});