import { Test, TestingModule } from '@nestjs/testing';
import { RguUsuarioService } from './rgu_usuario.service';

describe('RguUsuarioService', () => {
  let service: RguUsuarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RguUsuarioService],
    }).compile();

    service = module.get<RguUsuarioService>(RguUsuarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
