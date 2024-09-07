class UserModel {
    constructor(
        {
            Id,
            FirstName,
            LastName,
            Email,
            Password,
            Cpf,
            Age,
            CreatedAt,
            UpdatedAt
        }
    ) {
        this.Id = Id;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.Password = Password;
        this.Cpf = Cpf;
        this.Age = Age;
        this.CreatedAt = CreatedAt;
        this.UpdatedAt = UpdatedAt;
    }
}

module.exports = UserModel