import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AuthModule } from './auth.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  const configService = app.get(ConfigService)
  
  const port = configService.get('HTTP_PORT'); 
  console.log(`Servidor rodando na porta: ${port}`); 

  await app.listen(port);
}
bootstrap();
