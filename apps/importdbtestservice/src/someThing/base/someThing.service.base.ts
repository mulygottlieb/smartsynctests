/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, SomeThing, Customer } from "@prisma/client";

export class SomeThingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SomeThingCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.SomeThingCountArgs>
  ): Promise<number> {
    return this.prisma.someThing.count(args);
  }

  async findMany<T extends Prisma.SomeThingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SomeThingFindManyArgs>
  ): Promise<SomeThing[]> {
    return this.prisma.someThing.findMany(args);
  }
  async findOne<T extends Prisma.SomeThingFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SomeThingFindUniqueArgs>
  ): Promise<SomeThing | null> {
    return this.prisma.someThing.findUnique(args);
  }
  async create<T extends Prisma.SomeThingCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SomeThingCreateArgs>
  ): Promise<SomeThing> {
    return this.prisma.someThing.create<T>(args);
  }
  async update<T extends Prisma.SomeThingUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SomeThingUpdateArgs>
  ): Promise<SomeThing> {
    return this.prisma.someThing.update<T>(args);
  }
  async delete<T extends Prisma.SomeThingDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SomeThingDeleteArgs>
  ): Promise<SomeThing> {
    return this.prisma.someThing.delete(args);
  }

  async getCustomer(parentId: string): Promise<Customer | null> {
    return this.prisma.someThing
      .findUnique({
        where: { id: parentId },
      })
      .customer();
  }
}
