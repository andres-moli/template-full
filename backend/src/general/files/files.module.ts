import { Global, Module } from '@nestjs/common';
import { FilesService } from './services/files.service';
import { FilesManagerService } from './services/files-manager.service';
import { FilesResolver } from './resolvers/files.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileInfo } from './entities/file-info.entity';
import { MulterModule } from '@nestjs/platform-express';
import { HttpModule } from '@nestjs/axios';
import { GridFsMulterConfigService } from './services/multer-config.service';
import { FilesController } from './controllers/files.controller';
@Global()
@Module({
  providers: [FilesResolver, FilesService, FilesManagerService, GridFsMulterConfigService],
  imports:[TypeOrmModule.forFeature([FileInfo]),
    MulterModule.registerAsync({
      useClass: GridFsMulterConfigService,
    }),
    HttpModule
  ],
  controllers: [FilesController],
  exports:[FilesService]
})
export class FilesModule {}
