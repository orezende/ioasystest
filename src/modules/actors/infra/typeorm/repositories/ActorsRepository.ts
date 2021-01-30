import ICreateActorDTO from '@modules/actors/dtos/ICreateActorDTO';
import IActorsRepository from '@modules/actors/repositories/IActorsRepository';
import { Repository } from 'typeorm';
import Actor from '../entities/Actor';

export default class ActorsRepository implements IActorsRepository {
  private ormRepository: Repository<Actor>;

  public async create({ name }: ICreateActorDTO): Promise<Actor> {
    const actorTocreate = this.ormRepository.create({
      name,
    });

    return this.ormRepository.create(actorTocreate);
  }

  findById(id: string): Promise<Actor | undefined> {
    return this.ormRepository.findOne(id);
  }
}