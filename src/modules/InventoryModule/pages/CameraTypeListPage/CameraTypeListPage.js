import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContentLayout, CustomTable, CustomDialog } from "src/components";
import AddIcon from "@material-ui/icons/Add";
import {
  addCameraTypeAction,
  closeCameraTypeDialogAction,
  deleteCameraTypeAction,
  editCameraTypeAction,
  openCameraTypeDialogAction,
} from "src/store/actions";
import CameraTypeForm from "./components/CameraTypeForm";
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
    key: "description",
    label: "Description",
  },
];

const CameraTypeListPage = () => {
  const { list, dialogState, currentItem } = useSelector(
    (state) => state.cameraTypes
  );
  const d = useDispatch();
  const openDialog = (item) => d(openCameraTypeDialogAction(item));
  const closeDialog = () => d(closeCameraTypeDialogAction());
  const deleteCameraType = (id) => d(deleteCameraTypeAction(id));

  const onSubmit = (values) => {
    const { id } = values || {};
    d(id ? editCameraTypeAction(values) : addCameraTypeAction(values));
  };

  return (
    <ContentLayout title="Camera types">
      <CustomTable
        {...{ metadata }}
        data={list}
        handleDelete={deleteCameraType}
        handleEdit={openDialog}
        emptyStateMessage="No camera types added."
        rightComponent={() => (
          <>
            <IconButton color="primary" onClick={() => openDialog(null)}>
              <AddIcon />
            </IconButton>
            <CustomDialog
              visible={dialogState}
              handleClose={closeDialog}
              title="Add camera type"
            >
              <CameraTypeForm
                handleClose={closeDialog}
                {...{ currentItem, onSubmit }}
              />
            </CustomDialog>
          </>
        )}
        searchCondition={(item, reg) =>
          item.name.match(reg) || item.description.match(reg)
        }
      />
    </ContentLayout>
  );
};

export default CameraTypeListPage;
