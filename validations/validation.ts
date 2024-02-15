import * as joi from 'joi'

export const userValidations = joi.object({
    id:joi.number().min(1).required(),
    title: joi.string().min(3).max(10).required(),
    price:joi.number().min(10).required(),
    category:joi.string().default(['Home']).required(),
    description:joi.string().min(3).max(20).required(),
    image:joi.string().required()
})