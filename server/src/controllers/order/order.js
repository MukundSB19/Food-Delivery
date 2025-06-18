//? this file manage the orders of the app

import {
  Customer,
  DeliveryPartner,
  Branch,
  Order,
} from "../../models/index.js"; //! this is we importing because this will used to read/write data

export const createOrder = async (req, reply) => {
  //! this function is for to create to new order and this (req) contains body,user info,etc
  try {
    const { userId } = req.user; //! req.user contains data from user after auth
    const { items, branch, totalPrice } = req.body; //! this data will come from the frontend request body

    const customerData = await Customer.findById(userId); //! these two lines fetch data one from customer and other from branch and why coz we need live location and address from both to create an order
    const BranchData = await Branch.findById(branch);
    if (!customerData) {
      return reply.status(404).send({ message: "Customer not found" });
    }

    const newOrder = new Order({
      //! we are creating a new order document using the mongoose model
      customer: userId,
      items: items.map((item) => ({
        //!items.map() reshapes the structure into what DB expects
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

    const savedData = await newOrder.save(); //! this will saved data .save() commits the new document
    return reply.status(201).send(savedData); //! (201) means "created"
  } catch (error) {
    console.log(err);
    return reply.status(500).send({ message: "Failed to create order", error });
  }

  //! always wrap DB operations in try-catch to avoid crashing server
};

export const confirmOrder = async (req, reply) => {
  //! this function is for conform the food delivery order by delivery partner
  try {
    const { orderId } = req.params;
    const { userId } = req.user;

    const deliveryPerson = await DeliveryPartner.findById(userId);
    if (!deliveryPerson) {
      return reply.status(404).send({ message: "Delivery Person not found" });
    }
    const order = await Order.findById(orderId);
    if (!order) return reply.status(404).send({ message: "Order not found" });

    if (order.status !== "available") {
      return reply.status(400).send({ message: "Order is not available" });
    }

    order.status = "confirmed"; //! it will update confirmed

    order.deliveryPartner = userId; //! it will set which delivery partner is assigned to this order by saving their userId into the order
    order.deliveryPersonLocation = {
      //! we are storing the current location of the delivery partner
      latitude: deliveryPerson?.latitude,
      longitude: deliveryPerson?.longitude,
      address: deliveryPerson.address || "",
    };

    req.server.io.to(orderId).emit("orderConfirmed", order); //! this gives us access to Socket.io the tool that lets us send real-time messages from server to client(frontend)
    //! .to(orderId) it means send the message only to the people who are watching this order
    //! .emit("orderConfirmed",order) this sends a message order confirmed to the people who are watching the order and also updated it in order data
    await order.save(); //! it will  save the updated order to the database

    return reply.send(order); //! return the updated order in the response so the client sees the changes
  } catch (error) {
    return reply
      .status(500)
      .send({ message: "Failed to confirm Order", error });
  }
};

export const updateOrderStatus = async (req, reply) => {
  //!When a delivery person updates the status of an order (like "picked up", "on the way", or "delivered"),
  try {
    const { orderId } = req.params; //!
    const { status, deliveryPersonLocation } = req.body;
    const { userId } = req.user;

    const deliveryPerson = await DeliveryPartner.findById(userId);
    if (!deliveryPerson) {
      return reply.status(404).send({ message: "Delivery person not found" });
    }

    const order = await Order.findById(orderId);
    if (!order) return reply.status(404).send({ message: "Order not found" });

    if (order.deliveryPartner.toString() !== userId) {
      //! This line is checking if the logged-in delivery partner is the one assigned to this order.
      return reply.status(403).send({ message: "Unauthorized" });
    }

    order.status = status;
    order.deliveryPersonLocation = deliveryPersonLocation;
    await order.save();

    req.server.io(orderId.emit("liveTrackingUpdates", order));

    return reply.send(order);
  } catch (error) {
    return reply
      .status(500)
      .send({ message: "Failed to update order status", error });
  }
};

export const getOrders = async (req, reply) => {
  try {
    const { status, consumerId, deliveryPartnerId, branchId } = req.query;
    let query = {};

    if (status) query.status = status;
    if (customerId) query.customer = customerId;
    if (deliveryPartnerId) {
      query.delivveryPartner = deliveryPartnerId;
      query.brach = branchId;
    }

    const orders = await Order.find(query).populate(
      "customer branch items.item delivveryPartner"
    );

    return reply.send(orders);
  } catch (error) {
    return reply
      .status(500)
      .send({ message: "Failed to retrieve orders", error });
  }
};

export const getOrderById = async (req, reply) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findById(orderId).populate(
      "customer branch items.item deliveryPartner"
    );
    if (!order) {
      return reply.status(404).send({ message: "Order not found" });
    }

    return reply.send(order);
  } catch (error) {
    return reply
      .status(500)
      .send({ message: "Failed to retrieve order", error });
  }
};
