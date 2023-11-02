import { useState } from "react";
import { TabOptionsParams } from "./TabOptions.interfaces";
import { Container, TabButton } from "./TabOptions.styles";
import { SystemRoutes } from "../../../../interfaces/Routes";

const TabOptions = ({ routeArray }: TabOptionsParams) => {
  const [selectedTab, setSelectedTab] = useState("/");

  const renderOption = (route: SystemRoutes) => (
    <TabButton
      selected={selectedTab === route.path}
      onClick={() => setSelectedTab(route.path)}
      to={route.path}
    >
      {route.label}
    </TabButton>
  );

  return <Container>{routeArray.map((r) => renderOption(r))}</Container>;
};

export default TabOptions;
