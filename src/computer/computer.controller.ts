import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller('computer')
export class ComputerController {
  constructor(
    private diskService: DiskService,
    private cpuService: CpuService,
  ) {}
  @Get()
  run() {
    return {
      cpu: this.cpuService.compute(1, 2),
      disk: this.diskService.getData(),
    };
  }
}
