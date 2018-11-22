const db = require('../database/postgresdb/index.js');

const retrieve = (id, callback) => {
  const sql = `SELECT longitude, latitude FROM homes where id=${id}`;
  db.query(sql, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      const lg = data.rows[0].longitude;
      const lt = data.rows[0].latitude;
      const queryStr = `SELECT * FROM homes WHERE earth_box(ll_to_earth(${lt}, ${lg}), 1000) @> ll_to_earth(latitude, longitude) AND earth_distance(ll_to_earth(${lt}, ${lg}), ll_to_earth(latitude, longitude)) < 1000 ORDER BY earth_distance(ll_to_earth(${lt}, ${lg}), ll_to_earth(latitude, longitude)) limit 10`;
      db.query(queryStr, (error, homes) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, homes.rows);
        }
      });
    }
  });
};

const save = (val, callback) => {
  const sql = `INSERT INTO homes VALUES`;
  db.query(sql, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      const lg = data.rows[0].longitude;
      const lt = data.rows[0].latitude;
      const queryStr = `SELECT * FROM homes WHERE earth_box(ll_to_earth(${lt}, ${lg}), 1000) @> ll_to_earth(latitude, longitude) AND earth_distance(ll_to_earth(${lt}, ${lg}), ll_to_earth(latitude, longitude)) < 1000 ORDER BY earth_distance(ll_to_earth(${lt}, ${lg}), ll_to_earth(latitude, longitude)) limit 10`;
      db.query(queryStr, (error, homes) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, homes.rows);
        }
      });
    }
  });
};

module.exports = {
  retrieve,
  save,
};

//  `select * from homes where point(longitude, latitude) <@> point(${lg}, ${lt}) < 1`;
//41.825593 | -71.402239
// SELECT * FROM homes WHERE earth_box(ll_to_earth(41.825593, -71.402239), 1000) @> ll_to_earth(latitude, longitude) AND earth_distance(ll_to_earth(41.825593, -71.402239), ll_to_earth(latitude, longitude)) < 1000 ORDER BY earth_distance(ll_to_earth(41.825593, -71.402239), ll_to_earth(latitude, longitude)) limit 10
//db.homes.find( { coordinates : { $near : [ -79.306839 , 42.120123 ] , $maxDistance : 1/111.12 }
//db.homes.find({location: {$near : {$geometry :{type: 'Point',coordinates: [-79.306839 , 42.120123]},$maxDistance: 1000}}}).limit(10);
//db.homes.ensureIndex({location:"2dsphere"});
//SELECT * FROM homes WHERE earth_box(ll_to_earth(42.120123, -79.306839), 25000) @> ll_to_earth(latitude, longitude) AND earth_distance(ll_to_earth(42.120123, -79.306839), ll_to_earth(latitude, longitude)) < 1000 ORDER BY earth_distance(ll_to_earth(42.120123, -79.306839), ll_to_earth(latitude, longitude)) limit 10;
//-79.306839 , 42.120123