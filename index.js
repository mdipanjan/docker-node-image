const express = require("express");
const app = express();


app.get('/', (req, res)=>{
  res.json({meaage:'working'})
})

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("listening at port 8000..");
});