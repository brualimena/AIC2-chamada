import { Module } from '@nestjs/common';
import { ProfessorController } from './professor.controller';
import { ProfessorService } from './professor.service';
import { PrismaModule } from 'database/src/prisma.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/professor/.env',
      validationSchema: Joi.object({
        HTTP_PORT: Joi.number().required(),        
        DATABASE_URL: Joi.string().required(),
      })
    })  
  ],
  controllers: [ProfessorController],
  providers: [ProfessorService],
})
export class ProfessorModule {}
