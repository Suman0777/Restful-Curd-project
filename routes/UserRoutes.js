import express from "express";
import { fetch, create, update, deleteUser} from "../controller/userController.js";

//to create all the route
const route = express.Router();

//to create a user information
route.post("/create", create);

//to get the all user info
route.get("/searchUser", fetch);

//to make changes in the user
route.put("/update/:id", update);

//to delete the user
route.delete("/delete/:id", deleteUser);

export default route;
