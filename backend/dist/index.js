import express from 'express';
const app = express();
const port = process.env.PORT || 3001;
app.use(express.json());
app.get('/', (req, res) => {
    res.json({ message: 'EcoEats Backend API' });
});
app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map