import { Test, TestingModule } from '@nestjs/testing';
import { ProprovController } from './proprov.controller';

describe('ProprovController', () => {
  let controller: ProprovController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProprovController],
    }).compile();

    controller = module.get<ProprovController>(ProprovController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
