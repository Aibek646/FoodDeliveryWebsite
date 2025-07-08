// import fs from "fs";
// import foodModel from "../models/foodModel.js";
// import { response } from "express";

// // add food item;

// const addFood = async (req, res) => {
//   let image_filename = `${req.file.filename}`;
//   const food = new foodModel({
//     name: req.body.name,
//     description: req.body.description,
//     price: req.body.price,
//     category: req.body.category,
//     image: image_filename,
//   });
//   try {
//     await food.save();
//     res.json({ success: true, message: "Food Added" });
//   } catch (error) {
//     console.log(error);
//     res.json({
//       success: false,
//       message: "Error",
//     });
//   }
// };

// export { addFood };
import fs from "fs";
import foodModel from "../models/foodModel.js";

// Add food item
const addFood = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image file is required",
      });
    }

    const image_filename = req.file.filename;

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      category: req.body.category,
      image: image_filename,
    });

    await food.save();

    res.status(201).json({
      success: true,
      message: "Food added successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error while adding food",
    });
  }
};

export { addFood };
