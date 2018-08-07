
export default async function expectEvent(promise, eventName) {
    const result = await promise;
    let found = false;

    //TODO: should be optimized
    await result.logs.map(log => {
        if (log.event === eventName) {
            found = true;
            return;
        }
    });

    if (found === true) {
        return;
    }

    assert.fail("Expected event, got '" + result.logs + "' instead");
};