/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DataService } from "../data.service";
import { DataCreateInput } from "./DataCreateInput";
import { Data } from "./Data";
import { DataFindManyArgs } from "./DataFindManyArgs";
import { DataWhereUniqueInput } from "./DataWhereUniqueInput";
import { DataUpdateInput } from "./DataUpdateInput";

export class DataControllerBase {
  constructor(protected readonly service: DataService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Data })
  async createData(@common.Body() data: DataCreateInput): Promise<Data> {
    return await this.service.createData({
      data: data,
      select: {
        content: true,
        createdAt: true,
        createdBy: true,
        id: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Data] })
  @ApiNestedQuery(DataFindManyArgs)
  async dataItems(@common.Req() request: Request): Promise<Data[]> {
    const args = plainToClass(DataFindManyArgs, request.query);
    return this.service.dataItems({
      ...args,
      select: {
        content: true,
        createdAt: true,
        createdBy: true,
        id: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Data })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async data(
    @common.Param() params: DataWhereUniqueInput
  ): Promise<Data | null> {
    const result = await this.service.data({
      where: params,
      select: {
        content: true,
        createdAt: true,
        createdBy: true,
        id: true,
        typeField: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Data })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateData(
    @common.Param() params: DataWhereUniqueInput,
    @common.Body() data: DataUpdateInput
  ): Promise<Data | null> {
    try {
      return await this.service.updateData({
        where: params,
        data: data,
        select: {
          content: true,
          createdAt: true,
          createdBy: true,
          id: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Data })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteData(
    @common.Param() params: DataWhereUniqueInput
  ): Promise<Data | null> {
    try {
      return await this.service.deleteData({
        where: params,
        select: {
          content: true,
          createdAt: true,
          createdBy: true,
          id: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}