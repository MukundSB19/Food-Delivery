import { authRoutes } from "./auth.js"
import { orderRoutes } from "./order.js"
import { categoryRoutes, productRoutes } from "./products.js"

const prefix = "/api/v1";

export const registerRoute = async (fastify) => {
    fastify.register(authRoutes, { prefix: prefix })
    fastify.register(productRoutes, { prefix: prefix })
    fastify.register(categoryRoutes, { prefix: prefix })
    fastify.register(orderRoutes, { prefix: prefix })
}
