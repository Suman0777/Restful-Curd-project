import user from "../model/userModel.js"

export const create = async(req, res)=>{
    try {
        
        const userdata = new user(req.body);
        const {email} = userdata;
        const userExit = await user.findOne({email});

        if(userExit){
            return res.status(404).json({
                msg: "User already exit"
            })
        }

        const saveUser = await userdata.save();
        res.status(200).json(saveUser)

    } catch (error) {
        res.status(500).json({
            error: " intral error has occur" 
        })
    }
}

export const fetch = async (req, res)=>{
    try{
        return res.json(" hello world");
    }
    catch(err){
        res.status(500).json({
            error: " intral error has occur" 
        })
    }
}