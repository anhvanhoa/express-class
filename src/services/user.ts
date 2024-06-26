class UserService {
    readonly user: { id: number; name: string }[];
    constructor() {
        this.user = [
            {
                id: 1,
                name: "John Doe",
            },
            {
                id: 2,
                name: "Jane Doe 2",
            },
        ];
    }
    getUser(id: number) {
        return this.user.find((user) => user.id === id);
    }
    getUsers() {
        return this.user;
    }
}

export default UserService;
