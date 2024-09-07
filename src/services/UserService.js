const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()


const prismaSelectReturn = {
    Id: true,
    FirstName: true,
    LastName: true,
    Email: true,
    Age: true,
    CreatedAt: true,
    UpdatedAt: true,
    Password: false
}

class UserService {

    /**
     * Create a new User
     * @param {*} request 
     * @returns 
     */
    async Register(request) {
        try {
            return await prisma.user.create({
                data: request,
                select: prismaSelectReturn
            })
        } catch (error) {
            throw new Error(error.message || error)
        } finally {
            await prisma.$disconnect()
        }
    }

    async Update(id, request) {
        try {
            var getUser = await this.Get(id);
            if (!getUser)
                throw new Error("Usuario não encontrado!")
            return await prisma.user.update({
                where: {
                    Id: id
                },
                data: request,
                select: prismaSelectReturn
            })
        } catch (error) {
            throw new Error(error.message || error)
        } finally {
            await prisma.$disconnect()
        }
    }

    async Get(id) {
        try {
            return await prisma.user.findUnique({
                where: {
                    Id: id
                },
                select: prismaSelectReturn
            })
        } catch (error) {
            throw new Error(error.message || error)
        } finally {
            await prisma.$disconnect();
        }
    }

    async Delete(id) {
        try {
            return await prisma.user.delete({
                where: {
                    Id: id
                }
            })
        } catch (error) {
            throw new Error(error.message || error)
        } finally {
            await prisma.$disconnect();
        }
    }

    async List() {
        try {
            return await prisma.user.findMany({
                select: prismaSelectReturn
            })
        } catch (error) {
            throw new Error(error.message || error)
        } finally {
            await prisma.$disconnect();
        }
    }

}


module.exports = new UserService()