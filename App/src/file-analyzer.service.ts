import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import axios from 'axios';

@Injectable()
export class FileAnalyzerService {
  async analyzeFile(path: string): Promise<any> {
    try {
      let content: string;

      if (path.startsWith('http')) {
        const response = await axios.get(path);
        content = response.data;
      } else {
        content = fs.readFileSync(path, 'utf8');
      }

      const words = content.split(/\s+/).filter((word) => word !== '');
      const letters = content.replace(/\s/g, '').length;
      const spaces = content.split(' ').length - 1;

      const wordCounts = this.countWordOccurrences(words);
      const repeatedWords = Object.entries(wordCounts)
        .filter(([_, count]) => count > 10)
        .map(([key, value]) => ({ [key]: value }));

      return {
        totalWords: words.length,
        totalLetters: letters,
        totalSpaces: spaces,
        repeatedWords,
      };
    } catch (err) {
      console.error(err);

      return err;
    }
  }

  private countWordOccurrences(words: string[]): { [key: string]: number } {
    const wordCount: { [key: string]: number } = {};

    words.forEach((word) => {
      if (word in wordCount) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }
    });

    return wordCount;
  }
}
