import { IsNegative, IsNotEmpty, IsString } from "class-validator";

export class CheckCodeDto{
    @IsString()
    @IsNotEmpty()
    aluno_id: string

    @IsString()
    @IsNotEmpty()
    code: string
}