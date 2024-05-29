const express = require('express');
const app = express();
const port = 8080;

//app.use(express.static('public'));
app.get('/', (req, res) => res.send(THIS IS CSC 314 CLOUD COMPUTING DEVOPS; CI-CD PIPELINE CREATED WITH AWS BY MOFUNANYA CHRISTOPHER VUG/CSC/21/5659. THIS PAGE INDICATES SUCCESS. '));



app.listen(port);
console.log(`App running on http://localhost:${port}`);
