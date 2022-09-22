import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ContentLayout,
  CustomTable,
  CustomDialog,
  EmptyState,
} from "src/components";
import AddIcon from "@material-ui/icons/Add";
import {
  addCameraAction,
  closeCameraDialogAction,
  deleteCameraAction,
  editCameraAction,
  openCameraDialogAction,
} from "src/store/actions";
import CameraForm from "./components/CameraForm";
import IconButton from "@material-ui/core/IconButton";

const metadata = [
  {
    key: "id",
    label: "Id",
  },
  {
    key: "name",
    label: "Name",
  },
  {
    key: "cameraType",
    label: "Camera Type",
  },
  {
    key: "location",
    label: "Location",
  },
  {
    key: "latitude",
    label: "Latitude",
  },
  {
    key: "longitude",
    label: "Longitude",
  },
  {
    key: "brand",
    label: "Brand",
  },
  {
    key: "model",
    label: "Model",
  },
];

const CameraListPage = () => {
  const { list, dialogState, currentItem } = useSelector(
    (state) => state.cameras
  );
  const { list: cameraTypes } = useSelector((state) => state.cameraTypes);
  const d = useDispatch();
  const openDialog = (item) => d(openCameraDialogAction(item));
  const closeDialog = () => d(closeCameraDialogAction());
  const deleteCamera = (id) => d(deleteCameraAction(id));

  const onSubmit = (values) => {
    const { id } = values || {};
    d(id ? editCameraAction(values) : addCameraAction(values));
  };

  return (
    <ContentLayout title="Cameras">
      <CustomTable
        {...{ metadata }}
        data={list}
        handleDelete={deleteCamera}
        handleEdit={openDialog}
        rightComponent={() => (
          <>
            <IconButton color="primary" onClick={() => openDialog(null)}>
              <AddIcon />
            </IconButton>
            <CustomDialog
              visible={dialogState}
              handleClose={closeDialog}
              title="Add camera"
            >
              <CameraForm
                handleClose={closeDialog}
                {...{ currentItem, onSubmit, cameraTypes }}
              />
            </CustomDialog>
          </>
        )}
        searchCondition={(item, reg) =>
          item.name.match(reg) || item.brand.match(reg) || item.model.match(reg)
        }
      />
      <EmptyState data={list} text="No cameras added." />
    </ContentLayout>
  );
};

export default CameraListPage;
