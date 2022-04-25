const supertest =require('supertest');
const app= require('../routes/post');


describe("Post/ Get ",()=>{
   test("It create post", async()=>{
            const res = await supertest(app).post("/create").send({
                userId:"620dfc034fe99784d69f6ca8",
                title:"test tesr",
                desc: "test desc",
                category:"politics"

            });
            expect(res.status).toBe(200);
        });
});