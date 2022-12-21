import{ createStore} from "redux";
import tableReducer from "./Reducer/TableReducer";


let store = createStore(tableReducer);

export default store;
