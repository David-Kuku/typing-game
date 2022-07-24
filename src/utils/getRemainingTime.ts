import dayjs from 'dayjs';
import { TRemainingTime } from '../types/types';

type TGetTimeFn = (timestampMs: number) => TRemainingTime

type TGetRemainingTimeArgs = {
    nowDayjs: dayjs.Dayjs;
    timestampDayjs: dayjs.Dayjs
}

type TPadWithZero = {
    number: number;
    minLength: number
}

export const getRemainingTimeUntilMsTimestamp: TGetTimeFn = (timestampMs) => {
    const timestampDayjs = dayjs(timestampMs);
    const nowDayjs = dayjs();
    if (timestampDayjs.isBefore(nowDayjs)) {
        return "FINISHED"
    }
    const args: TGetRemainingTimeArgs = {
        nowDayjs,
        timestampDayjs
    }
    return {
        seconds: getRemainingSeconds(args),
        minutes: getRemainingMinutes(args),
    };
}


const getRemainingSeconds = ({ nowDayjs, timestampDayjs }: TGetRemainingTimeArgs) => {
    const seconds = timestampDayjs.diff(nowDayjs, 'seconds') % 60;
    return padWithZeros({ number: seconds, minLength: 2 });
}

const getRemainingMinutes = ({ nowDayjs, timestampDayjs }: TGetRemainingTimeArgs) => {
    const minutes = timestampDayjs.diff(nowDayjs, 'minutes') % 60;
    return padWithZeros({ number: minutes, minLength: 2 });
}

const padWithZeros = ({ number, minLength }: TPadWithZero) => {
    const numberString = number.toString();
    if (numberString.length >= minLength) return numberString;
    return "0".repeat(minLength - numberString.length) + numberString;
}