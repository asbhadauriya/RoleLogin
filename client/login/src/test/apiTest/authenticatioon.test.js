import { Login } from "../../pages/Authentication/Login";
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import{render,screen} from "@testing-library/react";
import { loginUser } from "../../services/authService";

// const loginResponse = rest.get('http://localhost:3001/login',(req,res,ctx)=>{

// })

const server=new setupServer();

beforeAll(()=>server.listen());
 

afterEach(()=>server.resetHandlers());

afterAll(()=>server.listen());

test('it must return tatus 300', async ()=>{
    const res =await loginUser ({email:"ad@admin.com", password:"admin"})
    expect(res.user.fname).toEqual("Akshay");
})






