import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sample } from './sample.entity';

@Injectable()
export class SampleService {
  constructor(
    @InjectRepository(Sample)
    private readonly sampleRepository: Repository<Sample>,
  ) {}

  // Sample findAll() function
  async findAll(): Promise<Sample[]> {
    return await this.sampleRepository.find();
  }

  // Sample find specific item
  // async getPhoto(_id: number): Promise<Photo[]> {
  //  const data = await this.photoRepository.find({
  //    where: [{ id: _id }],
  //  });
  //  if (data.length === 0) {
  //    throw new NotFoundException('Could not find photo with that id');
  //  }
  //  return data;
  // }

  /* How to "write" a query

  async insertPhoto(
    name: string,
    description: string,
    filename: string,
    views: number,
    isPublished: boolean,
  ) {
    return await this.photoRepository
      .createQueryBuilder()
      .insert()
      .into(Photo)
      .values([{ name, description, filename, views, isPublished }])
      .execute();
  }

  */
}
