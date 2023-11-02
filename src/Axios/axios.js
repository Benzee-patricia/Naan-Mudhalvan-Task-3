import axios from "axios"
// import dotenv from "dotenv"
// dotenv.config()
// const Dotenv = require('dotenv');
// Dotenv.config();

const instance = axios.create({
    baseURL:"https://elakkiya-server.onrender.com/api"
    // baseURL:process.env.BACKENED_URL

   
})
export default instance