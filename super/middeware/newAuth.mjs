import jwt from 'jsonwebtoken'
const newAuth = (roles) =>{
        return (req, res, next)=>{
            const token = req.header('Authorization')
            console.log(token)
            if(!token)
                res.status(401).json({message:"Access is denied..."})        
            try{
                const verified = jwt.verify(token.split(" ")[1],"dhanush")
                console.log(verified)
                req.user = verified
                if(!roles.includes(req.user.role))
                     return res.status(401).json({message:"Access is denied..."})
                next()
            }catch(error){
                res.status(401).json({message: "invalid token"})
            }        
        }
    }
export default newAuth
