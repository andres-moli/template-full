import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';
import { CrudEntity } from '../../../../patterns/crud-pattern/entities/crud-entity';

@Entity('msg_profile')
@ObjectType()
export class Profile extends CrudEntity {

  @Column()
  @Field(() => String)
  description: string;

  @Column()
  @Field( () => String)
  firstName: string;

  @Column()
  @Field( () => String)
  lastName: string;

  @Column()
  @Field( () => Int)
  city: number;

  @Column()
  @Field( () => Int)
  region: number;

  @Column()
  @Field( () => String)
  document: string;

  @Column()
  @Field( () => String)
  email: string;

  @Column({ nullable: true })
  @Field( () => String, { nullable:true })
  phone?: string;

  @Column()
  @Field(() => ID)
  externalId: string;

  @Column({ nullable: true })
  @Field(() => String, { nullable:true })
  stateAws?: string;
}
