const mongoose = require("mongoose");
require("dotenv").config();

const tweet = require("./tweet");

//Create the mongoURI
const mongoURI = `mongodb+srv://${process.env.mongodb_user}:${process.env.mongodb_pass}@${process.env.mongodb_host}/${process.env.mongo_db_name}`;

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connection established with mongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to Mongo DB");
    console.log(error);
  });

// setTimeout(() => {
//   mongoose.disconnect();
// }, 5000);

const myFirstTweet = {
  title: "Dev Training",
  body: "I hope the training is good so far?",
  author: "me",
};

// tweet
//   .create(myFirstTweet)
//   .then((success) => {
//     console.log(success);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     mongoose.disconnect();
//   });

const manyTweets = [
  {
    title: "Dev Training",
    body: "I hope the training is good so far?",
    author: "me",
  },
  {
    title: "Feeling excited",
    body: "i dunno i trust you",
    author: "me",
    likes: 20,
  },
  {
    title: "I am hungry",
    body: "How about Biriyani?? or Banana Leaf??",
    author: "Dhiv, Dhav and AMS",
    likes: 40,
  },
  {
    title: "I am not sleepy",
    body: "But seeing people sleepy makes me sleepy",
    author: "AMS",
    likes: 162,
  },
  {
    title: "Who is top student",
    body: "Isit Mirza or Dhivyan?",
    author: "Mirza and Dhivyan",
    sponsored: true,
    likes: -100,
  },
];

// tweet
//   .insertMany(manyTweets)
//   .then((success) => {
//     console.log(success);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     mongoose.disconnect();
//   });

//Works on old version of mongoose
// tweet.insertMany(manyTweets, (error, tweets) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(tweets);
//   }
//   mongoose.connection.close();
// });

//To find all documents in your database
// tweet
//   .find()
//   .then((tweets) => {
//     console.log(tweets);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     mongoose.disconnect();
//   });

//Retrieve only id(default), title and body information
// tweet.find({}, "title body").then((tweets) => {
//   console.log(tweets);
// });

//Retrieve only title and body information
// tweet.find({}, "-_id title body").then((tweets) => {
//   console.log(tweets);
// });

//Retrieve by id
// tweet.findById("64925e9320c09bf1432f64b6").then((returned_tweet) => {
//   console.log(returned_tweet);
// });

//Retrieve single tweet by author
// tweet.findOne({ author: "me" }).then((returned_tweet) => {
//   console.log(returned_tweet);
// });

//Retrieve documents which has greater than or equal to 20 likes
// tweet.find({ likes: { $gte: 20 } }).then((tweets) => {
//   console.log(tweets);
// });

//Find tweets using where clause
// tweet
//   .where("likes")
//   .gte(20)
//   .where("author")
//   .equals("me")
//   .then((tweets) => {
//     console.log(tweets);
//   });

//Delete
// tweet.findOneAndDelete({ title: "I am not sleepy" }).then((deleted) => {
//   console.log(deleted);
// });

//To Create a new tweet
// tweet
//   .create({
//     title: "AMS sleepy",
//     body: "AMS angry",
//     author: "Dhav and Dhiv",
//     likes: 12,
//   })
//   .then((success) => {
//     console.log(success);
//   });

//Delete a tweet if found and if not found return document not found
// tweet
//   .findOneAndRemove({ title: "Deep Thoughts" })
//   .then((deleted) => {
//     if (deleted) {
//       console.log(deleted);
//     } else {
//       console.log("document not found");
//     }
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//Find and remove a tweet by its ID
// tweet.findByIdAndRemove("64925e9320c09bf1432f64b2")
// .then((removed_tweet) => {
//   console.log(removed_tweet);
// });

//Update
// tweet
//   .findByIdAndUpdate("6492571002bf6e6895e2a02d",
//   { likes: 2000 }, { new: true })
//   .then((result) => {
//     console.log(result);
//   });

//Find the tweet with title: "Who is top student"
tweet.find({ title: "Who is top student" }).then((success) => {
  console.log(success);
});

//Find the tweet and update sponsored to false
tweet
  .findOneAndUpdate(
    { title: "Who is top student" },
    { sponsored: true },
    { new: true }
  )
  .then((success) => {
    console.log(success);
  });
