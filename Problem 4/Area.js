const Pi = require('./Pi');

const Area = (r) => {
    let pidata = Pi.mymodule();
    result = pidata*(r*r)
    return result
    }

module.exports = Area;