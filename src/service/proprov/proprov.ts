import { Test, TestingModule } from '@nestjs/testing';
import { ProprovService } from './proprov.service';

describe('ProprovService', () => {
  let service: ProprovService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProprovService],
    }).compile();

    service = module.get<ProprovService>(ProprovService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
