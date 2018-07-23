pragma solidity ^0.4.23;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";

contract NameStorageExample is Ownable {
    string public name = "ExampleStorage";
    int[2] public array = [24, 42];

    event NameChangedEvent(string previousName, string newName);

    constructor() public {
        name = "ExampleStorage";
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
}