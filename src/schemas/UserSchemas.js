const { z } = require('zod')

const UserSchema = z.object({
    FirstName: z.string({
        message: "O Primeiro nome é obrigatorio"
    }),
    LastName: z.string({
        message: "O Sobrenome nome é obrigatorio"
    }),
    Email: z.string({
        message: "O Email nome é obrigatorio"
    }),
    Password: z.string().optional().nullable(), // Alterar quando tiver auth para usuario
    Cpf: z.string({
        message: "O cpf é obrigatorio"
    }).max(11),
    Age: z.number({
        message: "A idade nome é obrigatorio"
    }).min(1).max(100),
})


module.exports = {
    UserSchema
}