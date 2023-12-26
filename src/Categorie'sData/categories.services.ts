import { ICategory } from "./categories.interface";
import { Categories } from "./categories.model";

const createACategory = async (
  categoriesPayload: ICategory
): Promise<ICategory> => {
  const result = await Categories.create(categoriesPayload);
  return result;
};
const receiveAllSingleCategory = async (): Promise<ICategory[]> => {
  const result = await Categories.find();

  // const result = await Review.find().populate({
  //   path: 'user',
  //   select: 'name photo',
  // })
  return result;
};
const receiveSingleCategory = async (id: string): Promise<ICategory | null> => {
  const result = await Categories.findById(id);

  // const result = await Review.find().populate({
  //   path: 'user',
  //   select: 'name photo',
  // })
  return result;
};
export const CategoryServices = {
  createACategory,
  receiveAllSingleCategory,
  receiveSingleCategory
};
