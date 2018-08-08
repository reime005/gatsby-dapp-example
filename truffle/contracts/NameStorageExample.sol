pragma solidity ^0.4.23;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";

/// @title Contract Example for a storing names
/// @author Marius Reimer (reime005) <reime005@gmail.com>
/// @notice 
/// @dev This is the core contract
contract NameStorageExample is Ownable {
    string internal contractName;

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

    /// @notice Fallback method. Sending ether to this contract 
    /// will cause expection, since 'payable' is missing. 
    function() public {
        revert();
    }
    
    /// @notice Returns index and then increments it
    /// @return Name Index counter before incrementing
    function nextIndex() 
        internal
        returns(uint) {
        return currentIndex++;
    }

    /// @notice Owner can change the name of the contract
    /// @param newContractName The new contract name
    function changeContractName(
        string newContractName
    ) public onlyOwner {
        emit ContractNameChanged(contractName, newContractName);
        contractName = newContractName;
    }

    /// @notice Changes the name for the sender's address
    /// @param newName The new name for the sender's address
    function changeAddressName(
        string newName
    ) public {
        emit AddressNameChanged(msg.sender, addressNames[msg.sender], newName);
        addressNames[msg.sender] = newName;
    }

    /// @notice Adds a name at the current index
    /// @param name The name to be added
    function addIndexName(
        string name
    ) public {
        uint index = nextIndex();
        emit IndexNameAdded(msg.sender, index, name);
        indexNames[index] = name;
    }

    /// @notice Retrieves the name at an index
    /// @param index The index to retrieve the name from
    /// @return string at the specified position
    function getIndexName(
        uint index
    ) external view 
        returns(string) {
        return indexNames[index];
    }

    /// @notice Retrieves the name for the sender's address
    /// @return name string at sender's address 
    function getAddressName() 
        external view
        returns(string) {
        return addressNames[msg.sender];
    }

    /// @notice Retrieves the contract name
    /// @return contract name string
    function getContractName() 
        external view
        returns(string) {
        return contractName;
    }
}