import { useState } from 'react';
import { TabOptionsParams } from './TabOptions.interfaces';
import { Container, Divider, TabButton } from './TabOptions.styles';
import { SystemRoutes } from '../../../../interfaces/Routes';

const TabOptions = ({ routeArray }: TabOptionsParams) => {
  const [selectedTab, setSelectedTab] = useState('/');

  const isTabOption = ({ path }: SystemRoutes) => selectedTab === path;

  const renderOption = (route: SystemRoutes) => (
    <>
      {/* {isTabOption(route) && <Divider location="before" />} */}
      <TabButton
        to={route.path}
        selected={isTabOption(route)}
        onClick={() => setSelectedTab(route.path)}
      >
        {route.label}
      </TabButton>
      {/* {isTabOption(route) && <Divider location="after" />} */}
    </>
  );

  return <Container>{routeArray.map((r) => renderOption(r))}</Container>;
};

export default TabOptions;
