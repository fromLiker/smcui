import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users = [
      { id: 1, username: 'Root', password: '123456', usertype: 'admin', email: 'root@cn.ibm.com', mobile: '15010005159', confirmed: '1' },
      { id: 2, username: 'Liker', password: '111111', usertype: 'user', email: 'liker@cn.ibm.com', mobile: '15010004972', confirmed: '1' }
    ];
    return { users };
  }
}
