app.get("/", (req, res) => {  // Fixed here
    res.status(200).send('<h1 style="color:red;">Welcome to our backend..!!</h1>');
});

const PORT = 8000;

app.listen(PORT, () => {
    console.log('DB is connected')
    console.log(`Server is running at port http://localhost:${PORT}`);  // Used backticks for template literal
});
