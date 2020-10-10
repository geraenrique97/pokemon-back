import express from 'express';
import cookieParser from 'cookie-parser';
import indexRouter from './routes/index';
import cors from 'cors';
import {httpClientInterceptor} from './utils/httpClient';
import {loggerInterceptor} from './utils/logger';

let app = express();

app.use(cors());
app.use(loggerInterceptor());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(httpClientInterceptor);
app.use('/', indexRouter);

export default app;