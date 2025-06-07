import {
  Customer,
  DeliveryPartner,
  Branch,
  Order,
} from "../../models/index.js";

export const createOrder = async (req, reply) => {
  try {
    const { userId } = req.user;
    const { items, branch, totalPrice } = re1.body;

    const customerData = await Customer;
    const BranchData = await Branch;
    if (!customerData) {
      return reply.status(404).send({ message: "Customer not found" });
    }

    const newOrder = new Order({
      customer: userId,
      items: items.map((item) => ({
        id: item.id,
        item: item.item,
        count: item.count,
      })),
      branch,
      totalPrice,
      deliveryLocation: {
        latitude: customerData.liveLocation.latitude,
        longitude: customerData.liveLocation.longitude,
        address: customerData.address || "No address available",
      },
      pickupLocation: {
        latitude: BranchData.liveLocation.latitude,
        longitude: BranchData.liveLocation.longitude,
        address: BranchData.address || "No address available",
      },
    });

    const savedData = await newOrder.save();
    return reply.status(201).send(savedData);
  } catch (error) {
    console.log(err);
    return reply.status(500).send({ message: "Failed to create order", error });
  }
};

export const confirmOrder = async (req, reply) => {
  try {
    const { orderId } = req.params;
    const { userId } = req.user;
    const { deliveryPartner } = req.body;

    const deliveryPerson = await DeliveryPartner.findById(userId);
    if (!deliveryPerson) {
        return reply.status(404).send({ message: "Delivery Person not found" });

    }
    const order = await Order.findById(orderId);
    if(!order) return reply.status(404).send({ message: "Order not found" });

    if(order.status !== "available" ) {
        return reply.status(400).send({ message: "Order is not available" });
    }

    order.status = "confirmed";

    order.deliveryPartner = userId;
    order.deliveryPersonLocation = {
        latitude: deliveryPersonLocation?.latitude,
        longitude: deliveryPersonLocation?.longitude,
        address: deliveryPersonLocation.address || "",
    };

    req.server.io.to(orderId).emit("orderConfirmed", order);
    await order.save();

    return reply.send(order);

  } catch (error) {
    return reply
      .status(500)
      .send({ message: "Failed to confirm Order", error });
  }
};
