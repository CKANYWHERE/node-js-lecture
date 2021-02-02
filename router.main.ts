import { getTestRouter } from './router/test.router';

export const router = (app:any) => {
    app.use('/router/',getTestRouter())
}