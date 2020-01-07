// user-router post
// check for object 
// check object data shape?

//
const request = require("supertest");
const server = require("../api/server.js");

const celebdb = require("../data/celeb-model.js");
const db = require("../data/dbConfig");

describe("User routes", () => {
	describe("\nRoute checks", () => {
		it("should return `404 not found`", () => {
			return request(server)
				.get("/invalid")
				.then(res => {
					expect(res.status).toBe(404);
				});
		});
		it("should return `200 OK`", () => {
			return request(server)
				.get("/")
				.then(res => {
					expect(res.status).toBe(200);
				});
		});
		it("should return `401 Unauthorized`", () => {
			return request(server)
				.delete("/api/celeb/del/1")
				.then(res => {
					// console.log(res)
					expect(res.status).toBe(401);
				});
		});
	});

	describe("\nDB output checks", () => {
		it("should return an array", async () => {
			const chkGetAll = await celebdb.getAll();
			expect(Array.isArray(chkGetAll)).toBe(true);
		});
	});
	
	describe("\nCount data", () => {
		it("should be an `object`", async () => {
			const chkCount = await celebdb.count();
			expect(Object.keys(chkCount).length).toBe(1);
		});
		it("should be `1 element`", async () => {
			const chkCount = await celebdb.count();
			expect(typeof chkCount === 'object' && chkCount !== null).toBe(true);
		});
		it("should have `value as integer`", async () => {
			const chkCount = await celebdb.count();
			expect(Number.isInteger(chkCount.count)).toBe(true);
		});
	});

	// test against users and scores routes
});

