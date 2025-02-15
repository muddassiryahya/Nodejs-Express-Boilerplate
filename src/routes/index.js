import { Router } from "express";
import userRoutes from "../modules/user/routes.js";
import productRoutes from "../modules/product/routes.js";
import categoryRoutes from "../modules/category/routes.js";

const router = Router();

router.use('/user', userRoutes);
router.use('/product', productRoutes);
router.use('/category', categoryRoutes);



export default router;
