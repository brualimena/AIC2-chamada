import { Body, Controller, Post, ValidationPipe, Param, Get } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { MatriculaDto } from './dtos/matricula.dto';

@Controller('/aluno')
export class AlunoController {
    constructor(private readonly appService: AlunoService) {}

    @Post('/matricula/:aluno_id')
    async matricula(@Param() alunoId:string, @Body(new ValidationPipe()) matriculaDto: MatriculaDto) {
        return await this.appService.matricula(alunoId, matriculaDto)
    }

    @Post('/create-code/:aluno_id')
    async createCode(@Param() alunoId:string, @Body(new ValidationPipe()) matriculaDto: MatriculaDto) {
      return await this.appService.createCode(alunoId, matriculaDto)
    }

    @Get('/get-presencas/:aluno_id')
    async getPresencas(@Param() alunoId:string, @Body(new ValidationPipe) matriculaDto:MatriculaDto) {
      return await this.appService.getPresencas(alunoId, matriculaDto)
    }

}