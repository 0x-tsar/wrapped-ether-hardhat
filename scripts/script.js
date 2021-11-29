require("dotenv").config();
const { ethers } = require("ethers");
const hardhat = require("hardhat");
const Wrapped = require("../artifacts/contracts/WrappedEther.sol/WrappedEther.json");
const privateKey = process.env.mnemonic;

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.url);

  const wrappedEther = new ethers.Contract(
    "0xa91ca5922c21dfec758f0467cc296b49a31ded35",
    Wrapped.abi,
    provider
  );

  // let provider = ethers.getDefaultProvider();
  let wallet = new ethers.Wallet(privateKey, provider);
  // let signed = new wallet.connect(provider);
  const account = wallet.address;

  const signed = wrappedEther.connect(wallet);

  let totalSupplyWether = await wrappedEther.totalSupplyWether();
  console.log(`totalSupplyWether: ${totalSupplyWether}`);

  let balance = await wrappedEther.balanceOf(account);
  console.log(`balance before: ${balance}`);

  const value = ethers.utils.parseUnits("0.1");

  await signed.mint({ from: account, value: value });

  balance = await wrappedEther.balanceOf(account);
  console.log(`balance after: ${balance}`);

  console.log("WITHDRAWING ETHER");
  console.log("------------");

  await signed.withdraw(value);

  balance = await wrappedEther.balanceOf(account);
  console.log(`final weth balance: ${balance}`);

  // Get the current balance
  // let balance = await wallet.getBalance();
  // console.log(balance.toString());

  // Make sure we are sweeping to an EOA, not a contract. The gas required
  // to send to a contract cannot be certain, so we may leave dust behind
  // or not set a high enough gas limit, in which case the transaction will
  // fail.
  // let code = await provider.getCode(newAddress);
  // if (code !== '0x') { throw new Error('Cannot sweep to a contract'); }

  // let totalSupplyWether = await wrappedEther.totalSupplyWether();
  // console.log(`totalSupplyWether: ${totalSupplyWether}`);

  // const ticker = await wrappedEther.symbol();
  // const name = await wrappedEther.name();

  // console.log(name);
  // console.log(ticker);

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
