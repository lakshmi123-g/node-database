const port = 3001;
express = require("express"),
    app = express();
const router = express.Router();
app.use("/", router);
app.set("view engine", "ejs");
const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://localhost:27017/recipe_db",
    { useNewUrlParser: true }
);
mongoose.connection
    .once("open", () => {
        console.log("Successfully connected to MongoDB using Mongoose!");
    });


const subscribecontroller = require("./controllers/subscribecontroller");

app.get("/contact", subscribecontroller.getSubscriptionPage);
app.get("/contact", subscribecontroller.getSubscriptionPage);
app.post("/subscribe", subscribecontroller.saveSubscriber);
app.get("/subscribers", subscribecontroller.getAllSubscribers, (req, res, next) => {
    console.log(req.data);
    res.send(req.data);

});

app.post("/subscribe", subscribecontroller.saveSubscriber);
const Subscriber = require("./models/subscriber");
const user = require("./models/user");
const usercontroller = require("./controllers/usercontroller");
app.get("/users", usercontroller.index);
router.get("/users/new", usercontroller.new);
router.post("/users/create", usercontroller.create,
    usercontroller.redirectView);
router.get("/users/:id", usercontroller.show, usercontroller.showView);
router.get("/users/:id/edit", usercontroller.edit);
router.put("/users/:id/update", usercontroller.update, usercontroller.redirectView);
router.delete("/users/:id/delete", usercontroller.delete, usercontroller.redirectView);

const course = require("./models/courses");
const coursescontroller = require("./controllers/coursescontroller");

app.get("/courses", coursescontroller.getAllcourses, (req, res, next) => {
    console.log(req.data);
    res.send(req.data);
});
app.get("/contact", coursescontroller.getcoursePage)
const methodOverride = require("method-override");
router.use(methodOverride("_method", {
    methods: ["POST", "GET"]
}));
var subscriber1 = new Subscriber({
    name: "nikki  gangisetty",
    email: "nikkil@123.com",
    zipcode: "123479"
});
subscriber1.save((error, savedDocument) => {
    if (error) console.log(error);
    console.log(savedDocument);
});
Subscriber.create(
    {
        name: "nikki  gangisetty",
        email: "nikkil@123.com",
        zipcode: "123479"
    },
    function (error, savedDocument) {
        if (error) console.log(error);
        console.log(savedDocument);
    }
);
var course1 = new course({
    title: "react",
    description: "javascript",

});
course1.save((error, savedDocument) => {
    if (error) console.log(error);
    console.log(savedDocument);
});
course.create(
    {
        title: "react",
        description: "javascript"
    },
    function (error, savedDocument) {
        if (error) console.log(error);
        console.log(savedDocument);
    }
);



app.listen(port, () => {
    console.log(`The Express.js server has started and is listening
        on port number: ${port}`);
});

var user1 = new user({
    name: "nikki gangisetty",
    email: "nikkil@123.com",
    password: "pass123456",
    zipcode: "123479"
});
user1.save((error, savedDocument) => {
    if (error) console.log(error);
    console.log(savedDocument);
});
user.create(
    {
        name: "nikki  gangisetty",
        email: "nikkil@123.com",
        password: "pass123456",
        zipcode: "123479"
    },
    function (error, savedDocument) {
        if (error) console.log(error);
        console.log(savedDocument);
    }
);
