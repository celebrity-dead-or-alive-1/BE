// user-router post
// check for object 
// check object data shape?

//
const request = require("supertest");
const server = require("./server.js");

const celebdb = require("../data/celeb-model.js");
const userdb = require("../data/user-model.js");
const db = require("../data/dbConfig");

describe("User routes", () => {

	describe("\nRoute checks", () => {
		it("`/invalid` should return `404 not found`", () => {
			return request(server)
				.get("/invalid")
				.then(res => {
					expect(res.status).toBe(404);
				});
		});
		it("`/` should return `200 OK`", () => {
			return request(server)
				.get("/")
				.then(res => {
					expect(res.status).toBe(200);
				});
		});
		it("`/celeb/del/1` should return `401 Unauthorized`", () => {
			return request(server)
				.delete("/api/celeb/del/1")
				.then(res => {
					expect(res.status).toBe(403);
				});
		});
	});

	describe("\nDB output checks", () => {
		it("should return an array", async () => {
			const chkGetAll = await celebdb.getAll();
			expect(Array.isArray(chkGetAll)).toBe(true);
		});
	});
	
	describe("\nCelebrity count data", () => {
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

	describe("\nScore checks", () => {
		it("`/topten` should return an array", async () => {
			const chkTopTen = await userdb.getAllScoresForUser(1);
			expect(Array.isArray(chkTopTen)).toBe(true);
		});
		it("`/score/:id` should have `username` key", async () => {
			const chkScoreList = await userdb.getTopTen();
			expect(chkScoreList[0].hasOwnProperty('username')).toBe(true);
		});
	});

	describe("\nUser DB checks", () => {
		it("`get all users` should return an array", async () => {
			const getAllUsers = await userdb.getAll();
			expect(Array.isArray(getAllUsers)).toBe(true);
		});
		it("`get user 0` should have `username` key", async () => {
			const getUserById = await userdb.getById(1);
			expect(getUserById.hasOwnProperty('email')).toBe(true);
		});
	});

	// test against users and scores routes
});

