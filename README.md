# Family Tree Example using d3-dtree react

Demo is available on [fam-tree](https://fam-tree-bhagat.herokuapp.com/)

### Tech

It uses:

* [ReactJS] - A Javascript Library for building user interfaces
* [d3] - A library for data visualization
* [d3-dtree] - A library for visualizing data trees with multiple parents built on top of D3

### Installation

It requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd famTree
$ yarn install
$ yarn start
```

### Errors that may encounter while starting app
```diff
- TypeError: selection.interrupt is not a function
```

- It is due to multiple version of d3-selection

### Solution
 Due to multiple versions of d3-selection
![d3-selection multiple](images/d3-selection1.png)

Merge all versions of d3-selection
![d3-selection merge](images/soln.png)

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

    [ReactJS]: <https://reactjs.org/>
    [d3]: <https://d3js.org/>
    [d3-dtree]: <https://github.com/ErikGartner/dTree>
   
