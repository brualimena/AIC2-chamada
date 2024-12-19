import { IsNotEmpty, IsString } from "class-validator"

export class CreateTurmaDto{

    @IsNotEmpty()
    @IsString()
    turma_id: string
    
    @IsNotEmpty()
    @IsString()
    materia: string
}
