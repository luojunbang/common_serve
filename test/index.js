const axios = require("axios");
const qs = require("qs");
axios
  .post("http://127.0.0.1:7001/wx/auth", qs.stringify({ data: "luojunbang" }), {
    headers: { contentType: "application/x-www-urlencode-form" },
    params: { code: "123" },
  })
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log("Err...");
  });
// axios.get('http://127.0.0.1:7001/wx',{params:{code:'123'}}).then(res=>{
//     console.log(res.data);
// }).catch(err=>{
//     console.log('Err...');
// })
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

