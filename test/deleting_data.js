const mocha = require('mocha');
const assert = require('assert');
const PersonChar = require('../models/personchar');

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

it('remove ',function(done){
    PersonChar.findOneAndRemove({name:'long'}).then(function(){
        PersonChar.findOne({name:'long'}).then(function(result){
            assert(result === null);
            done();
        }
        )
    })
})
})