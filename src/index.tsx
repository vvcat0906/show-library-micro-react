import './public-path';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

let root: any;
const render = (props: any) => {
  const { container } = props;
  const newContainer = container
    ? container.querySelector("#root") as HTMLElement
    : document.querySelector("#root") as HTMLElement;
  root = ReactDOM.createRoot(newContainer);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

// 独立运行时
if (!(window as any).__POWERED_BY_QIANKUN__) {
  console.log('react render')
  render({});
}

/**
 * bootstrap ： 在微应用初始化的时候调用一次，之后的生命周期里不再调用
 */
 export async function bootstrap() {
  console.log('bootstrap');
}

/**
 * mount ： 在应用每次进入时调用 
 */
 export async function mount(props: any) {
  console.log('mount', props);
  render(props);
}

/**
 * unmount ：应用每次 切出/卸载 均会调用
 */
export async function unmount(props: any) {
  const { container } = props;
  root.unmount(
    container
    ? container.querySelector("#root") as HTMLElement
    : document.querySelector("#root") as HTMLElement
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
