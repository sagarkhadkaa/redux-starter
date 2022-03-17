import store from "./store";
import { bugAdded, bugResolved } from "./actions";

// const unsubscribe = store.subscribe(() => {
//     console.log("Store Changed", store.getState());
// });
store.dispatch(bugAdded("Bug 1"));
// unsubscribe();
store.dispatch(bugResolved(1));
// actions.dispatch(bugRemoved(1));
console.log(store.getState());
