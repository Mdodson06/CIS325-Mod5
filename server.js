const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

/*when on login page, upon being given a submission, take the username and password 
and compare it to the hardcoded values
If the username and password provided are valid, return with the res json having the value 
success assigned true. If not, success is false.
*/
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Hardcoded user credentials
    const validUsername = 'admin';
    const validPassword = '12345';

    // Validate credentials
    if (username === validUsername && password === validPassword) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  });

  //Default page so user knows that they need to navigate to login.html
  app.get('/', (req, res) => {
    res.send('Navigate to login page');
  });