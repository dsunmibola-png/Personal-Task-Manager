//utils is the short form kof utilities which refers to a collection of helper modules designed to perform common tasks on multiple functions.

// These taskss often includes tings like data validation, foematting or othe repitative operations that are used across differnt parts  of the application.  

import mongoose from "mongoose";

export const validateID = (id: string): boolean => {
  return mongoose.Types.ObjectId.isValid(id);
};