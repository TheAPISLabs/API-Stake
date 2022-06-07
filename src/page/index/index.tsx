import React, { useState } from "react";
import Column from "src/components/Column";
// import { useConnect } from "src/hooks/useConnect.js";
import styled from "styled-components";
// import TokenAbi from "../../abi/Token.js";
// import StakeAbi from "../../abi/TokenStaking.js";
// import { useWeb3React } from "@web3-react/core";
// import ContractAddress from "src/utils/contract";
// import { ethers } from "ethers";
// import { BigNumber as BN, ethers } from "ethers";
// import web3 from "src/utils/web3.js";
// import BigNumber from "bignumber.js";
import { isMobile } from "src/helpers/utilities";
import "./index.css";
const StakingTitleApi = styled.p`
  font-weight: 500;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  width: 78px;
  height: 58px;
  color: #fcfcfd;
  margin-right: 22px;
`;
const StakingTitleStak = styled.p`
  font-weight: 500;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  color: #827790;
  width: 174px;
  height: 58px;
  margin-right: 15px;
`;
const StakingTitleDashboard = styled.p`
  font-weight: 500;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  color: #827790;
  width: 251px;
  height: 58px;
  margin-right: 15px;
`;
const StartedBtn = styled.div`
  width: 144px;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #6639e4;
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  font-weight: 500;
  padding: 12px 22px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin-top: 24px;
`;
const Trade = styled.p`
  width: 332.8px;
  height: 53px;
  opacity: 1;
  color: rgba(155, 155, 155, 1);
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  line-height: 26.2px;
`;
const Row = styled.div`
  display: flex;
  margin-top: 10.3vw;
  padding: 0px 57px 0px 68px;
  box-sizing: border-box;
`;
const MyStaking = styled.div`
  padding: 12px 16px;
  box-sizing: border-box;
  width: 30vw;
  height: 42.1vw;
  border-radius: 10px;
  opacity: 1;
  border: 0.5px solid rgba(0.6078431606292725, 0.6078431606292725, 0.6078431606292725, 0.3);
  background: rgba(13, 10, 36, 1);
`;
const MyStakingTitle = styled.p`
  color: rgba(252, 252, 253, 1);
  font-size: 1.56vw;
  font-weight: 400;
  text-align: left;
  margin-bottom: 2.4vw;
`;
const MyStakingUl = styled.ul`
  width: 171px;
  height: 45px;
  border-radius: 7px;
  display: flex;
  border: 0.5px solid #322e4b;
  padding: 6px 12px;
`;
const MyStakingLi = styled.li`
  width: 70.27px;
  height: 32px;
  border-radius: 4px;
  opacity: 1;
  background: rgba(102, 57, 229, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  line-height: 33px;
  margin: auto;
`;
const MyStakeUl = styled.ul``;
const MyStakeLi = styled.li`
  margin-top: 22px;
`;
const MyStakingNumBox = styled.div`
  width: 273px;
  height: 42px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 7px;
  display: flex;
  justify-content: space-between;
  padding: 12px;
`;
const StakingNum = styled.div`
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`;
const StakingOptions = styled.div`
  display: flex;
  width: 81px;
  justify-content: space-between;
`;
const Msx = styled.div`
  color: rgba(150, 145, 181, 1);
  font-size: 12px;
  font-weight: 400;
  font-family: "Inter";
  text-align: center;
`;
// const DataMiddleBox = styled.div`
//   width: 100%;
//   height: 183px;
//   padding: 27px;
//   box-sizing: border-box;
//   text-align: left;
//   display: flex;
//   & > div {
//     width: 50%;
//   }
// `;

// const StakingApiTitle = styled.p`
//   font-weight: 500;
//   font-size: 15.25px;
//   line-height: 22px;
//   color: #2e2c34;
//   margin: 0;
//   margin-bottom: 20px;
// `;

// const TotalStakedToUsd = styled.p`
//   font-weight: 600;
//   font-size: 34.8571px;
//   line-height: 44px;
//   color: #2e2c34;
//   margin: 0;
//   margin-bottom: 10px;
// `;
// const TotalStaked = styled.p`
//   font-weight: 400;
//   font-size: 15.25px;
//   line-height: 22px;
//   color: #84818a;
//   margin: 0;
// `;
// const DisStakingApiTitle = styled(StakingApiTitle as any)`
//   visibility: hidden;
// `;

// const TotalStakerTitle = styled.p`
//   font-weight: 500;
//   font-size: 15.25px;
//   line-height: 22px;
//   color: #2e2c34;
// `;

// const AprNumber = styled.div`
//   font-weight: 600;
//   font-size: 34.8571px;
//   line-height: 44px;
//   color: #2e2c34;
//   & > span {
//     font-weight: 600;
//     font-size: 17.4286px;
//     line-height: 24px;
//     color: #84818a;
//   }
// `;

// const AprDayData = styled.p`
//   font-weight: 400;
//   font-size: 15.25px;
//   line-height: 22px;
//   color: #84818a;

//   & > span {
//     font-weight: 600;
//     font-size: 15.25px;
//     line-height: 22px;
//     color: #2e2c34;
//   }
// `;

// const StatsTitle = styled.p`
//   font-weight: 600;
//   font-size: 13.0714px;
//   line-height: 20px;
//   color: #84818a;
// `;

// const StatsData = styled.p`
//   font-weight: 600;
//   font-size: 26.1429px;
//   line-height: 39px;
//   color: #2e2c34;
// `;
// const StatsBox = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
// `;
// const StatsWidth = styled.div`
//   width: 100% !important;
// `;
// const StakingPanel = styled.div`
//   background: #000;
//   width: 100%;
//   height: 678px;
//   padding: 25px;
//   background: #f4efff;
// `;

// const PanelTop = styled.div`
//   background: #6b00cc;
//   box-shadow: 0px 3.23684px 2.15789px rgba(89, 89, 89, 0.1);
//   width: 100%;
//   height: 83px;
//   color: #fff;
//   display: flex;
//   justify-content: space-between;
//   padding: 16px 20px;
// `;
// const PanelTopTitle = styled.div`
//   font-weight: 700;
//   font-size: 15.1053px;
//   line-height: 22px;
//   color: #ffffff;
// `;
// const PanelTopTimeOut = styled.div`
//   display: flex;
//   justify-content: space-between;
//   & > div {
//     margin-left: 20px;
//   }
// `;
// const PanelTimeOutTitle = styled.div`
//   font-weight: 500;
//   font-size: 15.1053px;
//   line-height: 22px;
//   color: #e3e1e5;
// `;

// const PanelTimeOutVal = styled.div`
//   font-weight: 700;
//   font-size: 15.1053px;
//   line-height: 22px;
//   text-align: center;
//   color: #ffffff;
//   margin-top: 8px;
// `;
// const AmountStakeTitle = styled.p`
//   font-weight: 700;
//   font-size: 15.1053px;
//   line-height: 22px;
//   color: #2e2c34;
//   text-align: left;
//   margin-top: 32px;
// `;
// const AmountStake = styled.div``;
// const StakeInput = styled.input`
//   width: 100%;
//   height: 45.32px;
//   background: #ffffff;
//   border: 1.07895px solid rgba(198, 198, 198, 0.6);
//   box-sizing: border-box;
//   out-line: none;
//   padding: 0 10px;
// `;
// const StakeButton = styled.div`
//   width: 160px;
//   height: 43px;
//   line-height: 43px;
//   background: #6b00cc;
//   color: #fff;
//   border-radius: 5px;
//   margin: 0 auto;
//   margin-top: 48px;
//   margin-bottom: 50px;
//   text-align: center;
//   cursor: pointer;
// `;
// const StakeLine = styled.div`
//   height: 1px;
//   width: 100%;
//   background: #afadad;
//   margin-bottom: 50px;
// `;

// const CurrentStaking = styled.div`
//   margin: 0;
//   font-weight: 700;
//   font-size: 15.1053px;
//   line-height: 22px;
//   color: #2e2c34;
// `;

// const CurrentItem = styled.div`
//   width: 100%;
//   height: 50px;
//   background: #ffffff;
//   border: 1px solid rgba(198, 198, 198, 0.6);
//   box-sizing: border-box;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 20px;
// `;

// const Unstake = styled.div`
//   width: 80px;
//   height: 30px;
//   line-height: 30px;
//   background: #6b00cc;
//   color: #fff;
//   border-radius: 5px;
//   font-size: 12px;
//   text-align: center;
//   cursor: pointer;
// `;
// const CurrentStakeTitle = styled.p`
//   margin: 0;
//   font-weight: 700;
//   font-size: 15.1053px;
//   line-height: 22px;
//   color: #2e2c34;
//   text-align: left;
//   margin-bottom: 10px;
// `;
const StakingWrap = styled.div`
  background: #161426;
`;
const StakingTitle = styled.div`
  display: flex;
`;
// const MobileBox = styled.div`
//   background: #fbfafc;
//   padding: 0 22px;
// `;
// const MobileBlock = styled.div`
//   background: #ffffff;
//   border-radius: 5px;
//   width: 100%;
//   text-align: left;
//   padding: 30px 25px;
//   box-sizing: border-box;
//   margin-top: 32px;
//   overflow: hidden;
// `;

// const MobileStakingPanel = styled(StakingPanel as any)`
//   padding: 0;
//   background: #fff;
// `;
export default function Home() {
  const [currentLi, setCurrentLi] = useState(1);
  const currentClass = (index: number) => {
    return currentLi === index ? (
      <MyStakeUl>
        <MyStakeLi>
          <MyStakingNumBox>
            <StakingNum>1111</StakingNum>
            <StakingOptions>
              <Msx>Max</Msx>
              <Msx>Stake</Msx>
            </StakingOptions>
          </MyStakingNumBox>
        </MyStakeLi>
        <MyStakeLi>
          <></>
        </MyStakeLi>
      </MyStakeUl>
    ) : (
      <>
        {" "}
        <MyStakeUl>
          <MyStakeLi>
            <MyStakingNumBox>
              <StakingNum>1525</StakingNum>
              <StakingOptions>
                <Msx>Max</Msx>
                <Msx>Stake</Msx>
              </StakingOptions>
            </MyStakingNumBox>
          </MyStakeLi>
        </MyStakeUl>
      </>
    );
  };
  // useConnect()
  //   const { chainId, account } = useWeb3React();
  //   const [ledgerArrTh, setLedgerArrTh] = useState<any[]>([]);

  //   const ledgerArr: any[] = [];
  //   let totalAmount = 0;

  //   // window.web3.currentProvider
  //   const TokenContract = useConnect(TokenAbi, ContractAddress.token[chainId ?? 1]);
  //   const StakeContract = useConnect(StakeAbi, ContractAddress.tokenStaking[chainId ?? 1]);
  //   const [inputValue, setInputValue] = useState(0);
  //   const [walletBalance, setWalletBalance] = useState(0);
  //   const [apr, setApr] = useState(0);
  //   const [penalization, setPenalization] = useState(0);
  //   const [totalStaked, setTotalStaked] = useState(0);

  //   const stakeHandler = async () => {
  //     if (!inputValue || inputValue === 0 || inputValue < 0) {
  //       setInputValue(0);
  //     } else {
  //       //   const tokenDecimals = await TokenContract.methods.decimals();
  //       //   const convertToWei = new BigNumber(inputValue).times(10 ** tokenDecimals).toString();
  //       //   console.log(convertToWei, tokenDecimals, account);
  //       const convertToWei = ethers.utils.parseEther(inputValue.toString());

  //       TokenContract.methods
  //         .approve(ContractAddress.tokenStaking[chainId ?? 1], convertToWei)
  //         .send({ from: account })
  //         .on("transactionHash", () => {
  //           StakeContract.methods
  //             .start(convertToWei)
  //             .send({ from: account })
  //             .on("transactionHash", () => {
  //               //   setLoader(false);
  //               //   fetchDataFromBlockchain();
  //             })
  //             .on("receipt", () => {
  //               //   setLoader(false);
  //               //   fetchDataFromBlockchain();
  //             })
  //             .on("confirmation", () => {
  //               //   setLoader(false);
  //               //   fetchDataFromBlockchain();
  //             });
  //         });

  //       setInputValue(0);
  //     }
  //   };

  //   const unStakeHandler = (index: number) => {
  //     StakeContract.methods
  //       .end(index)
  //       .send({ from: account })
  //       .on("transactionHash", () => {
  //         console.log(1);
  //       })
  //       .on("receipt", () => {
  //         console.log(1);
  //       })
  //       .on("confirmation", () => {
  //         console.log(1);
  //       });
  //   };
  //   const loadLedger = async () => {
  //     if (!account) {
  //       return;
  //     }

  //     const ledger_length = await StakeContract.methods.ledger_length(account).call();
  //     if (ledger_length > 0) {
  //       for (let index = 0; index < ledger_length; index++) {
  //         const ledgerInfo = await StakeContract.methods.ledger(account, index).call();
  //         ledgerArr.push({
  //           amount: ledgerInfo.amount,
  //           from: ledgerInfo.from,
  //           ended: ledgerInfo.ended,
  //           gain: ledgerInfo.gain,
  //           penalization: ledgerInfo.penalization,
  //           to: ledgerInfo.to,
  //         });
  //         if (!ledgerInfo.ended) {
  //           totalAmount += ledgerInfo.amount;
  //         }
  //       }
  //       const coverAmount = ethers.utils.formatEther(totalAmount.toString());

  //       setTotalStaked(Number(Number(coverAmount)));
  //       setLedgerArrTh(ledgerArr);
  //     }
  //   };

  //   const getWalletBalance = async () => {
  //     if (!account) {
  //       return;
  //     }
  //     const userBalance = await TokenContract.methods.balanceOf(account).call();
  //     const convertedBalance = ethers.utils.formatEther(userBalance);
  //     setWalletBalance(Number(convertedBalance));
  //   };

  //   const getApr = async () => {
  //     const tempApr = await StakeContract.methods.interest_rate().call();
  //     setApr(tempApr);
  //   };

  //   const getPenalization = async () => {
  //     const tempPenalization = await StakeContract.methods.penalization().call();
  //     setPenalization(tempPenalization);
  //   };
  //   useEffect(() => {
  //     // loadLedger();
  //     getWalletBalance();
  //     getApr();
  //     getPenalization();
  //   }, [account]);
  //   useEffect(() => {
  //     const ethEnabled = async () => {
  //       loadLedger();
  //     };
  //     if (account) {
  //       ethEnabled();
  //     }
  //   }, [account]);
  return (
    <>
      {isMobile() ? (
        // <MobileBox>
        //   <Column maxWidth={1000} spanHeight>
        //     <StakingTitleApi>API</StakingTitleApi>
        //     <StakingTitleStak>Staking</StakingTitleStak>
        //     <StakingTitleApi>Dashboard</StakingTitleApi>
        //   </Column>
        //   <MobileBlock>
        //     <div>
        //       <StakingApiTitle>My API Staking</StakingApiTitle>
        //       <TotalStakedToUsd>{totalStaked}</TotalStakedToUsd>
        //       <TotalStaked>TOTAL STAKED</TotalStaked>
        //     </div>
        //     <div>
        //       <DisStakingApiTitle>My API Staking</DisStakingApiTitle>
        //       <TotalStakedToUsd>{walletBalance.toFixed(2)}</TotalStakedToUsd>
        //       <TotalStaked>AVAILABLE IN WALLET</TotalStaked>
        //     </div>
        //   </MobileBlock>
        //   <MobileBlock>
        //     <div>
        //       <TotalStakerTitle>PENALIZATION</TotalStakerTitle>
        //       <AprNumber>{penalization}%</AprNumber>
        //       {/* <AprDayData>
        //         <span>13%</span> +7k today
        //       </AprDayData> */}
        //     </div>
        //   </MobileBlock>
        //   <MobileBlock>
        //     <TotalStakerTitle>ESTIMATED REWARDS</TotalStakerTitle>
        //     <AprNumber>{apr}%</AprNumber>
        //     <AprDayData>
        //       <span>APR</span>
        //     </AprDayData>
        //   </MobileBlock>
        //   <MobileBlock>
        //     <StakingApiTitle>API Stats</StakingApiTitle>
        //     <div>
        //       <StatsTitle>API PRICE</StatsTitle>
        //       <StatsData>--</StatsData>
        //     </div>
        //     <div>
        //       <StatsTitle>DAILY REWARDS</StatsTitle>
        //       <StatsData>$391,820.75</StatsData>
        //     </div>
        //     <div>
        //       <StatsTitle>CIRCULATING SUPPLY</StatsTitle>
        //       <StatsData>$391,820.75</StatsData>
        //     </div>
        //   </MobileBlock>
        //   <MobileBlock>
        //     <MobileStakingPanel>
        //       <PanelTop>
        //         <PanelTopTitle>Stake Ends</PanelTopTitle>
        //         <PanelTopTimeOut>
        //           <div>
        //             <PanelTimeOutTitle>DAY</PanelTimeOutTitle>
        //             <PanelTimeOutVal>5</PanelTimeOutVal>
        //           </div>
        //           <div>
        //             <PanelTimeOutTitle>DAY</PanelTimeOutTitle>
        //             <PanelTimeOutVal>5</PanelTimeOutVal>
        //           </div>
        //           <div>
        //             <PanelTimeOutTitle>DAY</PanelTimeOutTitle>
        //             <PanelTimeOutVal>5</PanelTimeOutVal>
        //           </div>
        //           <div>
        //             <PanelTimeOutTitle>DAY</PanelTimeOutTitle>
        //             <PanelTimeOutVal>5</PanelTimeOutVal>
        //           </div>
        //         </PanelTopTimeOut>
        //       </PanelTop>
        //       <AmountStake>
        //         <AmountStakeTitle>Amount to Stake</AmountStakeTitle>
        //         <StakeInput
        //           onChange={events => {
        //             setInputValue(Number(events.target.value));
        //           }}
        //           type="number"
        //         />
        //         <StakeButton onClick={stakeHandler}>STAKE</StakeButton>
        //         <StakeLine />
        //       </AmountStake>
        //       <CurrentStaking>
        //         <CurrentStakeTitle>Current Staking</CurrentStakeTitle>

        //         {ledgerArrTh.map((res: any, index: number) => {
        //           return (
        //             <>
        //               {!res.ended ? (
        //                 <CurrentItem key={index}>
        //                   <div>{new BigNumber(res.amount).div(10 ** 18).toString()}</div>
        //                   <Unstake
        //                     onClick={() => {
        //                       unStakeHandler(index);
        //                     }}
        //                   >
        //                     UNSTAKE
        //                   </Unstake>
        //                 </CurrentItem>
        //               ) : (
        //                 ""
        //               )}
        //             </>
        //           );
        //         })}
        //       </CurrentStaking>
        //     </MobileStakingPanel>
        //   </MobileBlock>
        // </MobileBox>
        <></>
      ) : (
        <StakingWrap>
          <Column maxWidth={1000}>
            <StakingTitle>
              <StakingTitleApi>API</StakingTitleApi>
              <StakingTitleStak>Staking</StakingTitleStak>
              <StakingTitleDashboard>Dashboard</StakingTitleDashboard>
            </StakingTitle>
            <Trade>
              Trade Bitcoin, Ethereum, USDT, and the top altcoins on the legendary crypto asset
              exchange.
            </Trade>
            <StartedBtn>
              Get Started <span className="iconfont">&#xeb08;</span>{" "}
            </StartedBtn>
          </Column>
          <Row>
            <Column maxWidth={301}>
              <MyStaking>
                <MyStakingTitle>My API Staking</MyStakingTitle>
                <MyStakingUl>
                  <MyStakingLi
                    onClick={() => {
                      setCurrentLi(1);
                    }}
                    style={{
                      backgroundColor: currentLi === 1 ? "rgba(102,57,229,1)" : "rgba(13,10,36,1)",
                      color: currentLi === 1 ? "#FFFFFF" : "#9691B5",
                    }}
                  >
                    Stake
                  </MyStakingLi>
                  <MyStakingLi
                    onClick={() => {
                      setCurrentLi(2);
                    }}
                    style={{
                      backgroundColor: currentLi === 2 ? "rgba(102,57,229,1)" : "rgba(13,10,36,1)",
                      color: currentLi === 2 ? "#FFFFFF" : "#9691B5",
                    }}
                  >
                    Unstake
                  </MyStakingLi>
                </MyStakingUl>
                {currentClass(1)}
              </MyStaking>
            </Column>
            {/* <Column maxWidth={279}>
              <MyStaking>
                <MyStakingTitle>My API Staking</MyStakingTitle>
              </MyStaking>
            </Column>
            <Column maxWidth={279}>
              <MyStaking>
                <MyStakingTitle>My API Staking</MyStakingTitle>
              </MyStaking>
            </Column> */}
          </Row>
        </StakingWrap>
      )}
    </>
  );
}
