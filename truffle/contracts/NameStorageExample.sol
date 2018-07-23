pragma solidity ^0.4.23;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";

contract NameStorageExample is Ownable {
    string public name;
    uint32[2] public numbers;

    event NameChangedEvent(string previousName, string newName);

    constructor() public {
        name = "NameStorageExample";
        numbers = [24, 42];
    }

    function changeName(
        string newName
    ) public onlyOwner {
        emit NameChangedEvent(name, newName);
        name = newName;
    }

    function getName() external view
        returns(string) {
        return name;
    }

    function getNumbers() external view
        returns(uint32[2]) {
        return numbers;
    }
}