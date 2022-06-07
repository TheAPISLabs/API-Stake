import { useWeb3React } from "@web3-react/core";
import React from "react";
import { useInactiveListener } from "src/hooks/useMatemask.js";
import { fonts } from "src/styles";
import styled from "styled-components";
import { injected } from "../utils/metaskConnect";
import Button from "./Button";

const SConnectButton = styled(Button as any)`
  border-radius: 8px;
  font-size: ${fonts.size.medium};
  height: 44px;
  width: 100%;
  margin: 12px 0;
  width: 100px;
  background: #6b00cc;
`;

function MetamaskConnect(props: { triedEager: any }) {
  const context = useWeb3React();
  const { connector, chainId, activate, deactivate, error } = context;

  const [activatingConnector, setActivatingConnector] = React.useState();
  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  const activating = injected === activatingConnector;
  const connected = injected === connector;
  const disabled = !props.triedEager || !!activatingConnector || !!error;

  useInactiveListener(!props.triedEager || !!activatingConnector);

  const isDisconnect = !error && chainId;
  const buttonText = isDisconnect ? "Disconnect" : activating ? "Connectting" : "Connect";

  return (
    <SConnectButton
      style={{
        borderColor: activating ? "orange" : connected ? "green" : "unset",
        cursor: disabled ? "unset" : "pointer",
        position: "relative",
      }}
      className="ConnectButton"
      disabled={disabled}
      onClick={() => {
        if (!isDisconnect) {
          setActivatingConnector(injected as any);
          activate(injected);
        } else {
          deactivate();
        }
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          height: "100%",
          display: "flex",
          alignItems: "center",
          color: "black",
          margin: "0 0 0 1rem",
        }}
      >
        {activating}
      </div>
      {buttonText}
    </SConnectButton>
  );
}
export default MetamaskConnect;
