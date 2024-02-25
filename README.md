# BetNest

![1708867378298](https://github.com/Nworah-Gabriel/BetNest/assets/99169106/b18286ef-e48c-4787-9ac3-8b79338e8540)


## Description
The AirbnB clone is a **web application project** that consists of four(4) different parts:

- A command interpreter to manipulate data without a visual interface, like in a Shell (perfect for development and debugging)
- A website (the front-end) that shows the final product to everybody: static and dynamic
- A database or files that store data (data = objects)
- An API that provides a communication interface between the front-end and your data (retrieve, create, delete, update them)

## The Console
This part of the project is to create a *console (a command interpreter)* that uses
file storage system to manipulate data
The goal of the *console* part fo the project is to:
- create a data model
- manage (create, update, destroy, etc) objects via a console / command interpreter
- store and persist objects to a file (JSON file)

The first piece is to manipulate a powerful storage system. This storage engine will
give us an abstraction between “My object” and “How they are stored and persisted”.
This means: from your *console code (the command interpreter itself)* and from the
*front-end and RestAPI* you will build later, you won’t have to pay attention (take care)
of how your objects are stored.

This abstraction will also allow you to change the type of storage easily without updating all of your codebase.

The *console* will be a tool to validate this storage engine.

![user details](https://github.com/Nworah-Gabriel/BetNest/assets/99169106/c035d988-4dc5-4581-ba15-f3103fde5ed2)


## Execution
The *console(shell)* should work like this in **interactive mode**

![staked bets](https://github.com/Nworah-Gabriel/BetNest/assets/99169106/a5be84e6-dcd3-4d3a-8eb8-9f661bc5ecb8)


```
~$ ./console.py
(hbnb) help

Documented commands (type help <topic>):
========================================
EOF  create  help  quit

Undocumented commands:
======================
all  destroy  show  update

(hbnb) help quit
Quit command to exit the program
(hbnb) quit
~$
```

But also in **non-interactive mode**: (like the Shell project in C)

```
$ echo "help" | ./console.py
(hbnb)

Documented commands (type help <topic>):
========================================
EOF  help  quit
(hbnb) 
$
$ cat test_help
help
$
$ cat test_help | ./console.py
(hbnb)

Documented commands (type help <topic>):
========================================
EOF  help  quit
(hbnb) 
$
```
```
$./console.py
(hbnb) EOF

$
```

- All tests should also pass in non-interactive mode: $ echo "python3 -m unittest discover tests" | bash
