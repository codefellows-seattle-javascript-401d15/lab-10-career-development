# Lab 10: Linked List Data Structure

## Description
For this lab we completed a linked list data structure. We added a remove(node) method and implemented reverse() as a method. We wrote three tests for each of these methods.

## Linked List

[val, next]   <= new Node()

(HEAD)[val, next]
The list is empty, so we just point the head at the new node.

(HEAD)[val, next] => [val, next] => [val, next] => [val, next] => [val, next]
More than one node.

* Prepend() adds a new node at the HEAD.
* Append() adds a new node after last node.

## Big-O Runtime
* Access: 0(n)
* Search: 0(n)
* Insertion: 0(1)
* Deletion: 0(1)

* Insert or delete at beginning: O(1)
* Insert or delete at end: O(1) when last element is known, O(n) when last element is unknown.
* Insert or delete in middle is the search of each element plus O(1).

## Version
* 0.1.0

## Installation
Please visit the following pages for how to install your project locally.

* [Cloning A Repository](https://help.github.com/articles/cloning-a-repository/)
* [Fork A Repo](https://help.github.com/articles/fork-a-repo/)
* [Forking](https://guides.github.com/activities/forking/)

### Node
You need to have node.js installed.
* [Download Node](https://nodejs.org/en/)

### NPM Packages
* [NPM Docs](https://docs.npmjs.com)
* [NPM package.json](https://docs.npmjs.com/files/package.json)

### JSON Configuration
Initializing package.json
```
npm init
```

## Application
In [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) (Terminal) enter the command:

```
// node
// > const SLL = require('./list-node.js')
// undefined
// > let sll = new SLL()
// undefined
// > sll
// { head: null }
// > sll.prepend(100)
// { head: { val: 100, next: null } }
// > sll.prepend(200)
// { head: { val: 200, next: { val: 100, next: null } } }
// > sll.prepend(300)
// { head: { val: 300, next: { val: 200, next: [Object] } } }
// >
```

## Tests
In [Bash](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) (Terminal) enter the command:

`npm run test`

## Resources
* [Linked List](https://en.wikipedia.org/wiki/Linked_list)
* [Big O Notation](https://simple.wikipedia.org/wiki/Big_O_notation)

## License
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/mmpadget/lab-10-career-development/blob/lab-10/lab-padget/LICENSE) file for details.

## Acknowledgments
* Code Fellows
* Scott Schmidt, Instructor
* Cayla Zabel, Teaching Assistant
* Devon Hackley, Teaching Assistant
* Thomas Martinez, Teaching Assistant
* JR Iriarte, Teaching Assistant
