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

it('find one ban ghi',function(done){
    PersonChar.findOne({name:'long'}).then(function(result){
        assert(result.name === 'long');
        done();
    })
})

it('tim kiem csdl bang id',function(done){
    PersonChar.findOne({_id:character._id}).then(function(dataFind){
        assert(dataFind._id.toString() === character._id.toString());
        done();
    })      
})

})