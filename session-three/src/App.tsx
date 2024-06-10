import Table from "./components/Table/Table";
import styles from "./App.module.scss";
import Button from "./components/Button/Button";
import { useEffect, useReducer, useState } from "react";
import DeleteUserModal from "./components/DeleteUserModal/DeleteUserModal";
import EditUserModal from "./components/EditUserModal/EditUserModal";
import Pagination from "./components/Pagination/Pagination";
import { User } from "./App.types";
import { deleteUserAPI, getUsersAPI, updateUserAPI } from "./services/user.service";
import Loader from "./components/Loader/Loader";
import { columns } from "./App.data";
import { appReducer, initialState, getUsers, deleteUser, editUser } from "./App.state";



const App = () => {

  const [{
    rows, pageNumber, pageSize, selectedUser, showDeleteModal, showEditModal, showLoader
  }, dispatch] = useReducer(appReducer, initialState)

  const [error, setError] = useState("");

  useEffect(() => {
    getUsers(dispatch);
  }, [])
  
  const handleDelete = (row: User) => dispatch({ type: "SHOW_DELETE_MODAL", data: row })
  const closeDeleteModal = () => dispatch({ type: "HIDE_DELETE_MODAL" })
  const handleEdit = (user: User) => dispatch({ type: "SHOW_EDIT_MODAL", data: user})
  const closeEditModal = () => dispatch({ type: "HIDE_EDIT_MODAL"})

  const onConfirmDelete = async () => {
    if (!selectedUser) return;
    deleteUser(dispatch, selectedUser.id);
  }

  const onEditSubmit = async (user: User) => {
    if (!selectedUser) return;
    editUser(dispatch, user);
  }

  const handleOnPrevious = () => dispatch({type: "PREV_PAGE"});
  const handleOnNext = () => dispatch({type: "NEXT_PAGE"});
  const handlePageChange = (changePageSize: number) => dispatch({ type: "PAGE_SIZE_CHANGE", data: changePageSize })

  const start = pageSize * pageNumber;
  const end = start + pageSize;
  const userRows = rows.slice(start, end);

  console.log(userRows);
  return <>
    {
      error ? <>{error}</> : null
    }

    <DeleteUserModal
      open={showDeleteModal}
      onClose={closeDeleteModal}
      onConfirm={onConfirmDelete}
    />

    <EditUserModal
      open={showEditModal}
      onClose={closeEditModal}
      user={selectedUser}
      onSubmit={onEditSubmit}
    />

    {
      showLoader && <Loader />
    }

    <div className={styles.TableContainer}>
      <Table
        columns={columns}
        rows={userRows}

        renderAction={(row) => {
          return (
            <td>
              <Button
                className="Button__Primary"
                onClick={() => handleEdit(row)}
              >Edit</Button>

              <Button
                className="Button__Secondary"
                onClick={() => handleDelete(row)}
              >
                Delete
              </Button>
            </td>
          )
        }}
      />
    </div>
    <Pagination
      onNext={handleOnNext}
      onPrev={handleOnPrevious}
      onPageChange={handlePageChange}
    />
  </>
}

export default App;