"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import {Engine} form './main.ts';
var user = [
    {
        "id": 1, "name": "John Doe",
        "age": 30,
        "email": "john.doe@example.com",
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "age": 25,
        "email": "jane.smith@example.com",
    },
    {
        "id": 3,
        "name": "Michael Johnson",
        "age": 35,
        "email": "michael.johnson@example.com",
    },
    {
        "id": 4,
        "name": "Emily Davis",
        "age": 28,
        "email": "emily.davis@example.com",
    },
    {
        "id": 5,
        "name": "Robert Wilson",
        "age": 42,
        "email": "robert.wilson@example.com",
    },
    {
        "id": 6,
        "name": "Sophia Anderson",
        "age": 31,
        "email": "sophia.anderson@example.com",
    },
    {
        "id": 7,
        "name": "William Brown",
        "age": 37,
        "email": "william.brown@example.com",
    },
    {
        "id": 8,
        "name": "Olivia Taylor",
        "age": 29,
        "email": "olivia.taylor@example.com",
    },
    {
        "id": 9,
        "name": "James Martinez",
        "age": 33,
        "email": "james.martinez@example.com",
    },
    {
        "id": 10,
        "name": "Ava Garcia",
        "age": 27,
        "email": "ava.garcia@example.com",
    }
];
;
var Data = /** @class */ (function () {
    function Data(users) {
        this.users = users;
    }
    Data.prototype.getAll = function () {
        console.log('All Users', this.users);
    };
    Data.prototype.getById = function (id) {
        var user = this.users.find(function (a) { return a.id === id; });
        if (user) {
            console.log(user);
        }
        else {
            console.log("User with id ".concat(id, " not found."));
        }
        ;
    };
    ;
    Data.prototype.update = function (updateId, update) {
        var userUpdate = this.users.find(function (a) { return a.id === updateId; });
        if (userUpdate) {
            userUpdate.name = update.name;
            userUpdate.age = update.age;
            userUpdate.email = update.email;
            userUpdate.phone = update.phone;
            console.log(userUpdate);
        }
        ;
    };
    ;
    Data.prototype.insertUser = function (user) {
        var lastId = this.users.length > 0 ? this.users[this.users.length - 1].id : 0;
        var newId = lastId + 1;
        var newUser = {
            "id": newId,
            "name": user.name,
            "age": user.age,
            "email": user.email
        };
        // console.log(newUser);
        this.users.push(newUser);
    };
    return Data;
}());
;
var data = new Data(user);
// data.getAll();
// data.getById(2);
var update = {
    "name": "siva k",
    "age": 20,
    "email": "siva.doe@example.com",
};
// data.update(4,update);
// data.getAll();
data.insertUser(update);
data.getAll();
