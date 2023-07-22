import * as R from "ramda"
import {v4} from "uuid";

const getSampleEvents = () => {
    // eventId, eventType, eventSubType, eventStart, eventEnd
    const eventType = ["EVENT_TYPE_1", "EVENT_TYPE_2", "EVENT_TYPE_3"]
    const eventSubType = ["EVENT_SUB_TYPE_1", "EVENT_SUB_TYPE_2", "EVENT_SUB_TYPE_3"]

    const events = R.range(0, 10).map(() => {
        const start = getRandomNumber(10)
        const end = start + 5

        return {
            eventId: v4(),
            eventType: eventType[getRandomNumber(3)],
            eventSubType: eventSubType[getRandomNumber(3)],
            eventStart: start,
            eventEnd: end
        }
    })
    console.log(events)
}

const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max)
}

getSampleEvents()