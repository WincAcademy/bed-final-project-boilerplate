import { PrismaClient } from "@prisma/client";
import NotFoundError from "../../error/notFoundError.js";

const updateReview = async (id, userId, propertyId, rating, comment) => {
  const prisma = new PrismaClient();
  const updatedReview = await prisma.review.updateMany({
    where: {
      id,
    },
    data: {
      userId,
      propertyId,
      rating,
      comment,
    },
  });

  if (!updatedReview || updatedReview.count === 0) {
    throw new NotFoundError("Review", id);
  }

  return {
    message: `Review with id ${id} was updated!`,
  };
};

export default updateReview;
