import React from "react";
import { CardsContainer, ContentLayout, Card } from "../../../../components";

const InventoryPage = () => {
  return (
    <ContentLayout title="Inventory">
      <CardsContainer>
        <Card title="Cameras" path="/inventory/cameras" icon="camera" />
        <Card
          title="Camera types"
          path="/inventory/camera-types"
          icon="types"
        />
      </CardsContainer>
    </ContentLayout>
  );
};

export default InventoryPage;
