import { Test, TestingModule } from '@nestjs/testing';
import { ProdventaService } from './prodventa.service';

describe('ProdventaService', () => {
  let service: ProdventaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProdventaService],
    }).compile();

    service = module.get<ProdventaService>(ProdventaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
