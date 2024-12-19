import { Injectable } from "@nestjs/common";
import { PrismaService } from "database/src/prisma.service";
import { MatriculaDto } from "./dtos/matricula.dto";

@Injectable()
export class AlunoService {
    constructor( private readonly prisma: PrismaService) {}

    async matricula(userId: string, data: MatriculaDto) {
        const matricula = await this.prisma.matricula.create({
            data:{
                aluno_id: userId,
                turma_id: data.turma_id
            }
        })
        return matricula
    }

    generateCode(): string{
        return Math.floor(100000 + Math.random() * 900000).toString();
      }

    async createCode(userId: string, data: MatriculaDto) {
        let generate = this.generateCode();
        let existingCode = await this.prisma.matricula.findUnique({
        where: {
            code: generate,
        },
        });

        while (existingCode) {
        generate = this.generateCode();
        existingCode = await this.prisma.matricula.findUnique({
            where: {
            code: generate,
            },
        });
        }

        const code = await this.prisma.matricula.update({
        where: {
            aluno_id: userId,
            turma_id: data.turma_id,
        },
        data: {
            code: generate,
        },

        })
        return code
    }

    async getPresencas(aluno_id: string, data: MatriculaDto) {
        const presencas= await this.prisma.presenca.findUnique({
            where: {
                aluno_id: aluno_id,
                turma_id: data.turma_id
            },
            select: {
                presenca: true
            }
        })
        return presencas
    }
}