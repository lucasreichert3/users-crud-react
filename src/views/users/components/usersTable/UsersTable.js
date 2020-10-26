import React, { useState } from 'react';
import { UsersList, HeaderItem, UserItem } from './styles';
import Modal from '../../../../components/modal/Modal';
import CreateIcon from '@material-ui/icons/Create';
import { ModalContent } from '../ModalContent/ModalContent';
import Button from '../../../../components/button/Button';

export default function UsersTable({ users }) {
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const handleEdit = (user) => {
    setCurrentUser(user);
    setShowModal(true);
  };

  const getHeaderTitle = () => {
    return currentUser && currentUser.name ? `Editando o: ${currentUser.name}` : 'Novo usuário';
  }

  const onModalClose = () => {
    setShowModal(false);
    setCurrentUser({});
  }

  return (
    <UsersList>
      <Modal showModal={showModal} onClose={onModalClose} headerTitle={getHeaderTitle()} size="30%">
         {showModal && (<ModalContent user={currentUser} />)}
      </Modal>
      <div className="header">
        <HeaderItem className="name">Nome</HeaderItem>
        <HeaderItem className="cpf">CPF</HeaderItem>
        <HeaderItem className="email">Email</HeaderItem>
        <HeaderItem className="number">Número</HeaderItem>
        <HeaderItem className="actions"><Button type="submit" text="Novo usuário" small click={() => handleEdit({})} /></HeaderItem>
      </div>
      <div className="content">
        {users?.map((user, i) => (
          <UserItem key={i}>
            <HeaderItem className="name">{user.fullName}</HeaderItem>
            <HeaderItem className="cpf">{user.cpf}</HeaderItem>
            <HeaderItem className="email">{user.email}</HeaderItem>
            <HeaderItem className="number">{user.number}</HeaderItem>
            <HeaderItem className="actions">
              <CreateIcon onClick={() => handleEdit(user)} />
            </HeaderItem>
          </UserItem>
        ))}
      </div>
    </UsersList>
  );
}
