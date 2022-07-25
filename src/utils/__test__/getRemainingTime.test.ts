import { getRemainingTimeUntilMsTimestamp } from "../getRemainingTime";


test('makes sure getRemainingTimeUntilMsTimestamp runs correctly', async () => {
    const oneAndHalfMin = 2.5 * 60 * 1000
    const currentTimeStamp = Date.now()
    const result = getRemainingTimeUntilMsTimestamp(currentTimeStamp + oneAndHalfMin)

    const expectedResult = {
        "minutes": "02",
        "seconds": "30"
    }
    expect(result).toEqual(expectedResult);
})