import { Test, TestingModule } from '@nestjs/testing';
import { RguUsuarioController } from './rgu_usuario.controller';

describe('RguUsuarioController', () => {
  let controller: RguUsuarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RguUsuarioController],
    }).compile();

    controller = module.get<RguUsuarioController>(RguUsuarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
