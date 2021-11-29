require("dotenv").config();
const { ethers } = require("ethers");
const hardhat = require("hardhat");

const Wrapped = require("../artifacts/contracts/WrappedEther.sol/WrappedEther.json");

async function main() {
  console.log(Wrapped.abi);
  // We get the contract to deploy
  // const WrappedEther = await hardhat.ethers.getContractFactory("WrappedEther");
  // const wrappedEther = await WrappedEther.deploy();
  // await wrappedEther.deployed();
  // console.log("WrappedEther deployed to:", wrappedEther.address);

  const provider = new ethers.providers.JsonRpcProvider(
    process.env.url
    // "https://kovan.infura.io/v3/<infura_project_id>"
  );
  // const aggregatorV3InterfaceABI = [{ "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "description", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "uint80", "name": "_roundId", "type": "uint80" }], "name": "getRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "latestRoundData", "outputs": [{ "internalType": "uint80", "name": "roundId", "type": "uint80" }, { "internalType": "int256", "name": "answer", "type": "int256" }, { "internalType": "uint256", "name": "startedAt", "type": "uint256" }, { "internalType": "uint256", "name": "updatedAt", "type": "uint256" }, { "internalType": "uint80", "name": "answeredInRound", "type": "uint80" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "version", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }]
  // const addr = "0x9326BFA02ADD2366b30bacB125260Af641031331"
  // const priceFeed = new ethers.Contract(addr, aggregatorV3InterfaceABI, provider)
  // priceFeed.latestRoundData()
  //     .then((roundData) => {
  //         // Do something with roundData
  //         console.log("Latest Round Data", roundData)
  //     })
}

const wrappedEther = new ethers.Contract(
  "0xa91ca5922c21dfec758f0467cc296b49a31ded35",
  Wrapped.abi,
  provider
);

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
