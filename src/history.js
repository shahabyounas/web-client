import { createHashHistory } from 'history';


const history = createHashHistory();
const storage = window.sessionStorage;
storage.setItem('previousUrl', JSON.stringify([]));

const originalPushState = history.push;
const originalGoBack = history.goBack;

history.push = (path, state) => {
  let stack = JSON.parse(storage.getItem('previousUrl'));
  stack = [...stack, window.location.href];

  storage.setItem('previousUrl', JSON.stringify(stack));
  originalPushState.apply(history, [path, state]);
};

history.goBack = () => {
  const stack = JSON.parse(storage.getItem('previousUrl'));
  const previousUrl = stack.pop();
  storage.setItem('previousUrl', JSON.stringify(stack));

  if (previousUrl) {
    window.location = previousUrl;
  } else {
    originalGoBack.apply(history);
  }
};


export default history;
