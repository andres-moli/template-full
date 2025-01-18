import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { VisitModule } from './visit/visit.module';
import { VisitComentModule } from './visit-coment/visit-coment.module';
import { VisitTypeModule } from './visit-type/visit-type.module';
import { FletesModule } from './fletes/fletes.module';

@Module({
  imports: [VisitModule, VisitComentModule,VisitTypeModule, FletesModule]
})
export class SellerModule {}
