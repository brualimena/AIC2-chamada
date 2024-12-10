import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { SignUpUserDto } from './dtos/signup-user.dto';
import { SignInUserDto } from './dtos/signin-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/signup-aluno')
  async signupAluno(@Body(new ValidationPipe()) criarAlunoDto: SignUpUserDto) {
    return await this.appService.signupAluno(criarAlunoDto);
  }

  @Post('/signup-professor')
  async signupProfessor(
    @Body(new ValidationPipe()) criarProfessorDto: SignUpUserDto,
  ) {
    return await this.appService.signupProfessor(criarProfessorDto);
  }

  @Post('/signin-aluno')
  async signinAluno(@Body(new ValidationPipe()) signInAlunoDto: SignInUserDto) {
    return await this.appService.signInAluno(signInAlunoDto);
  }

  @Post('/signin-professor')
  async signinProfessor(
    @Body(new ValidationPipe()) signInProfessorDto: SignInUserDto,
  ) {
    return await this.appService.signInProfessor(signInProfessorDto);
  }
}