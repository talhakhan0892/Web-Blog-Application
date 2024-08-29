import express from "express"
import bodyParser from "body-parser";
import fs from "fs";


const port=3000;
const app=express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var blogEntries = [];
var blogTitles = [];
var number_of_entries = 0;



app.get("/", (req,res) => {
    res.render("index.ejs", { entries: blogEntries, titles: blogTitles });
})

app.get("/compose", (req, res) => {
    res.render("compose.ejs")
})

app.post("/submit", (req, res) => {
    const title = req.body["blog-entry-title"];
    const post = req.body["post"];
    const postIndex = req.body.postIndex;

    if (postIndex !== undefined && postIndex !== '') {
        // Update the existing entry
        const index = parseInt(postIndex);
        blogEntries[index] = post;
        blogTitles[index] = title;
    } else {
        // Create a new entry
        blogEntries.push(post);
        blogTitles.push(title);
        number_of_entries++;
    }

    res.render("index.ejs", {entries: blogEntries, titles: blogTitles});
});


app.post("/delete", (req,res) => {

    const postIndex = req.body.postIndex;
    console.log("Post: " + postIndex);

    if (blogEntries[postIndex] && blogTitles[postIndex]) {
        blogEntries.splice(postIndex, 1);
        blogTitles.splice(postIndex, 1);
        number_of_entries--;

        // Optionally, redirect or re-render the page
        res.redirect("/");
    } else {
        res.status(404).send("Post not found");
    }
    

});

app.post("/edit", (req,res) => {

    const postIndex = req.body.postIndex;
    console.log("Post: " + postIndex);

    res.render("compose.ejs", {entries: blogEntries, titles:blogTitles, index:postIndex});
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


