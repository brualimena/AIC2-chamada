import { IsString, IsNotEmpty, IsEmail } from "class-validator";

export class SignUpUserDto{
    @IsString({ message: 'O id deve ser uma string.' })
    @IsNotEmpty()
    id: string

    @IsString({ message: 'O nome deve ser uma string.'})
    @IsNotEmpty()
    nome: string

    @IsEmail()
    @IsNotEmpty()
    email:  string

    @IsString({ message: 'O cpf deve ser uma string.' })
    @IsNotEmpty()
    cpf: string

    @IsString({ message: 'A senha deve ser uma string.' })
    @IsNotEmpty()
    password: string
}
