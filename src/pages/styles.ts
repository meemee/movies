import { Layout, PageHeader } from "antd"
import styled from "styled-components"

const { Content } = Layout;

export const StyledLayout = styled(Layout)`
  overflow-y: auto;
  width: 100%;
  height: 100%;
`

export const StyledContent = styled(Content)`
    padding: 20px 50px 0 50px;
`

export const StyledPageHeader = styled(PageHeader)`
    padding: 12px 24px;

    .ant-page-header-back-button, .ant-page-header-heading-title, 
    .ant-page-header-heading-sub-title {
        color: #fff;
    }

`