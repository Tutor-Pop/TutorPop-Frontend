const { Address } = require("./src/constants/location.constant")

// console.log(Address['กรุงเทพมหานคร'])
console.log(Address['กรุงเทพมหานคร'].filter(v => v.district == "คลองสามวา")[0].subdistrict)