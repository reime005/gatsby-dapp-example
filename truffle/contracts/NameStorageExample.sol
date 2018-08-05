pragma solidity ^0.4.23;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";

contract NameStorageExample is Ownable {
    string public name;
    string public foo;
    uint32[2] public numbers;

    event NameChangedEvent(string previousName, string newName);
    event FooChangedEvent(address changer, string previousFoo, string newFoo);

    constructor() public {
        name = "NameStorageExample";
        numbers = [24, 42];
        foo = "foo";
    }

    function changeName(
        string newName
    ) public onlyOwner {
        emit NameChangedEvent(name, newName);
        name = newName;
    }

    function changeFoo(
        string newFoo
    ) public {
        emit FooChangedEvent(msg.sender, foo, newFoo);
        foo = newFoo;
    }

    function getFoo() external view
        returns(string) {
        return foo;
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