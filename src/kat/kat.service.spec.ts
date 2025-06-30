import { Test, TestingModule } from '@nestjs/testing';
import { KatService } from './kat.service';

describe('KatService', () => {
  let service: KatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KatService],
    }).compile();

    service = module.get<KatService>(KatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
