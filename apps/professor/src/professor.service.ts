import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "database/src/prisma.service";
import { CreateTurmaDto } from "../dtos/create-turma.dto";
import { CheckCodeDto } from "../dtos/check-code.dto";

@Injectable()
export class ProfessorService {
  constructor( private readonly prisma: PrismaService) {}

  async createTurma(professorId: string, data: CreateTurmaDto ) {
    const turma = await this.prisma.turma.create({
        data:{
            professor_id: professorId,
            turma_id: data.turma_id,
            materia: data.materia
        }
    })
    return turma
  }

  async startClass(turmaId:string) {
    const start = await this.prisma.turma.update({
        where: {
            turma_id: turmaId
        },
        data: {
            acontecendo: true
        }
    })
    return start
  }

  async finishClass(turmaId:string) {
    const start = await this.prisma.turma.update({
        where: {
            turma_id: turmaId
        },
        data: {
            acontecendo: false
        }
    })
    return start
  }

  async checkCode(turmaId:string, data: CheckCodeDto) {
    const presenca= await this.prisma.matricula.findUnique({
        where:{
            aluno_id: data.aluno_id,
            turma_id: turmaId
        },
        select: {
            code: true
        }
    });
    const acontecendo= await this.prisma.turma.findUnique({
        where: {turma_id: turmaId},
        select: {acontecendo: true}
    })
    if (!acontecendo || !acontecendo.acontecendo) {
        throw new NotFoundException('Aula ja foi finalizada')
    }
    if (!presenca || presenca.code !== data.code) {
        throw new NotFoundException('Código inválido ou matrícula não encontrada');
    }
    const computa= await this.prisma.presenca.update({
        where: {
            aluno_id: data.aluno_id,
            turma_id: turmaId
        },
        data: {
            presenca: {
                increment: 1
            }
        }
    })
    return computa
  }
}