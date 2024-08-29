import { Test, TestingModule } from '@nestjs/testing';
import { ProdventaController } from './prodventa.controller';

describe('ProdventaController', () => {
  let controller: ProdventaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProdventaController],
    }).compile();

    controller = module.get<ProdventaController>(ProdventaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
