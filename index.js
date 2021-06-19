const express = require('express');
const app = express();
const PORT = 8080;

app.use( express.json() );

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'shirt',
        size: 'large'
    })
});

app.post('/tshirt/:id', (req, res) => {

    const { id } = req.params;
    const {logo } = req.body;

    if (!logo) {
        req.status(418).send({ message: 'we need a logo!'})
    }

    res.send({
        tshirt: 'tshirt logo: ${logo} and id: ${id}',
    });
});

app.listen(
    PORT,
    () => console.log(`Listening on port: ${PORT}`)
);

