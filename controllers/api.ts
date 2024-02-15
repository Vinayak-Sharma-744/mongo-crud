import express, { Request, Response }  from "express"
import  * as services from "../services/services"
const router = express.Router()
import { userValidations } from "../validations/validation"
const app = express()
app.use(express.json())

router.get('/', async (req:Request, res:Response) => {
    try {
        const result = await services.find()
        // console.log(typeof find);
        
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(404).end("<h2>fatal error</h2>")
    }
})

router.post('/create', async (req:Request, res:Response) => {
    try {
        const{error, value} = await userValidations.validate(req.body,{abortEarly:false})
        if (error) {
            return res.status(400).json({ error: error.details.map((detail) => detail.message) });
            // console.log(error.details);
        } else {
            console.log(" is :" , value);
        }
        const result = await services.create(req.body)
        res.status(200).send("added successfully")
    } catch (error) {
        console.log(error);
        res.status(404).send(`<h2>${error}</h2>`)
    }
})

router.get('/check/:myId', async (req:Request, res:Response) => {
    try {
        const _id = req.params.myId
        // const{error, value} = await userValidations.validate(req.body,{abortEarly:false})
        const{error, value} = await userValidations.validate("_id", {abortEarly:false})
        if (error) {
            return res.status(400).json({ error: error.details.map((detail) => detail.message) });
            // console.log(error.details);
        } else {
            console.log(" is :" , value);
        }
        
        const result = await services.findById({_id: _id})
        console.log("check",result);
        
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(404).send(`<h2>${error}</h2>`)
    }
})
router.put('/update/:myId', async (req:Request, res:Response) => {
    try {
        const _id = req.params.myId
        const{error, value} = await userValidations.validate("_id", {abortEarly:false})
        if (error) {
            return res.status(400).json({ error: error.details.map((detail) => detail.message) });
            // console.log(error.details);
        } else {
            console.log(" is :" , value);
        }
        const result = await services.findOneAndUpdate({_id}, {title:"mouse", price:2000000})
        console.log("check",result);
        
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(404).send(`<h2>${error}</h2>`)
    }
})

router.delete('/del/:myId', async (req:Request, res:Response) => {
    try {
        const _id = req.params.myId
        const{error, value} = await userValidations.validate("_id", {abortEarly:false})
        if (error) {
            return res.status(400).json({ error: error.details.map((detail) => detail.message) });
            // console.log(error.details);
        } else {
            console.log(" is :" , value);
        }
        const result = await services.deleteOne({_id: _id})
        console.log("check",result);
        
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
        res.status(404).send(`<h2>${error}</h2>`)
    }
})
export default router