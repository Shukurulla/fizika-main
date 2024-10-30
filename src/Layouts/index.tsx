import React, { useState } from 'react'
import { LeftNavbar } from '../components'

import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import Routers from '../Routers/route'

import { MenuFoldOutlined, MenuUnfoldOutlined, } from '@ant-design/icons';

export const LayoutPage: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout hasSider>
      <LeftNavbar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout className="site-layout" style={{ marginLeft: 330 }}>
        <button
          onClick={() => setCollapsed(!collapsed)}
          style={collapsed ? { display: 'none' } : {}}
          className='bars-line'
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </button>
        <Content style={{ padding: '24px 16px 16px', overflow: 'initial' }}>
          <div style={{ minHeight: '90vh' }}>
            <Routers />
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}