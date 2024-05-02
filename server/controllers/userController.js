import User from "../models/userModel.js";
import AppError from "../utils/appError.js";

export const createUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);

    if (!newUser)
      return res.status(404).json({
        status: "fail",
        message: "User data not found",
      });

    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    next(err);
  }
};

export const getUsers = async (req, res, next) => {
  try {
    const user = await User.find({});

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    next(err);
  }
};

export const getOne = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    next(new AppError("No user found with that ID", 404));
  }
};

export const updateOne = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    next(new AppError("No user found with that ID", 404));
  }
};

export const deleteOne = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    next(new AppError("No user found with that ID", 404));
  }
};
