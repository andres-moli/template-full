import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VisitComent } from './entities/visit-coment.entity';
import { VisitComentService } from './services/visit-coment.service';
import { VisitComentResolver } from './resolver/visit-coment.resolver';
import { VisitModule } from '../visit/visit.module';



@Module({
  providers: [VisitComentService, VisitComentResolver],
  imports:[
    TypeOrmModule.forFeature([VisitComent]),
    forwardRef(()=> VisitModule)
  ],
  exports:[VisitComentService]
})
export class VisitComentModule {}
