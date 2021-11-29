//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract WrappedEther is ERC20 {
    uint256 public totalSupplyWether = 0;

    constructor() ERC20("WRAPPED ETHER", "WETH") {}

    function mint() public payable {
        _mint(msg.sender, msg.value);
    }
}
