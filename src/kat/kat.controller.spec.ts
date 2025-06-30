import { Test, TestingModule } from '@nestjs/testing';
import { KatController } from './kat.controller';
import { KatService } from './kat.service';

describe('KatController', () => {
  let controller: KatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KatController],
      providers: [KatService],
    }).compile();

    controller = module.get<KatController>(KatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
