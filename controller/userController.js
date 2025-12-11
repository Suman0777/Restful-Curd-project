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
        const users = await user.find();

        if(users === 0){
            return res.status(404).json({
                Message: "user not found"
            })
        }
        res.status(202).json(users);
    }
    catch(err){
        res.status(500).json({
            error: " intral error has occur" 
        })
    }
}

export const update = async (req, res)=>{
    try{
        const id = req.params.id;
        const userexits = await user.findOne({_id: id});

        if(!userexits){
            return res.status(404).json({ message: "user not found"});
        }

        const userupdate = await user.findByIdAndUpdate(id, req.body, {new:true});
        res.status(202).json(userupdate);
    }
    catch(err){
        res.status(404).json({error: "error has occur in update tab"})
    }
}


export const deleteUser = async (req, res)=>{
    try{const id = req.params.id;
    const userecits = await user.findOne({_id: id});

    if(!userecits){
        return res.status(404).json({ message: "user not found"});
    }

    await user.findByIdAndDelete(id);
    res.status(202).json({msg: "user delete successfully"});
    }
    catch(err){
        res.status(404).json({error: "error has occur in delete tab"});
    }
}