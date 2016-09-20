# node-red-contrib-velocity
[![Build Status](https://travis-ci.org/mrinalvirnave/node-red-contrib-velocity.svg?branch=master)](https://travis-ci.org/mrinalvirnave/node-red-contrib-velocity)
[![Coverage Status](https://coveralls.io/repos/github/mrinalvirnave/node-red-contrib-velocity/badge.svg?branch=master)](https://coveralls.io/github/mrinalvirnave/node-red-contrib-velocity?branch=master) 

Node-Red node to render velocity templates. 

_This work is heavily derived from the delivered Node Red Template node and depends on the [node velocity template engine](https://github.com/fool2fish/velocity) by fool2fish_

## Installation

```
npm install --save node-red-contrib-velocity
```

## Documentation

This node takes 3 configuration values

1. Name: Use to give the Node a meaningful name
1. Set Property: Is the property that the output will be assigned to (options are msg._propertyname_, flow._propertyname_, or global._propertyname_
1. Template: is the actual template

If you would like to read more about the velocity template engine, please visit the [user guide](http://velocity.apache.org/engine/1.7/user-guide.html)

## License

   Copyright 2016 Mrinal Virnave

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.