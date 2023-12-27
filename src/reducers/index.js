import { combineReducers } from "redux";
import WomensReducers from "./WomensReducers"
import AccessoiresReducers from "./AccessoiresReducers"
import MensReducers from "./MensReducers"
import ShoesReducers from "./ShoesReducers"

export default combineReducers({
    WomensReducers,
    AccessoiresReducers,
    MensReducers,
    ShoesReducers
})