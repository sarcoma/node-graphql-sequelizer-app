import {Request, Response} from 'express';
import {ValidationError} from 'sequelize';
import {hidePasswordHash} from '../service/password-utilities';
import dataResponse from '../response/data';
import validationErrorResponse from "../response/validation-error";

const db = require("../db/models");

export default class UserController {
    static register = (req: Request, res: Response) => {
        db.user.create(req.body)
            .then(user => {
                user = hidePasswordHash(user);
                return dataResponse(res, user);
            })
            .catch(ValidationError, err => {
                validationErrorResponse(res, err);
            });
    };

    static update = (req, res) => {

    };
}


