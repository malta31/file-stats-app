import {
  BadRequestException,
  Controller,
  Get,
  Query,
} from '@nestjs/common';
import { FileAnalyzerService } from './file-analyzer.service';

@Controller('file-stats')
export class FileStatsController {
  constructor(private readonly fileAnalyzerService: FileAnalyzerService) {}

  @Get()
  async getFileStats(@Query('url') url: string): Promise<any> {
    if (!url) {
      throw new BadRequestException('URL is required');
    }
    
    try {
      return this.fileAnalyzerService.analyzeFile(url);
    } catch (err) {
      console.error(err);

      return err;
    }
  }
}
