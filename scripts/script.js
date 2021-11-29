const { ethers } = require("ethers");
const hardhat = require("hardhat");

async function main() {
  // We get the contract to deploy
  const WrappedEther = hardhat.ethers.getContractFactory("WrappedEther");
  const wrappedEther = await WrappedEther.deploy();

  await wrappedEther.deployed();

  console.log("WrappedEther deployed to:", wrappedEther.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
