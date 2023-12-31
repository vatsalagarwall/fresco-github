const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();
const { MONGO_URL } = process.env
const ReservationModel = require("./models/Reservation")
// const ClientModel = require("./models/Client")

const app = express();
app.use(express.json())
app.use(cors())




mongoose.connect(MONGO_URL)
    .then(() => console.log("Mongo Db connected successfully"))
    .catch((err) => console.log(err))

// app.get("/", (req, res) => {

// })


// app.post("/login", (req, res) => {
//     const { email, password } = req.body
//     ClientModel.findOne({ email: email })
//         .then(user => {
//             if (user) {
//                 if (user.password === password) {
//                     res.json("Success")
//                 }
//                 else {
//                     res.json("Password is incorrect")
//                 }
//             }
//             else {
//                 res.json("No such records ")
//             }
//         })
// })

// app.post('/register', (req, res) => {
//     ClientModel.create(req.body)
//         .then(clients => res.json(clients))
//         .catch(err => res.json(err))
// }
// )

app.post('/reserve', (req, res) => {
    ReservationModel.create(req.body)
        .then((reservation) => {
            res.json(reservation);
        })
        .catch((err) => {
            res.json(err);
        });
});

app.listen(5000, () => {
    console.log("Server is running");
})
