const joi = require("joi");
const ImageExtension = require('joi-image-extension')
const Joi = joi.extend(ImageExtension)

const validation = joi.object({
    fullName: joi.string().alphanum().min(3).max(25).trim(true).required(),
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'in'] } }),
    contactNumber: joi.number().length(10).pattern(/^([0]|\+91)? [789]\d{9}$/).required(),
    password: joi.string().min(8).trim(true).required(),
    image: Joi.image().allowTypes(['png', 'jpg', 'bmp']),
    is_active: joi.boolean().default(true),
});


const userValidation = async (req, res, next) => {
    const payload = {
        fullName: req.body.userName,
        email: req.body.email,
        contactNumber: req.body.contactNumber,
        password: req.body.password,
        image: req.body.image,
        is_active: req.body.is_active,
    };

    const { error } = validation.validate(payload);
    if (error) {
        return res.send({
            status: 406,
            error: true,
            message: "Error in user data. Please try again!!",
        });
    } else {
        next();
    }
};
module.exports = userValidation;