import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProprovController } from 'src/controller/proprov/proprov.controller';
import { Proprov } from 'src/entities/proprov.entity';
import { ProprovService } from 'src/service/proprov/proprov.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Proprov])
    ],
    controllers: [ProprovController],
    providers: [ProprovService],
})
export class ProprovModule {}
