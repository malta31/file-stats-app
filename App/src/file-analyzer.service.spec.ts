import { Test } from '@nestjs/testing';
import { FileAnalyzerService } from './file-analyzer.service';

describe('FileAnalyzerService', () => {
  let service: FileAnalyzerService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [FileAnalyzerService],
    }).compile();

    service = moduleRef.get<FileAnalyzerService>(FileAnalyzerService);
  });

  describe('analyzeFile', () => {
    it('should analyze file content correctly', async () => {
      const path = './testfile.txt';
      const result = await service.analyzeFile(path);

      expect(result.totalWords).toBe(122);
      expect(result.totalLetters).toBe(769);
      expect(result.totalSpaces).toBe(111);
      expect(result.repeatedWords).toEqual([ { profumando: 11 }, { "l'aria": 11 }, { 'estiva.': 11 } ]);
    });
  });
});
