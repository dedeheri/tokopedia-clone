import express, { Express } from "express";

import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

// database
import connection from "./database/mongo.database";

// contollers
import storesRoute from "./routes/store.routes";
import productsRoute from "./routes/products.routes";
import accountsRoute from "./routes/account.routes";
import usersRoute from "./routes/user.routes";
import cartRoute from "./routes/cart.routes";
import paymentRoute from "./routes/payment.routes";
import searchRoute from "./routes/search.router";

// config
import config from "./config";

const running = async () => {
  const server: Express = express();

  try {
    // dot env
    dotenv.config();

    // cookie parser
    server.use(cookieParser("Cookie-secret"));

    // cors
    server.use(cors(config.corsConfig()));

    // support parsing of application/json type post data
    server.use(bodyParser.json());

    //support parsing of application/x-www-form-urlencoded post data
    server.use(bodyParser.urlencoded({ extended: true }));

    // database connection
    connection();

    // router endpoint
    server.use(storesRoute);
    server.use(accountsRoute);
    server.use(usersRoute);
    server.use(productsRoute);
    server.use(cartRoute);
    server.use(paymentRoute);
    server.use(searchRoute);

    // Error handlers
    // Catch 404 and forward to error handler
    server.use(function (req, res, next) {
      res.status(404).json({ message: "url not found" });

      next();
    });

    server.listen(process.env.PORT, () =>
      console.log(
        `[server] : Server is running at http://localhost:${process.env.PORT}`
      )
    );
  } catch (error: any) {
    console.log(`[server] : running server error`);
    throw new Error(error);
  }
};

running();
