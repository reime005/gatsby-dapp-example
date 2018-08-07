export default async transaction => {
    const txResult = await transaction;
    const gasUsed = txResult.receipt.gasUsed;
    const tx = await web3.eth.getTransaction(txResult.tx);
    return tx.gasPrice.mul(gasUsed);
}