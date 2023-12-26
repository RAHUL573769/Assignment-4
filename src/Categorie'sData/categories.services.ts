import { ICategory } from "./categories.interface";
import { Categories } from "./categories.model";

const createACategory = async (
  categoriesPayload: ICategory
): Promise<ICategory> => {
  const result = await Categories.create(categoriesPayload);
  return result;
};
const receiveASingleCategory = async (): Promise<ICategory[]> => {
  const result = await Categories.find().populate({
    path: "user",
    select: " username email"
  });

  // const result = await Review.find().populate({
  //   path: 'user',
  //   select: 'name photo',
  // })
  return result;
};

export const CategoryServices = { createACategory, receiveASingleCategory };
