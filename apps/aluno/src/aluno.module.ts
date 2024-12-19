import { Module } from '@nestjs/common';
import { PrismaModule } from 'database/src/prisma.module';
import { AlunoController } from './aluno.controller';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import { AlunoService } from './aluno.service';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/aluno/.env',
      validationSchema: Joi.object({
        HTTP_PORT: Joi.number().required(),        
        DATABASE_URL: Joi.string().required(),
      })
    })  
  ],
  controllers: [AlunoController],
  providers: [AlunoService],
})
export class AlunoModule {}