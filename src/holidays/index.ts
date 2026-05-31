import { HolidayGroupType } from '../types/types';
import { Hakone, Hanoi, Kamakura, Kyoto, Takayama, Tokyo, Yamanouchi } from './2025-honeymoon';
import { Nambigrens } from './2026-africa';

export const holidayGroups: HolidayGroupType[] = [
  {
    id: 'japanmoon',
    name: 'Japanmoon',
    locations: [Tokyo, Hakone, Kyoto, Takayama, Yamanouchi, Kamakura, Hanoi],
  },
  {
    id: 'south-of-africa',
    name: 'South of Africa',
    locations: [Nambigrens],
  },
];