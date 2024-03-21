import { Router, Request, Response, NextFunction } from 'express';
import { constants } from "http2";
import { HTTP_BAD_REQUEST } from "../constants/http_status";
import { OrderStatus } from "../constants/order_status";
import { OrderModel } from "../shared/models/order.model";
import auth from '../middlewares/auth.mid';

// Define a custom interface for the Request object that includes the 'user' property
interface CustomRequest extends Request {
  user?: any; // Modify the type according to your actual 'user' object type
}

const asyncHandler = (fn: (req: CustomRequest, res: Response, next: NextFunction) => Promise<any>) => {
  return (req: CustomRequest, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

const getNewOrderForCurrentUser = async (req: CustomRequest) => {
  return await OrderModel.findOne({
    user: req.user.id,
    status: OrderStatus.NEW
  });
};

const router = Router();

router.use(auth);

router.post('/create',
  asyncHandler(async (req: CustomRequest, res: Response) => {
    const requestOrder = req.body;

    if (requestOrder.items.length <= 0) {
      res.status(HTTP_BAD_REQUEST).send('Cart Is Empty!');
      return;
    }

    await OrderModel.deleteOne({
      user: req.user.id, // 'user' property should now be accessible
      status: OrderStatus.NEW
    });

    const newOrder = new OrderModel({ ...requestOrder, user: req.user.id });
    await newOrder.save();
    res.send(newOrder);
  })
)


router.get('/newOrderForCurrentUser', asyncHandler( async ( req,res ) => {
  const order= await getNewOrderForCurrentUser(req);
  if(order) res.send(order);
  else res.status(HTTP_BAD_REQUEST).send();
}))

router.post('/pay', asyncHandler( async (req:any, res) =>{
  const {paymentId} = req.body;
  const order = await getNewOrderForCurrentUser(req);
  if(!order){
    res.status(HTTP_BAD_REQUEST).send('Order Not Found!');
    return;
  }

  order.paymentId = paymentId;
  order.status = OrderStatus.PAYED;
  await order.save();

  res.send(order._id);
}))

router.get('/track/:id', asyncHandler( async (req, res) => {
  const order = await OrderModel.findById(req.params['id']);
  res.send(order);
}))
export default router;
