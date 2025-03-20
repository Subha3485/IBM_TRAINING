const signUp = async(req, res)=> {
    const data =req.body;

    try {bcrypt.hash(Password, 5, async(err, hash) {

        });
        const userData = new userModel(data);
        await userData.save();

        return res.status(200).send({Message:"user regestered sucessfuly"})
    }catch (error) {
        return res.status(200).send({Message:"user regestered sucessfuly"})

    }
}

module.exports={
    signUp
}