import { Request, Response } from "express";
import UserServices from "@/services/user";
import ControllerInstance from "./common";

class UserController extends ControllerInstance {
    readonly userServices = new UserServices();
    constructor() {
        super({
            pathRoot: "/user",
        });
        this.initRouter();
    }
    initRouter(): void {
        this.router.get("", this.getUser);
        this.router.get("/:id", this.getUserById);
    }
    getUser = (req: Request, res: Response) => {
        res.json(this.userServices.getUsers());
    };
    getUserById = (req: Request, res: Response) => {
        const id = Number(req.params.id);
        const user = this.userServices.getUser(id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    };
}

export default new UserController();
