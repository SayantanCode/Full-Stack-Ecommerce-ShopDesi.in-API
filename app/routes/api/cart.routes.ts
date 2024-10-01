import express from "express";
import cartController from "../../modules/webservice/cart.controller";
import * as auth from "../../middleware/auth";
const router = express.Router();
router.get("/", auth.verifyUserToken, cartController.getCarts);
router.get("/add/:productId", auth.verifyUserToken, cartController.createCart);
router.get("/update/increase/:productId", auth.verifyUserToken, cartController.createCart);
router.delete("/update/decrease/:productId", auth.verifyUserToken, cartController.substractCart);
router.delete("/remove/:productId", auth.verifyUserToken, cartController.deleteCart);
export default router;