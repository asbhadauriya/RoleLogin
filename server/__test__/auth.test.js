const supertest =require('supertest');
const app= require('../routes/auth');
const User=require('../models/user');

describe('#user',()=>{
    beforeAll(async()=>{
        await supertest(app)
        .post('/register')
        .send({
            fname:"Akshay",
            lname:'Singh',
            email:'akshay@gmail.com',
            password:'1234',

        })
        .except(201);
    });
    afterAll(async()=>{
        await User.deleteMany();
    })
});
describe('#handelSignUP',()=>{
    describe('shoud not register user',()=>{
        describe('email already exists',()=>{
            test('return success false',async()=>{
                const res=await supertest(app)
            .post('/register')
            .send({
                fname:'Akshay',
                lname:'Singh',
                email:'akshay@gmail.com',
                password:'1234',

            })
            .expect(400)
            expect(response.body.message).toBe('User already exists');
    })
})
describe('when password is missing',()=>{
    test('return success false',async()=>{
        const res=await supertest(app)
    .post('/register')
    .send({
        fname:'Akshay',
        lname:'Singh',
        email:'akshay@gmail.com',
        

    })
    .expect(400)
    
})

})


describe('when first name is missing',()=>{
    test('return success false',async()=>{
        const res=await supertest(app)
    .post('/register')
    .send({
        
        lname:'Singh',
        email:'akshay@gmail.com',
        password:'12345'
        

    })
    .expect(400)
    
})

})

describe('when last name is missing',()=>{
    test('return success false',async()=>{
        const res=await supertest(app)
    .post('/register')
    .send({
        fname:'Akshay',
        email:'akshay@gmail.com',
        password:'12345'
        

    })
    .expect(400)
    
})

})


describe('when email is missing',()=>{
    test('return success false',async()=>{
        const res=await supertest(app)
    .post('/register')
    .send({
        fname:'Akshay',
        lname:'Singh',
        password:'12345'
        

    })
    .expect(400)
    
});

});

    });

    describe('should create user',()=>{
        describe('when details are valid',()=>{
  
        test('return success true',async()=>{
            const res=await supertest(app)
        .post('/register')
        .send({
            fname:'Akshay', 
            lname:'Singh',
            email:'akshay@gmail.com',
            password:'12345'

            
    
        })
        .expect(201);
        expect(res.body.message).toBe('User Created');
        expect(res.body.user.fname).toBe('Akshay');
        expect(res.body.user.email).toBe('akshay@gmail.com');
        
        
    })
    
    })

})
});

