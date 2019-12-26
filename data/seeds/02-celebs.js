
exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('celebrity').truncate()
		.then(function () {
			// Inserts seed entries
			return knex('celebrity').insert([
				{
					"id": 1,
					"celebname": "Wallace Shawn",
					"image_url": "https://upload.wikimedia.org/wikipedia/commons/6/66/Wallace_Shawn_2014_%28cropped%29.jpg",
					"factoid": "Played \"Rex\" in Toy Story",
					"birthyear": 1943,
					"alive": 1
				},
				{
					"id": 2,
					"celebname": "John Ratzenberger",
					"image_url": "https://i0.wp.com/ratzenberger.com/wp-content/uploads/2013/09/john-ratz.jpg",
					"factoid": "Played mailman \"Cliff Clavin\" on Cheers",
					"birthyear": 1947,
					"alive": 1
				},
				{
					"id": 3,
					"celebname": "Kevin Hart",
					"image_url": "https://s3-prod.adage.com/s3fs-public/styles/width_1024/public/KevinHart3X2.jpg",
					"factoid": "Former shoe salesman.",
					"birthyear": 1979,
					"alive": 1
				},
				{
					"id": 4,
					"celebname": "Freddy Heineken",
					"image_url": "https://specials-images.forbesimg.com/imageserve/5d8e22cc6de3150009a54b53/960x0.jpg",
					"factoid": "Dutch beer brewer (Heineken).",
					"birthyear": 1923,
					"alive": 0
				}
			]);
		});
};
