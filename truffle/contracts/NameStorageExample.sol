pragma solidity ^0.4.23;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";

contract NameStorageExample is Ownable {
    string public contractName;

    mapping (uint => string) indexNames;
    uint internal currentIndex;

    mapping (address => string) addressNames;

    event ContractNameChanged(string previousContractName, string newContractName);
    event IndexNameAdded(address changer, uint index, string name);
    event AddressNameChanged(address changer, string previousValue, string newValue);

    constructor() public {
        contractName = "NameStorageExample";
        currentIndex = 0;
    }

    function nextIndex() 
        internal
        returns(uint) {
        currentIndex++;
        return currentIndex;
    }

    function changeContractName(
        string newContractName
    ) public onlyOwner {
        emit ContractNameChanged(contractName, newContractName);
        contractName = newContractName;
    }

    function changeAddressName(
        string newName
    ) public {
        emit AddressNameChanged(msg.sender, addressNames[msg.sender], newName);
        addressNames[msg.sender] = newName;
    }

    function addIndexName(
        string name
    ) public
        returns(uint) {
        uint index = nextIndex();
        emit IndexNameAdded(msg.sender, index, name);
        indexNames[index] = name;
        return index;
    }

    function getIndexName(
        uint index
    ) external view 
        returns(string) {
        return indexNames[index];
    }

    function getAddressName() external view
        returns(string) {
        return addressNames[msg.sender];
    }

    function getContractName() external view
        returns(string) {
        return contractName;
    }
}