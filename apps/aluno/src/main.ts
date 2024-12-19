import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AlunoModule } from './aluno.module';

async function bootstrap() {
  const app = await NestFactory.create(AlunoModule);
  const configService = app.get(ConfigService)
  
  const port = configService.get('HTTP_PORT'); 
  console.log(`Servidor rodando na porta: ${port}`); 

  await app.listen(port);
}
bootstrap();