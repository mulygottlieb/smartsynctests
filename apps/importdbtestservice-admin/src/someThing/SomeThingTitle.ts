import { SomeThing as TSomeThing } from "../api/someThing/SomeThing";

export const SOMETHING_TITLE_FIELD = "newfield";

export const SomeThingTitle = (record: TSomeThing): string => {
  return record.newfield || String(record.id);
};
