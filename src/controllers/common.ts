import { Router } from "express";
abstract class ControllerInstance {
    pathRoot: string;
    router: Router;
    constructor({ pathRoot }: { pathRoot: string }) {
        this.router = Router();
        this.pathRoot = pathRoot;
    }
    abstract initRouter(): void;
}

export default ControllerInstance;
