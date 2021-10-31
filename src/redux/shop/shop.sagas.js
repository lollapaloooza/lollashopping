import {takeLatest, call, put, all} from 'redux-saga/effects';
import ShopActionTypes from "./shop.types";
import {convertCollectionsSnapshotToMap, firestore} from "../../firebase/firebase.utils";
import {fetchCollectionsFailure, fetchCollectionsSuccess} from "./shop.actions";

export function* fetchCollectionsAsync() {
   try {
       const collectionsRef = firestore.collection('collections');
       const snapshot = yield collectionsRef.get();
       const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
       yield put(fetchCollectionsSuccess(collectionsMap));

   } catch (e) {
       yield put(fetchCollectionsFailure(e.message));
   }
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}

export function* shopSagas() {
    yield all([
        call(fetchCollectionsStart)
    ])
}