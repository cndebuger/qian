import React, { useReducer } from "react";
import { useLocation } from "react-router-dom";
import PrimaryHeader from "./PrimaryHeader";
import "./layout.less";
import { Layout } from "antd";
import PrimarySider from "./ParimarySider";
import BasicLayout from "./BasicLayout";
import GlobalContext, { defaultVale } from "../store/global/store";
import globalReducer from "../store/global/reducer";
import { getToken } from "../utils/auth";
import UnAuthLayout from "./UnAuthLayout";

const {Footer} = Layout

const PrimaryLayout: React.FC = props => {
  const [state, dispatch] = useReducer(globalReducer, defaultVale);
  const token = getToken();
  const location = useLocation();

  if (!token || location.pathname === "/login") {
    return <UnAuthLayout />;
  }

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <Layout>
        <PrimarySider />
        <Layout className="main-wrap">
          <PrimaryHeader />
          <div className="main-content">
            <BasicLayout />
          </div>
          <Footer style={{ textAlign: 'center' }}>
          中资数据插件化漏扫系统 ©2021 Created by <a>数据部</a>
          </Footer>
        </Layout>
      </Layout>
    </GlobalContext.Provider>
  );
};

export default PrimaryLayout;
