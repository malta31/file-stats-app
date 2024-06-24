import { Module } from '@nestjs/common';
import { FileStatsController } from './file-stats.controller';
import { FileAnalyzerService } from './file-analyzer.service';

@Module({
  imports: [],
  controllers: [FileStatsController],
  providers: [FileAnalyzerService],
})
export class AppModule {}
