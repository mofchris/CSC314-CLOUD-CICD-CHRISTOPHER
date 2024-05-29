const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Assuming you have an index.html file in the 'public' directory
});

app.get('/about', (req, res) => {
    res.send('THIS IS CSC 314 CLOUD COMPUTING DEVOPS; CI-CD PIPELINE CREATED WITH AWS. THIS PAGE INDICATES SUCCESS.  MOFUNANYA CHRISTOPHER ----------------- VUG/CSC/21/5659');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
