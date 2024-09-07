const UserService = require("../services/UserService");
const { UserSchema } = require("../schemas/UserSchemas");
const BuildResponse = require('../helpers/BuildResponse');
const UserModel = require("../models/UserModel");

class UserController {
    /**
     * Create an user
     * @param {*} req 
     * @param {*} res 
     * @returns 
     */
    async Register(req, res) {
        try {
            const request = new UserModel(UserSchema.parse(req.body));
            const result = await UserService.Register(request)
            return res.status(201).json(
                BuildResponse(result, "Usuario cadastrado com sucesso!", 201, true)
            )
        } catch (error) {
            console.error(error)
            return res.status(500).json(BuildResponse(error.message, "Error interno da api", 500, false));
        }
    }

    async Update(req, res) {
        try {
            const { id } = req.params
            const request = new UserModel(UserSchema.parse(req.body))
            const result = await UserService.Update(Number(id), request);
            return res.status(200).json(
                BuildResponse(result, "Usuario encontrado com sucesso!", 200, true)
            )
        } catch (error) {
            console.error(error)
            return res.status(500).json(BuildResponse(error.message, "Error interno da api", 500, false));
        }
    }

    async Get(req, res) {
        try {
            const { id } = req.params;
            const result = await UserService.Get(Number(id));
            return res.status(200).json(
                BuildResponse(result, "Usuario encontrado com sucesso!", 200, true)
            )
        } catch (error) {
            console.error(error)
            return res.status(500).json(BuildResponse(error, "Error interno da api", 500, false));
        }
    }

    async Delete(req, res) {
        try {
            const { id } = req.params
            const result = await UserService.Delete(Number(id));
            return res.status(200).json(
                BuildResponse(result, "Usuario deletado com sucesso!", 200, true)
            )
        } catch (error) {
            console.error(error)
            return res.status(500).json(BuildResponse(error.message, "Error interno da api", 500, false));
        }
    }

    async List(req, res) {
        try {
            const result = await UserService.List()
            return res.status(200).json(
                BuildResponse(result, "Lista de usuarios encontrado!", 200, true)
            )
        } catch (error) {
            console.error(error)
            return res.status(500).json(BuildResponse(error.message, "Error interno da api", 500, false));
        }
    }
}

module.exports = new UserController()