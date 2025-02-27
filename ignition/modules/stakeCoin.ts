// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const JAN_1ST_2030 = 1893456000;
const ONE_GWEI: bigint = 1_000_000_000n;
const totalSuply = 10000;
const StakeCoinModule = buildModule("StakeCoinModule", (m) => {
//   const unlockTime = m.getParameter("unlockTime", JAN_1ST_2030);
//   const lockedAmount = m.getParameter("lockedAmount", ONE_GWEI);
const totalSupply = m.getParameter("_totalSupply", totalSuply);
  

  const lock = m.contract("StakeCoin", [totalSupply]);

  return { lock };
});

export default StakeCoinModule;
