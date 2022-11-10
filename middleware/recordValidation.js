import createError from "http-errors";

export const validateARecord = (req, res, next) => {
  try {
    const record = req.body;
    if (record.title && record.artist &&
      record.title.length > 0 && record.artist.length > 0) {
      next();
    } else {
      next(
        createError(
          400,
          "Please make sure that record have at least Author and Title."
        )
      );
    }
  } catch (err) {
    next(err);
  }
};
