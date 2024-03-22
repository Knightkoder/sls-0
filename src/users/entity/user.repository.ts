import { injectable } from "inversify";
import { findAllMock } from '../mock/find.all.mock';

@injectable()
export class UserRepository {

    public findAllMock(): typeof findAllMock {
        return findAllMock;
    }

    public findByIdMock(userId: string): typeof findAllMock[0] {
        return findAllMock.find(({ id }) => id === +userId);
    }

    public createMock(user: any): typeof findAllMock[0] {
        const newUser = { ...user, id: findAllMock.length + 1 };
        findAllMock.push(newUser);
        return newUser;
    }

}