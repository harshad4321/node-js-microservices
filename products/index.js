const express = require('express')
const app = express()

app.use(express.json());

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.json({ message: 'Hello, World! this products' });
});


app.listen(port, () => console.log(`server is running on port http://localhost:${port}`))

