pragma solidity 0.8.7;

contract TestlaPower {
    uint256 private horsePower;

    event HorsePowerChanged(uint256 newValue);

    function setHorsePower(uint256 newHorsePower) public {
        horsePower = newHorsePower;
        emit HorsePowerChanged(horsePower);
    }

    function retrieveHorsePower() public view returns(uint256) {
        return horsePower;
    }
}