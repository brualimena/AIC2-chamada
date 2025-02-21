import { IsNotEmpty, IsString } from "class-validator";

export class MatriculaDto{
    @IsNotEmpty()
    @IsString()
    turma_id: string
}