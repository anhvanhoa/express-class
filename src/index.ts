import express, { Router } from "express";
import UserController from "@/controllers/user";
type Route = {
    router: string;
    instance: Router;
};
class App {
    _app = express();
    routes: Route[] = [];
    constructor() {
        this.initRoutes([
            {
                router: UserController.pathRoot,
                instance: UserController.router,
            },
        ]);
    }

    initRoutes(routers: Route[]) {
        this.routes.push(...routers);
        this.routes.forEach((router) => {
            this._app.use(router.router, router.instance);
        });
    }

    static start(port: number) {
        const app = new App();
        app._app.listen(port, () => {
            console.log(`Server is running http://localhost:${port}`);
        });
    }
}

App.start(3000);
