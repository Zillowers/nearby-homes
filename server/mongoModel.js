const Homes = require('../database/mongodb/index.js');

const retrieve = (id, callback) => {
  Homes.find({ id: id }).exec((err, data) => {
    if (err) {
      callback(err, null);
    } else {
      Homes.find({ location: { $near: { $geometry: { type: 'Point', coordinates: [-79.306839, 42.120123] }, $maxDistance: 1000 } } }).limit(10).exec((error, homes) => {
        if (error) {
          callback(err, null);
        } else {
          callback(null, homes);
        }
      });
    }
  });
};

const save = (data, callback) => {
  console.log(data);
};

module.exports = {
  retrieve,
  save,
};
