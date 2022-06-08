import React, { useState } from "react";
import styled from "styled-components";
import Blockie from "./Blockie";
import { ellipseAddress, getChainData } from "../helpers/utilities";
import { fonts, transitions } from "../styles";
import Button from "./Button";
// import ContractAddress from "src/utils/contract";
// import ClaimAbi from "../abi/Claim.js";
// import { useConnect } from "src/hooks/useConnect.js";
import { useWeb3React } from "@web3-react/core";
import MetamaskConnect from "./MetamaskConnect";
import { useEagerConnect } from "src/hooks/useMatemask.js";
import Modal from "./Modal";
import aplImgs from "../assets/ApiLogo.png";
const SHeader = styled.div`
  margin-top: -1px;
  //   margin-bottom: 1px;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  //   max-width: 100%;
  padding: 0 26%;
  background: #161426;
`;

const SActiveAccount = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  font-weight: 500;
`;
const AplImg = styled.img`
  width: 139px;
  height: 38px;
`;
const DocsBox = styled.div`
  display: flex;
  width: 156px;
  justify-content: space-between;
`;
const Staking = styled.p`
  color: rgba(155, 155, 155, 1);
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  line-height: 16px;
`;
const Point = styled.p`
  color: rgba(155, 155, 155, 1);
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  line-height: 17px;
`;
const Docs = styled.p`
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  line-height: 16px;
`;
const Govern = styled.p`
  color: rgba(155, 155, 155, 1);
  font-size: 12px;
  font-weight: 500;
  text-align: left;
  line-height: 16px;
`;

const SActiveChain = styled(SActiveAccount as any)`
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  & p {
    font-size: 0.8em;
    margin: 0;
    padding: 0;
  }
  & p:nth-child(2) {
    font-weight: bold;
  }
`;

const SBlockie = styled(Blockie as any)`
  margin-right: 10px;
`;

interface IHeaderStyle {
  connected: boolean;
}

const SAddress = styled.p<IHeaderStyle>`
  transition: ${transitions.base};
  font-weight: bold;
  margin: ${({ connected }) => (connected ? "-2px auto 0.7em" : "0")};
`;

// const SUnsupportedChain = styled.div`
//   transition: ${transitions.base};
//   font-weight: bold;
//   color: red;
// `;

const SDisconnect = styled.div<IHeaderStyle>`
  transition: ${transitions.button};
  font-size: 12px;
  font-family: monospace;
  position: absolute;
  right: 0;
  top: 20px;
  opacity: 0.7;
  cursor: pointer;

  &:hover {
    // transform: translateY(-1px);
    opacity: 0.5;
  }
`;
const SConnectButton = styled(Button as any)`
  border-radius: 8px;
  font-size: ${fonts.size.medium};
  margin: 12px 0;
  background: #6639e5;
  border-radius: 16px;
  width: 197px;
  height: 32px;
`;

interface IHeaderProps {
  killSession: () => void;
  connected: boolean;
  connect: () => void;
  fetching: boolean;
}

const Header = ({ connected, killSession, connect, fetching }: IHeaderProps) => {
  let activeChain = null;
  const { account, chainId, deactivate } = useWeb3React();
  const [isShowModal, setIsShowModal] = useState(false);
  const triedEager = useEagerConnect();
  try {
    activeChain = chainId ? getChainData(chainId).name : null;
    console.log(activeChain);
  } catch (error) {
    console.error(error);
  }

  //   const ClaimContract = useConnect(ClaimAbi, ContractAddress.claim[chainId ?? 1]);
  //   const claimToken = () => {
  //     ClaimContract.methods.claimTokens().send({ from: account });
  //   };

  return (
    <SHeader>
      <SActiveChain>
        <>
          {/* <p>Connected to</p>
              <p>{activeChain}</p> */}
          {/* <SConnectButton onClick={claimToken} left fetching={fetching}>
            {"Claim"}
          </SConnectButton> */}
          <AplImg src={aplImgs} />
        </>
      </SActiveChain>
      <DocsBox>
        <Staking>Staking</Staking>
        <Point>·</Point>
        <Docs>Docs</Docs>
        <Point>·</Point>
        <Govern>Govern</Govern>
      </DocsBox>
      {account ? (
        <SActiveAccount>
          <SBlockie address={account} />
          {activeChain ? (
            <SAddress connected={connected}>{ellipseAddress(account)}</SAddress>
          ) : (
            <SAddress connected={connected}>Chain not supported.</SAddress>
          )}
          <SDisconnect
            connected={connected}
            onClick={() => {
              killSession();
              deactivate();
            }}
          >
            {activeChain} {"Disconnect"}
          </SDisconnect>
        </SActiveAccount>
      ) : (
        <>
          <SConnectButton
            onClick={() => {
              setIsShowModal(true);
            }}
          >
            {" "}
            {"Connect"}
          </SConnectButton>
        </>
      )}
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
    </SHeader>
  );
};

export default Header;
