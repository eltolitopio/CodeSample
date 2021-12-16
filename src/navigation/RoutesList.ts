import { FC } from "react";
import Home from "../pages/Home/index";

interface RoutesInterface {
  [key: string]: FC;
}

const RoutesList: RoutesInterface = {
  "/": Home,
};

export default RoutesList;
