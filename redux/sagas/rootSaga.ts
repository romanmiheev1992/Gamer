
import axios from "axios";
import { spawn, take ,takeEvery, put, call, apply, select } from "redux-saga/effects";
import { fetchForm, signIn } from "../../helpers/api";
import { FormAction } from "../types/formType";
import { StatusAction } from "../types/statusType";


export function* fetchData() {
        const data = yield select(data => data.form)
        yield call(fetchForm, data)
    
}

export function* formSignUp() {
    try {
        const data = yield select(data => data.form)
        yield call(signIn, data)
    } catch(e: any) {
        yield put({type: StatusAction.GET_STATUS, payload: e.response.data})
    }
}




export function* sagaWatcher() {
   yield takeEvery(FormAction.FORM_SUBMIT, fetchData)
   yield takeEvery(FormAction.FORM_SIGN_UP, formSignUp)
}

export function* rootSaga() {
    yield spawn(sagaWatcher)
}