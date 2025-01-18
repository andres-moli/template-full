import { Module } from '@nestjs/common';
import { IdentificationService } from './identification.service';

@Module({
  providers: [IdentificationService]
})
export class IdentificationModule {}
