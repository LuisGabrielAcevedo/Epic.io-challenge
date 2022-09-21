import React from "react";
import { ContentLayout, Card, CardsContainer } from "../../../../components";

const HomePage = () => {
  return (
    <ContentLayout title="Home">
      <CardsContainer>
        <Card title="Inventory" path="/inventory" icon="inventory" />
        <Card title="Cameras" path="/inventory/cameras" icon="camera" />
        <Card
          title="Camera types"
          path="/inventory/camera-types"
          icon="types"
        />
        <Card title="Store" path="/store" icon="store" />
      </CardsContainer>
    </ContentLayout>
  );
};

export default HomePage;
