import { injectable, inject } from "inversify";
import "reflect-metadata";
import { UserRepository } from "../entity/user.repository";

@injectable()
export class UserService {
    constructor(
        @inject('USER_REPO')
        private readonly userRepository: UserRepository
        ){}

    public findAll(){
        return this.userRepository.findAllMock();
    }
    public findById(id: string){
        return this.userRepository.findByIdMock(id);
    }

    /*
    async createUser(user: User) {
        return await this.userRepository.save(user);
    }

    async getUserById(id: number) {
        return await this.userRepository.findOne(id);
    }

    async getAllUsers() {
        return await this.userRepository.findAll();
    
    }

    getUsers() {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json());
    }*/
}