const mocha = require('mocha');
const assert = require('assert');
const PersonChar = require('../models/personchar');
const { interfaces } = require('mocha');

describe("mo ta mocha",function(){

// them ban ghi function
    it('them ban ghi vao so du lieu',function(done){
        var character = new PersonChar({
            name:'david'
        });

        character.save().then(function(){
            assert(character.isNew === false);
            done();
        })
    })
    
    

})