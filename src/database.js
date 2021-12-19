const mongoose = require("mongoose");
const uri =
  "mongodb+srv://inventorye2021:inventorye2021*@cluster0.i0dr5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(uri)
  .then((db) => console.log("db is conected"))
  .catch((err) => console.log(err));

module.exports = mongoose;
