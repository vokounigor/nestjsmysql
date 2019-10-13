import { Injectable, Get } from '@nestjs/common';
import { SampleService } from './sample.service';

@Injectable()
export class SampleController {
    constructor(private readonly sampleService: SampleService){}

    @Get()
    findAll() {
        return this.sampleService.findAll();
    }
}
