require("dotenv").config();
const { ethers } = require("ethers");
const hardhat = require("hardhat");

const Wrapped = require("../artifacts/contracts/WrappedEther.sol/WrappedEther.json");

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.url);

  const wrappedEther = new ethers.Contract(
    "0xa91ca5922c21dfec758f0467cc296b49a31ded35",
    Wrapped.abi,
    provider
  );

  const ticker = await wrappedEther.symbol();
  const name = await wrappedEther.name();

  console.log(name);
  console.log(ticker);

  // const WrappedEther = await hardhat.ethers.getContractFactory("WrappedEther");
  // const wrappedEther = await WrappedEther.deploy();
  // await wrappedEther.deployed();
  // console.log("WrappedEther deployed to:", wrappedEther.address);

  // const priceFeed = new ethers.Contract(addr, aggregatorV3InterfaceABI, provider)
  // priceFeed.latestRoundData()
  //     .then((roundData) => {
  //         // Do something with roundData
  //         console.log("Latest Round Data", roundData)
  //     })
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
