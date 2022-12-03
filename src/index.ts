import 'dotenv/config';
import app from './app';

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Running server on port: ${port}`));
