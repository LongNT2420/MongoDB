const mongoose = require('mongoose');

// connect mongoose
mongoose.Promise = global.Promise;
before(function(done){
    mongoose.connect('mongodb://localhost/myShop');

    mongoose.connection.once('open',function(){
    console.log('connect to Mongoose sussessfully');
    done();
    }).on('error',function(){
    console.log('connect fail');
})
})

beforeEach(function(done) {
    mongoose.connection.collections.personchars.drop(function(){
        done();
    });
})