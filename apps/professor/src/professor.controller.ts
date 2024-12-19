import { Body, Controller, Param, Patch, Post, ValidationPipe, Get } from "@nestjs/common";
import { ProfessorService } from "./professor.service";
import { CreateTurmaDto } from "../dtos/create-turma.dto";
import { CheckCodeDto } from "../dtos/check-code.dto";

@Controller('/professor')
export class ProfessorController {
  constructor(private readonly appService: ProfessorService) {}

  @Post('/create-turma/:professor_id')
    async createTurma(@Param() professorId:string, @Body(new ValidationPipe()) createTurmaDto: CreateTurmaDto ) {
        return await this.appService.createTurma(professorId, createTurmaDto)
    }

  @Patch('start-class/:turma_id')
    async startClass(@Param() turmaId: string) {
        return await this.appService.startClass(turmaId)
    }

  @Patch('finish-class/:turma_id')
    async finishClass(@Param() turmaId: string) {
        return await this.appService.finishClass(turmaId)
    }

  @Patch('check-code/:turma_id')
    async checkCode(@Param() turmaId: string, @Body(new ValidationPipe()) data: CheckCodeDto) {
        return await this.appService.checkCode(turmaId, data)
    }

  @Get('get-chamada/:turma_id')
    async getChamada(@Param() turmaId: string) {
      return await this.appService.getChamada(turmaId)
    }
 
}