import { Router } from 'express';

export class APIRouter {
    public apiRouter: Router;

    constructor() {
        this.apiRouter = Router();
    }

    public routes(): Router {
        return this.apiRouter;
    }
}