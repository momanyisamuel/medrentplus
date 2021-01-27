import mongoose from "mongoose";

const medItemSchema = new mongoose.Schema(
  {
    itemName: String,
    itemModel: String,
    itemBrand: String,
    itemInfo: String,
    itemDestinationAdress: String,
    itemReservePeriod: String,
    itemPaymentMethod: String,
    itemPaymentAmount: Number,
    itemRentedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    itemStatus: String,
    itemCategory: String,
  },
  { timestamps: true }
);

export const MedItem = mongoose.model("medItem", medItemSchema);
