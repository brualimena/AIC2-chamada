import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { SignUpUserDto } from './dtos/signup-user.dto';
import { PrismaService } from 'database/src/prisma.service';
import { SignInUserDto } from './dtos/signin-user.dto';

@Injectable()
export class AppService {
  constructor( private readonly prisma: PrismaService) {}

  async signupAluno(data: SignUpUserDto) {
    const aluno = await this.prisma.aluno.create({
      data: data
    })
    return aluno
  }

  async signupProfessor(data: SignUpUserDto) {
    const professor = await this.prisma.professor.create({
      data: data
    })
    return professor
  }

  async signInAluno(data: SignInUserDto ) {
    const user = await this.prisma.aluno.findUniqueOrThrow({
      where: {
        email: data.email,
      },
    });

    if (data.password !== user.password) {
      throw new HttpException('Senha incorreta', HttpStatus.UNAUTHORIZED);
    }
    return user
  }

  async signInProfessor(data: SignInUserDto ) {
    const user = await this.prisma.professor.findUniqueOrThrow({
      where: {
        email: data.email,
      },
    });

    if (data.password !== user.password) {
      throw new HttpException('Senha incorreta', HttpStatus.UNAUTHORIZED)
    }
    return user
  }
}
