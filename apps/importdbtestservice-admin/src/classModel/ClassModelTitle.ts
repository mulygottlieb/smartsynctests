import { ClassModel as TClassModel } from "../api/classModel/ClassModel";

export const CLASSMODEL_TITLE_FIELD = "muly";

export const ClassModelTitle = (record: TClassModel): string => {
  return record.muly || String(record.id);
};
