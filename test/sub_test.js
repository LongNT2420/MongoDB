const mongoose = require('mongoose');
const Author = require("../models/author");
const assert = require('assert');

describe('Tim hieu ve record sub',function(){

    beforeEach(function(done){
        mongoose.connection.collections.authors.drop(function(){
            done();
        })
    })

    it('Tao ra tac gia voi quyen sach',function(done){
        var author = new Author({
            name: 'Alex',
            books:[{title:'Hello World',numberOfPage:50}]
        })

        author.save().then(function(){
            Author.findOne({name:'Alex'}).then(function(record){
                assert(record.books.length === 1);
                done();
            })
        })
    })

    afterEach('Them 1 quyen sach vao',function(done){
        Author.findOne({name:'Alex'}).then(function(record){

            record.books.push({title:'Tuoi tre dang gia bao nhieu',numberOfPage:100});

            record.save().then(function(){
                Author.findOne({name:'Alex'}).then(function(result){
                    assert(result.books.length === 2);
                    done();
                })
            })
        })
    })

})
