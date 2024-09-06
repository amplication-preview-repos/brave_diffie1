/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DataWhereUniqueInput } from "./DataWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DataUpdateInput } from "./DataUpdateInput";

@ArgsType()
class UpdateDataArgs {
  @ApiProperty({
    required: true,
    type: () => DataWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DataWhereUniqueInput)
  @Field(() => DataWhereUniqueInput, { nullable: false })
  where!: DataWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DataUpdateInput,
  })
  @ValidateNested()
  @Type(() => DataUpdateInput)
  @Field(() => DataUpdateInput, { nullable: false })
  data!: DataUpdateInput;
}

export { UpdateDataArgs as UpdateDataArgs };
