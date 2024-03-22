import "reflect-metadata";
import { UserService } from "src/users/services/user.service";
import { Container } from 'inversify';
import { UserRepository } from "src/users/entity/user.repository";

const container = new Container();

container.bind<UserService>(UserService).to(UserService);
container.bind<UserRepository>('USER_REPO').to(UserRepository);

export default container;

export  { container };