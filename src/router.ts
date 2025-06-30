import express from 'express';
import authRouter from "./app/v1/auth/route" 
import countryRouter from "./app/v1/country/route" 
import propertyRouter from "./app/v1/property/route" 
import categoryRouter from "./app/v1/category/route" 
import listedForRouter from "./app/v1/listed_for/route" 
import reviewsRouter from "./app/v1/reviews/route" 

const router = express.Router();

router.use("/auth", authRouter) 
router.use("/country", countryRouter)  
router.use("/property", propertyRouter)  
router.use("/category", categoryRouter)  
router.use("/listed_for", listedForRouter)  
router.use("/reviews", reviewsRouter)  

export default router;