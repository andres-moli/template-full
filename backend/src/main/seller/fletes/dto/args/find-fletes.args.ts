import { ArgsType, Field, InputType } from '@nestjs/graphql';
import { DateFilter } from 'src/patterns/crud-pattern/classes/inputs/date-filter.input';
import { StringFilter } from 'src/patterns/crud-pattern/classes/inputs/string-filter.input';
import { OrderByTypes } from 'src/patterns/crud-pattern/enums/order-by-type.enum';
import { FindArgs } from 'src/patterns/crud-pattern/mixins/find-args.mixin';



@InputType({ isAbstract: true })
class FindFletesWhere {
  @Field(() => StringFilter)
  status: StringFilter

  @Field(() => StringFilter)
  name: StringFilter

  @Field(() => StringFilter)
  description: StringFilter
}

@InputType({ isAbstract: true })
class FindFletesOrderBy {
  @Field(() => OrderByTypes)
  createdAt: OrderByTypes;
}

@ArgsType()
export class FindFletesArgs extends FindArgs(
  FindFletesWhere,
  FindFletesOrderBy,
) {
}
