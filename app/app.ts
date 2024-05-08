import express from 'express';
import * as path from 'path';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors())

app.use('/', (req, res) => {
	return res.json('HELLO Welcome from nodejs')
})


export default app;