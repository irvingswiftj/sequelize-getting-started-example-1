var ORM = require('./models');

ORM.Student.create({
    email: 'test@test.com',
    firstName: 'fred',
    lastName: 'flintstone'
}).then(function() {
    ORM.Student.findAll().then(function(students) {
        console.log(students);
    });
});
