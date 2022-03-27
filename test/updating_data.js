const mocha = require('mocha');
const assert = require('assert');
const PersonChar = require('../models/personchar');
const { interfaces } = require('mocha');

describe("tim kiem du lieu",function(){

// them ban ghi function
var character;
beforeEach(function(done){
     character = new PersonChar({
        name: 'long'
    }); 

    character.save().then(function(){
        assert(character.isNew === false);
        done();
    })
});

it('updating record',function(done){
    PersonChar.findOneAndUpdate({name:'long'},{name:'david'}).then(function(){
        PersonChar.findOne({name:'long'}).then(function(result){
            assert(result === null);
            done();
        })
    })
})
})