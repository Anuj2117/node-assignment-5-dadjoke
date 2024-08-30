import express from "express";
import axios from "axios";

const app=express();
const port =6969;
const hostname="127.0.0.1";

app.get("/api/joke/random" , async (req, res)=>{
    try{
        const response = await axios.get("https://api.api-ninjas.com/v1/dadjokes", {
            headers: {
              'X-Api-Key': "ytYd9sxXxybfYoha7gAVCQ==170MPomhGe1VgSBi" 
            }
          });
          const joke = response.data[0].joke;
          res.send(`
            <!DOCTYPE html>
            <html lang="en">
              <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Random Image</title>
              </head>
              <body>
                <h1>Random Joke</h1>
                <h3>${joke}</h3>
              </body>
            </html>
          `);
    }
    catch (error) {
        console.error("Error fetching random image:", error.message);
        res.status(500).send(`
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Error</title>
            </head>
            <body>
              <h1>Failed to fetch random joke</h1>
              <p>${error.message}</p>
            </body>
          </html>
        `);
      }
});
app.listen(port,hostname,()=>{
    console.log("server is running at port :"+port)
})