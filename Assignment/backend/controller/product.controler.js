const data = [
    {"name":"SVU", "place":"BP"},

]


const getProducts = (req, res) => {
    res.status(200).send({message:"Data sucessfully recived", data:data })
}

module.exports ={
    getProducts
}