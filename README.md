# todo_api

> A simple RESTful API with JSON Server to manage todo-list


## Features

* Manage todos list with basic functionalities:

  * Create Todo

  * Read Todo/all Todos
  
  * Update Todo
  
  * Delete Todo
 
 
## Getting Started

> This app intended to run on your local machine, but can also be easily altered, with your own setup, for deployment. Feel free to clone this repository if necessary.

### Clone or download this repository

```sh
git clone https://github.com/AvshalomP/todos_api.git
```

### Install dependencies

```sh
npm install
```

### Comments in code

Some comments in the source code are self notes and therefore might not seem necessary from a developer's point of view.


## API Usage

#### INDEX - show all todos in db
```sh
GET <prefix_Url>/api/todos
```

#### CREATE - add new todo to our db
```sh
POST <prefix_Url>/api/todos
```

#### SHOW - show specific todo
```sh
GET <prefix_Url>/api/todos/:todoId
```

#### UPDATE - update specific todo
```sh
PUT <prefix_Url>/api/todos/:todoId
```

#### DESTROY - delete specific todo 
```sh
DELETE <prefix_Url>/api/todos/:todoId
```


## Built with

### Back-end

* [express](https://expressjs.com/)
* [mongoDB](https://www.mongodb.com/)
* [mongoose](http://mongoosejs.com/)


### Platforms

* [Cloud9](https://aws.amazon.com/cloud9/?origin=c9io)
