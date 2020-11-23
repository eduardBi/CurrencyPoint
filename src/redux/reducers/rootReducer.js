import {combineReducers} from 'redux'

import  Reviews from './review'
import  isLogged from './isLogged'
import  coments from './coments'

let rootReducer=combineReducers({Reviews,isLogged,coments});
export default rootReducer;
