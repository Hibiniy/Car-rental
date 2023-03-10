import { Card, Message } from './components';
import React from 'react';
interface Props {
  children: React.ReactNode;
}
const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className=" flex h-screen w-screen flex-row bg-slate-600">
      {/* <div className=" w-1/6 bg-primary-400 "></div>
      <div className=" w-2/3 bg-secondary-400">{children}</div>
      <div className=" w-1/6 bg-information-400"></div> */}
      {/* <Message /> */}
      <Card />
    </div>
  );
};
export default MainLayout;
