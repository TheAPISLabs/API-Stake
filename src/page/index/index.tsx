import React, { useState, useEffect } from "react";
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
import congratsImgs from "../../assets/Congrats.gif";
import WillImgs from "../../assets/APIS-logo 1.png";
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
  cursor: pointer;
  margin: auto;
  &:hover {
    // transform: translateY(-1px);
    opacity: 0.5;
  }
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
  margin-bottom: 26px;
`;
const Row = styled.div`
  display: flex;
  //   padding: 0px 57px 0px 68px;
  box-sizing: border-box;
  width: 100%;
`;
const MyStaking = styled.div`
  padding: 12px 16px;
  box-sizing: border-box;
  width: 301px;
  height: 431px;
  border-radius: 10px;
  opacity: 1;
  border: 0.5px solid rgba(155, 155, 155, 0.3);
  background: rgba(13, 10, 36, 1);
`;
const MyStakingTitle = styled.p`
  color: rgba(252, 252, 253, 1);
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  margin-bottom: 24px;
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
  cursor: pointer;
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
const StakingWrap = styled.div`
  background: #161426;
`;
const StakingTitle = styled.div`
  display: flex;
`;
const TOTALBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 59px;
`;
const TotalStaked = styled.div``;
const TOTALSTAKEDTitle = styled.div`
  color: rgba(119, 126, 144, 1);
  font-size: 12px;
  font-weight: 400;
  /* font-family: "Inter"; */
  text-align: center;
  margin-bottom: 19px;
`;
const TotalNumBox = styled.div`
  display: flex;
  align-items: center;
`;
const TotalNum = styled.div`
  color: rgba(195, 177, 246, 1);
  font-size: 24px;
  font-weight: 400;
  font-family: "Helvetica";
  text-align: center;
  line-height: 24px;
  margin-right: 12px;
`;
const TotalApi = styled.div`
  color: rgba(119, 126, 144, 1);
  font-size: 10px;
  font-weight: 400;
  font-family: "Inter";
  text-align: center;
`;
const AVAILAABLE = styled.div``;
const StakeOrClaim = styled.div`
  width: 125px;
  height: 36px;
  margin-top: 105px;
`;
const StakeOrClaimUl = styled.ul`
  display: flex;
  justify-content: space-between;
`;
const StakeOrClaimLiS = styled.li`
  color: rgba(119, 126, 144, 1);
  font-size: 18px;
  font-weight: 400;
  font-family: "Inter";
  //   pointer-events: none;
  cursor: not-allowed;
`;
const StakeOrClaimLiSe = styled.li`
  color: rgba(119, 126, 144, 1);
  font-size: 18px;
  font-weight: 400;
  font-family: "Inter";
  cursor: pointer;
`;
const PENDING = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;
const NextClaim = styled.div`
  margin-top: 25px;
`;
const NextClaimIn = styled.div`
  color: rgba(102, 57, 229, 1);
  font-size: 10px;
  font-weight: 400;
  text-align: right;
`;
const Blocks = styled.div`
  color: rgba(102, 57, 229, 1);
  font-size: 10px;
  font-weight: 400;
  text-align: left;
`;
const TotalStakedBox = styled.div`
  width: 279px;
  height: 163px;
  border-radius: 10px;
  border: 0.5px solid rgba(155, 155, 155, 0.3);
  padding: 15px 8px 13px 26px;
  margin-bottom: 20px;
`;
const TotalStakedBoxTitle = styled.div`
  color: rgba(252, 252, 253, 1);
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  line-height: 24px;
`;

const BTCUSDT = styled.div`
  color: rgba(177, 181, 195, 1);
  font-size: 12px;
  font-weight: 400;
  text-align: left !important;
  line-height: 20px;
  margin-top: 29px;
  margin-bottom: 6px;
`;
const BTCUSDTS = styled.div`
  color: rgba(177, 181, 195, 1);
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  line-height: 20px;
  margin-top: 29px;
  margin-bottom: 6px;
`;
const Btc = styled.div`
  display: flex;
`;
const AxsNum = styled.div`
  color: rgba(252, 252, 253, 1);
  font-size: 24px;
  font-weight: 400;
  text-align: left;
  line-height: 24px;
  margin-right: 7px;
`;
const Axs = styled.div`
  color: rgba(177, 181, 195, 1);
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  line-height: 20px;
`;
const AxsNums = styled.div`
  color: rgba(252, 252, 253, 1);
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  line-height: 20px;
  margin-top: 4px;
`;
const APIPriceBox = styled.div`
  width: 279px;
  height: 102px;
  border: 0.5px solid rgba(155, 155, 155, 0.3);
  padding: 20px 26px;
  border-radius: 10px;
  margin-bottom: 21px;
`;
const APIPriceTitle = styled.div`
  color: rgba(155, 155, 155, 1);
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  line-height: 20px;
`;
const DAILYTitle = styled.div`
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  line-height: 20px;
`;
const APIPriceNum = styled.div`
  color: rgba(252, 252, 253, 1);
  font-size: 24px;
  font-weight: 400;
  text-align: left;
  line-height: 32px;
`;
const ClaimBox = styled.div`
  width: 899px;
  height: 348px;
  border: 0.5px solid rgba(155, 155, 155, 0.3);
  padding: 92px 33px 30px 56px;
  position: relative;
`;
// const SorryBox = styled.div`
//   width: 899px;
//   height: 348px;
//   border: 0.5px solid rgba(155, 155, 155, 0.3);
//   padding: 92px 33px 30px 56px;
// `;
const Congrats = styled.p`
  color: rgba(252, 252, 253, 1);
  font-size: 36px;
  font-weight: 400;
  text-align: center;
  line-height: 24px;
  position: relative;
  z-index: 1111;
`;
const ClaimForm = styled.div`
  width: 810px;
  height: 83px;
  border: 1px solid #6639e5;
  border-radius: 10px;
  margin-top: 48px;
  display: flex;
  justify-content: space-between;
  padding: 17px 32px;
`;
const Receive = styled.div`
  z-index: 100;
`;
const CongratsImg = styled.img`
  position: absolute;
  top: -11px;
  left: 106px;
  z-index: 10;
  width: 700px;
  opacity: 0;
  animation: fadenum 1.5s;
  @keyframes fadenum {
    0% {
      opacity: 0;
    }
    99% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Will = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  color: #b1b5c3;
  text-align: center;
`;
const WillNum = styled.div`
  color: rgba(252, 252, 253, 1);
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  line-height: 32px;
`;
const ClaimBtn = styled.div`
  width: 198px;
  height: 46px;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(159, 107, 244, 1) 0%, rgba(102, 57, 229, 1) 100%);
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  line-height: 46px;
  cursor: pointer;
  z-index: 100;
  &:hover {
    opacity: 0.5;
  }
`;
// const SorryBtn = styled.div`
//   width: 198px;
//   height: 46px;
//   border-radius: 18px;
//   background: linear-gradient(180deg, rgba(159, 107, 244, 1) 0%, rgba(102, 57, 229, 1) 100%);
//   color: rgba(255, 255, 255, 1);
//   font-size: 18px;
//   font-weight: 500;
//   text-align: center;
//   line-height: 46px;
//   margin-top: 38px;
// cursor: pointer;
//   float: right;
//  &:hover {
// transform: translateY(-1px);
//  opacity: 0.5;
// }
// `;
const CongratTest = styled.p`
  width: 209px;
  color: rgba(119, 126, 144, 1);
  font-size: 12px;
  font-weight: 400;
  margin: 0 auto;
  position: relative;
  z-index: 1111;
`;
// const SorryTest = styled.p`
//   width: 300px;
//   color: rgba(119, 126, 144, 1);
//   font-size: 12px;
//   font-weight: 400;
//   margin: 0 auto;
// `;
const FoodBox = styled.div`
  width: 100%;
  background: #1c1930;
  margin-top: 275px;
  padding: 87px;
`;
const GetStartedBox = styled.div`
  margin: 0 auto;
  width: 1023px;
  border-bottom: 1px solid rgba(50, 46, 75, 1);
`;
const Looks = styled.p`
  color: rgba(126, 126, 126, 1);
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  line-height: 16px;
  margin-bottom: 28px;
`;

const Powers = styled.p`
  color: rgba(130, 119, 144, 1);
  font-size: 21px;
  font-weight: 400;
  text-align: center;
  line-height: 16px;
  margin-bottom: 26px;
`;
const TheRates = styled.p`
  width: 758px;
  height: 29px;
  color: rgba(155, 155, 155, 1);
  font-size: 11px;
  font-weight: 400;
  margin: 0 auto;
  line-height: 14.2px;
  margin-top: 58px;
  margin-bottom: 62px;
`;
const CopyrightBox = styled.div`
  margin: 0 auto;
  width: 1023px;
  padding-top: 58px;
`;
const CopyrightTitle = styled.div`
  display: flex;
`;
const Copyright = styled.p`
  color: rgba(152, 158, 172, 1);
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  line-height: 24px;
  margin-right: 20px;
`;
const Blockchains = styled.p`
  color: rgba(152, 158, 172, 1);
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  line-height: 24px;
`;
const LinkBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 569px;
`;
const Link = styled.a`
  color: rgba(195, 177, 246, 1);
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  line-height: 24px;
  &:hover {
    // transform: translateY(-1px);
    opacity: 0.5;
  }
`;
const WillImgAndNum = styled.div`
  display: flex;
  align-items: center;
`;
const WillImg = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #fff;
  margin-left: 24px;
`;

export default function Home() {
  const [currentLi, setCurrentLi] = useState(1);
  const [CongratsData, setCongratsData] = useState({
    WillNum: "687.26",
  });
  useEffect(() => {
    setCongratsData({
      WillNum: "687.26",
    });
  }, []);
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
  const [StakeOrClaimLi, setStakeOrClaimLi] = useState(2);
  const StakeOrClaimClass = (index: number) => {
    return StakeOrClaimLi === index ? (
      <>
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
              <TOTALBox>
                <TotalStaked>
                  <TOTALSTAKEDTitle>TOTAL STAKED</TOTALSTAKEDTitle>
                  <TotalNumBox>
                    <TotalNum>0</TotalNum>
                    <TotalApi>API~$0.00</TotalApi>
                  </TotalNumBox>
                </TotalStaked>
                <AVAILAABLE>
                  <TOTALSTAKEDTitle>AVAILAABLE IN WALLET</TOTALSTAKEDTitle>
                  <TotalNumBox>
                    <TotalNum>112</TotalNum>
                    <TotalApi>API~$0.00</TotalApi>
                  </TotalNumBox>
                </AVAILAABLE>
              </TOTALBox>
              <PENDING>
                <AVAILAABLE>
                  <TOTALSTAKEDTitle>AVAILAABLE IN WALLET</TOTALSTAKEDTitle>
                  <TotalNumBox>
                    <TotalNum>0</TotalNum>
                    <TotalApi>API~$0.00</TotalApi>
                  </TotalNumBox>
                </AVAILAABLE>
                <NextClaim>
                  <NextClaimIn>Next claim in</NextClaimIn>
                  <Blocks>5636346 blocks</Blocks>
                </NextClaim>
              </PENDING>
            </MyStaking>
          </Column>
          <Column maxWidth={279}>
            <TotalStakedBox>
              <TotalStakedBoxTitle>Total Staked</TotalStakedBoxTitle>
              <BTCUSDT>BTC/USDT</BTCUSDT>
              <Btc>
                <AxsNum>36,641.20</AxsNum>
                <Axs>AXS</Axs>
              </Btc>

              <AxsNums>36,641.20</AxsNums>
            </TotalStakedBox>
            <TotalStakedBox>
              <TotalStakedBoxTitle>Estimated Rewards</TotalStakedBoxTitle>
              <BTCUSDTS>BTC/USDT</BTCUSDTS>
              <AxsNum>75%</AxsNum>
              <AxsNums>APR</AxsNums>
            </TotalStakedBox>
          </Column>
          <Column maxWidth={279}>
            <APIPriceBox>
              <APIPriceTitle>API Price</APIPriceTitle>
              <APIPriceNum>$29.24</APIPriceNum>
            </APIPriceBox>
            <APIPriceBox>
              <DAILYTitle>DAILY REWARDS</DAILYTitle>
              <APIPriceNum>36,641.20 AXS</APIPriceNum>
            </APIPriceBox>
            <APIPriceBox>
              <APIPriceTitle>CIRCULATING SUPPLY</APIPriceTitle>
              <APIPriceNum>36,641.20 AXS</APIPriceNum>
            </APIPriceBox>
          </Column>
        </Row>
      </>
    ) : (
      <>
        {" "}
        <ClaimBox>
          <Congrats>Congrats !</Congrats>
          <CongratsImg src={congratsImgs} />
          <CongratTest>
            You are eligible for airdrop You will be able to claim your tokens!
          </CongratTest>
          <ClaimForm>
            <Receive>
              <Will>0xABB3…f8F7 will receive</Will>
              <WillImgAndNum>
                <WillNum>{CongratsData.WillNum}</WillNum>
                <WillImg src={WillImgs} />
              </WillImgAndNum>
            </Receive>
            <ClaimBtn>Claim tokens</ClaimBtn>
          </ClaimForm>
        </ClaimBox>
        {/* <SorryBox>
          <Congrats>Sorry</Congrats>
          <SorryTest>
            You are not eligible for this airdrop round. Don’t worry! There will be more airdrops in
            the future. The best way to improve your odds is to get involved. Start exploring
            today:)
          </SorryTest>
          <SorryBtn>Exploring HOOK</SorryBtn>
        </SorryBox>{" "} */}
      </>
    );
  };
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

          <Column maxWidth={910}>
            <StakeOrClaim>
              <StakeOrClaimUl>
                <StakeOrClaimLiS
                  onClick={() => {
                    return;
                    setStakeOrClaimLi(1);
                  }}
                  style={{
                    borderBottom: StakeOrClaimLi === 1 ? " 2px solid rgb(104, 99, 212)" : "",
                    color: StakeOrClaimLi === 1 ? "#6863D4" : "#777E90",
                  }}
                >
                  Stake
                </StakeOrClaimLiS>
                <StakeOrClaimLiSe
                  onClick={() => {
                    setStakeOrClaimLi(2);
                  }}
                  style={{
                    borderBottom: StakeOrClaimLi === 2 ? " 2px solid rgb(104, 99, 212)" : "",
                    color: StakeOrClaimLi === 2 ? "#6863D4" : "#777E90",
                  }}
                >
                  Claim
                </StakeOrClaimLiSe>
              </StakeOrClaimUl>
            </StakeOrClaim>
            {StakeOrClaimClass(1)}
          </Column>
          <Column maxWidth={1920}>
            <FoodBox>
              <GetStartedBox>
                <Looks>Total LOOKS helps you earn rewaarda.It’s neat.</Looks>
                <Powers>Get the token that Powers LooksRare</Powers>
                <StartedBtn>
                  Get Started <span className="iconfont">&#xeb08;</span>{" "}
                </StartedBtn>
                <TheRates>
                  The rates shown on this page are only provided for your reference: APR and APY are
                  calculated based on current ROI. The actual rates will fluctuate a lot according
                  to many different factors, including token prices, trading volume, liquidity,
                  amount staked, and more.
                </TheRates>
              </GetStartedBox>
              <CopyrightBox>
                <CopyrightTitle>
                  <Copyright>Copyright 2022 Hook</Copyright>
                  <Blockchains>One-stop Data Analysis For All Blockchains.</Blockchains>
                </CopyrightTitle>
                <LinkBox>
                  <Link href="https://app.gitbook.com/o/dHoRYUVnGdpDW6kzvwKH/s/8MYNEydsCb1yG0qhMpJZ/products/hook">
                    About
                  </Link>
                  <Link href="/licenses">API</Link>
                  <Link href="https://simmmple.com/terms-of-service">Contact</Link>
                  <Link href="https://www.blog.simmmple.com/">Help</Link>
                  <Link href="https://www.blog.simmmple.com/">Jobs</Link>
                  <Link href="https://www.blog.simmmple.com/">Bug Bounty</Link>
                  <Link href="">Brand</Link>
                  <Link href="https://app.gitbook.com/o/dHoRYUVnGdpDW6kzvwKH/s/8MYNEydsCb1yG0qhMpJZ/docs/terms-and-conditions">
                    Terms of Service
                  </Link>
                </LinkBox>
              </CopyrightBox>
            </FoodBox>
          </Column>
        </StakingWrap>
      )}
    </>
  );
}
