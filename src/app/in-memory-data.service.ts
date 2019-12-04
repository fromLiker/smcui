import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { username: 'David', password: '123456', usertype: 'admin', email: 'david@cn.ibm.com', mobile: '15042420000', confirmed: '1' },
      { username: 'Liker', password: '111111', usertype: 'user', email: 'liker@cn.ibm.com', mobile: '15042429999', confirmed: '1' }
    ];
    return { users };
  }
}
