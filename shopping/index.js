const express = require('express')
const app = express()

app.use(express.json());

const port = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.json({ message: 'Hello, World! this hopping' });
});


app.listen(port, () => console.log(`server is running on port http://localhost:${port}`))


