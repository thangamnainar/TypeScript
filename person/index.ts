let user=[
     {  
        "id":1,
        "name": "John Doe",
        "age": 30,
        "email": "john.doe@example.com",
        "phone": "123-456-7890"
      },
      {
        "id":2,
        "name": "Jane Smith",
        "age": 25,
        "email": "jane.smith@example.com",
        "phone": "987-654-3210"
      },
      {
        "id":3,
        "name": "Michael Johnson",
        "age": 35,
        "email": "michael.johnson@example.com",
        "phone": "555-123-4567"
      },
      {
        "id":4,
        "name": "Emily Davis",
        "age": 28,
        "email": "emily.davis@example.com",
        "phone": "777-888-9999"
      },
      {
        "id":5,
        "name": "Robert Wilson",
        "age": 42,
        "email": "robert.wilson@example.com",
        "phone": "444-555-6666"
      },
      {
        "id":6,
        "name": "Sophia Anderson",
        "age": 31,
        "email": "sophia.anderson@example.com",
        "phone": "222-333-4444"
      },
      {
        "id":7,
        "name": "William Brown",
        "age": 37,
        "email": "william.brown@example.com",
        "phone": "999-888-7777"
      },
      {
        "id":8,
        "name": "Olivia Taylor",
        "age": 29,
        "email": "olivia.taylor@example.com",
        "phone": "666-777-8888"
      },
      {
        "id":9,
        "name": "James Martinez",
        "age": 33,
        "email": "james.martinez@example.com",
        "phone": "111-222-3333"
      },
      {
        "id":10,
        "name": "Ava Garcia",
        "age": 27,
        "email": "ava.garcia@example.com",
        "phone": "333-444-5555"
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

    update(updateId:number,update){
      const userUpdate = this.users.find((a) => a.id === updateId);
      if(userUpdate){
        userUpdate.name=update.name;
        userUpdate.age=update.age;
        userUpdate.email=update.email;
        userUpdate.phone=update.phone;
        console.log(userUpdate);
        
      }

    }
  };
let data=new Data(user);
// data.getAll();
// data.getById(2);
let update={  
    "name": "siva Doe",
    "age": 20,
    "email": "siva.doe@example.com",
    "phone": "123-456-7890"
  };
// data.update(4,update);
// data.getAll();

