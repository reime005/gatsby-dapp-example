pragma solidity ^0.4.24;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";

/// @title Contract Example for a storing names
/// @author Marius Reimer (reime005) <reime005@gmail.com>
/// @notice 
/// @dev This is the core contract
contract NameStorageExample is Ownable {
    string public contractName;

    mapping (uint => string) public indexNames;
    uint public currentIndex;

    mapping (address => string) public addressNames;

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
        private
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

    /// @notice Retrieves the name for the sender's address
    /// @dev Note that addressNames is public, so there is already a getter
    /// @return name string at sender's address 
    function getAddressName() 
        external view
        returns(string) {
        return addressNames[msg.sender];
    }
}