const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'app.js'));
});

app.get('/about', (req, res) => {
    res.send('THIS IS CSC 314 CLOUD COMPUTING DEVOPS; CI-CD PIPELINE CREATED WITH AWS BY MOFUNANYA CHRISTOPHER VUG/CSC/21/5659. THIS PAGE INDICATES SUCCESS. '));
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});












