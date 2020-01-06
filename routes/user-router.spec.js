// user-router post
// check for object 
// check object data shape?

//
const request = require("supertest");
const userdb = require("../data/user-model.js");
const server = require("../api/server.js");
const db = require("../data/dbConfig");

describe("User routes", () => {
	describe("\nRoute checks", () => {
		it("should return `404 not found`", () => {
			// console.log(">>> > > >",server);
			return request(server)
				.get("/invalid")
				.then(res => {
					expect(res.status).toBe(404);
				});
		});
		it("should return `200 OK`", () => {
			// console.log(">>> > > >",server);
			return request(server)
				.get("/")
				.then(res => {
					expect(res.status).toBe(200);
				});
		});
		it("should return `401 Unauthorized`", () => {
			// console.log(">>> > > >",server);
			return request(server)
				.delete("/api/celeb/del/1")
				.then(res => {
					// console.log(res)
					expect(res.status).toBe(401);
				});
		});
	});

});
