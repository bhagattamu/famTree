TypeError: selection.interrupt is not a function

-> It is due to multiple version of d3-selection

To fix it:

make changes to yarn.lock
-> yarn add d3@v4.x
-> merge versions of d3-selection
-> delete node_modules
-> yarn install