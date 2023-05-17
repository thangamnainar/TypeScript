export{};

import {Engine} from '../main';

// Use SomeClass here

let user=[
     {  
        "id":1,"name": "John Doe",
        "age": 30,
        "email": "john.doe@example.com",
      },
      {
        "id":2,
        "name": "Jane Smith",
        "age": 25,
        "email": "jane.smith@example.com",
      },
      {
        "id":3,
        "name": "Michael Johnson",
        "age": 35,
        "email": "michael.johnson@example.com",
      },
      {
        "id":4,
        "name": "Emily Davis",
        "age": 28,
        "email": "emily.davis@example.com",
      },
      {
        "id":5,
        "name": "Robert Wilson",
        "age": 42,
        "email": "robert.wilson@example.com",
      },
      {
        "id":6,
        "name": "Sophia Anderson",
        "age": 31,
        "email": "sophia.anderson@example.com",
      },
      {
        "id":7,
        "name": "William Brown",
        "age": 37,
        "email": "william.brown@example.com",
      },
      {
        "id":8,
        "name": "Olivia Taylor",
        "age": 29,
        "email": "olivia.taylor@example.com",
      },
      {
        "id":9,
        "name": "James Martinez",
        "age": 33,
        "email": "james.martinez@example.com",
      },
      {
        "id":10,
        "name": "Ava Garcia",
        "age": 27,
        "email": "ava.garcia@example.com",
      }
    ]

//   console.log(user[0].name);
interface action{
    getAll();
    getById(id: number);
};

class Data implements action{
    users;
  
    constructor(users) {
      this.users = users;
    }
  
    getAll() {
      console.log('All Users', this.users);
    }
  
    getById(id: number) {
      const user = this.users.find((a) => a.id === id);
      if (user) {
        console.log(user);
      } else {
        console.log(`User with id ${id} not found.`);
      };
    };

    update(updateId:number,update:any){
      const userUpdate = this.users.find((a) => a.id === updateId);
      if(userUpdate){
        userUpdate.name=update.name;
        userUpdate.age=update.age;
        userUpdate.email=update.email;
        userUpdate.phone=update.phone;
        console.log(userUpdate);
        
      };
    };

    insertUser(user): void {
        const lastId = this.users.length > 0 ? this.users[this.users.length - 1].id : 0;
        const newId = lastId + 1;
        const newUser = { 
            "id":newId,
            "name":user.name,
            "age":user.age,
            "email":user.email
        };
        // console.log(newUser);
        this.users.push(newUser);
      }
  };
let data=new Data(user);
// data.getAll();
// data.getById(2);
let update={  
    "name": "siva k",
    "age": 20,
    "email": "siva.doe@example.com",
  };
// data.update(4,update);
// data.getAll();
data.insertUser(update);
data.getAll();


