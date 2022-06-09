import * as React from "react";
import { useEagerConnect } from "src/hooks/useMatemask.js";
import { fonts } from "src/styles";
import styled from "styled-components";
import Button from "./Button";
import MetamaskConnect from "./MetamaskConnect";
import Modal from "./Modal";

const SConnectButton = styled(Button as any)`
  border-radius: 8px;
  font-size: ${fonts.size.medium};
  margin: 12px 0;
  background: #6639e5;
  border-radius: 16px;
  width: 197px;
  height: 32px;
  color: #fff;
  & > div {
    background: transparent !important;
  }
`;
interface IWalletModal {
  isShowModal: boolean;
  connect: () => void;
  fetching: boolean;
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const WalletModal = ({ isShowModal, connect, setIsShowModal, fetching }: IWalletModal) => {
  const triedEager = useEagerConnect();

  return (
    <Modal
      show={isShowModal}
      opacity={0.2}
      toggleModal={() => {
        setIsShowModal(false);
      }}
    >
      <MetamaskConnect triedEager={triedEager} />
      <SConnectButton right onClick={connect} fetching={fetching}>
        {"Connect"}
      </SConnectButton>
    </Modal>
  );
};

export default WalletModal;
