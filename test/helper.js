/**
 * Copyright 2014 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

var path = require('path');
if (process.env.NODE_RED_HOME) {
  console.log('HOME', process.env.NODE_RED_HOME);
  var helper = require(path.join(process.env.NODE_RED_HOME, 'test', 'nodes', 'helper.js'));
  module.exports = helper;
} else {
  console.error('ERROR: NODE_RED_HOME environment variable must be set');
  console.log('Ensure that the node-red environment has a test folder (hint: use "git clone", not "npm install" to get node-red) ');
  process.exit(1);
}
