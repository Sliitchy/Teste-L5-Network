const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(`${__dirname}/dist`));
app.all('*', (req,res) => res.status(200).sendFile(`${__dirname}/dist/index.html`));
app.listen(port, () => console.log(`Server has started on port ${port}`));