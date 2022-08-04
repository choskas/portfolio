import React, { isValidElement, useEffect, useState } from "react";
import { Container, Tab, TabContent, TabsList } from "./Tabs.styles";

interface TabsDataInterface {
  isActive: boolean;
  title: string;
  content: React.ReactNode | string;
  intersectingWork: boolean;
}

const Tabs = ({ children, active = 0, onClick = () => {}, intersectingWork }: any) => {
  const [activeTab, setActiveTab] = useState(active);
  const [tabsData, setTabsData] = useState<any>([]);

  useEffect(() => {
    let data: Array<any> = [];
    children.forEach((item: React.ReactElement) => {
      if (!isValidElement) return;
      data.push({
        title: item?.props?.title,
        content: item?.props?.children,
        key: item?.key,
        isActive: item?.key === activeTab ? true : false,
      });
    });
    data[activeTab].isActive = true;
    setTabsData(data);
  }, [children, activeTab, active]);
  console.log(activeTab, 'active')
  return (
    <Container intersectingWork={intersectingWork}>
      <TabsList>
        {tabsData.map(({ title }: { title: string }, index: number) => (
          <Tab key={`tab-${index}`} isActive={tabsData[index].isActive}>
            <div
              onClick={() => {
                setActiveTab(index);
                const newTabsArray = tabsData.map((item: TabsDataInterface) => {
                  let newItems;
                  if (item.title === title) {
                    newItems = { ...item, isActive: true };
                  } else {
                    newItems = { ...item, isActive: false };
                  }
                  return newItems;
                });
                setTabsData(newTabsArray);
                onClick(index);
              }}
            >
              {title}
            </div>
          </Tab>
        ))}
      </TabsList>
      <TabContent>
        {tabsData[activeTab] && tabsData[activeTab].content}
      </TabContent>
    </Container>
  );
};

export default Tabs;
