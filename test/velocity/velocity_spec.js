/**
 * Copyright 2015 IBM Corp.
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

var should = require('should');
var helper = require('../helper.js');
var testNode = require('../../velocity/velocity.js');

describe('velocity node', function() {
  'use strict';

  beforeEach(function(done) {
    helper.startServer(done);
  });

  afterEach(function(done) {
    helper.unload().then(function() {
      helper.stopServer(done);
    });
  });

  it('should be loaded with correct defaults', function(done) {
    var flow = [{ 'id': 'n1', 'type': 'velocity', 'name': 'velocity1', 'wires': [[]] }];
    helper.load(testNode, flow, function() {
      var n1 = helper.getNode('n1');
      n1.should.have.property('name', 'velocity1');
      n1.should.have.property('field', 'payload');
      n1.should.have.property('fieldType', 'msg');
      done();
    });
  });

  it('should render variables in a template', function(done) {
    var vm = 'Hello $payload.name ';
    var flow = [{ 'id': 'n1', 'type': 'velocity', 'template': vm, wires: [['n2']] },
      { id: 'n2', type: 'helper' }];
    helper.load(testNode, flow, function() {
      var n1 = helper.getNode('n1');
      var n2 = helper.getNode('n2');
      n2.on('input', function(msg) {
        msg.should.have.a.property('payload');
        msg.payload.should.equal('Hello World');
        done();
      });
      n1.emit('input', { payload: { name: 'World' } });
    });
  });
});
