import { EventInput } from '@fullcalendar/angular';

let eventGuid = 0;
const TODAY_STR = () => {
  let dateObj = new Date();
  if(dateObj.getUTCMonth() < 10) {
    return dateObj.getUTCFullYear() + '-' + ('0'+(dateObj.getUTCMonth() + 1));
  } else {
    return dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
  }
}

// Calendar Event Source
let exampleEvents = [
  {
    id: createEventId(),
    start: TODAY_STR() +'-08T08:30:00',
    end: TODAY_STR() +'-08T13:00:00',
    title: 'Google Developers Meetup',
    description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...',
    backgroundColor: 'rgba(1,104,250, .15)',
    borderColor: '#0168fa',
    display: 'block'
  }
];

let birthdayEvents= [
  {
    id: createEventId(),
    start: TODAY_STR() +'-01T18:00:00',
    end: TODAY_STR() +'-01T23:30:00',
    title: 'Jensen Birthday',
    description: 'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis az pede mollis...',
    backgroundColor: 'rgba(16,183,89, .25)',
    borderColor: '#10b759'
  }
];

let holidayEvents= [
  {
    id: createEventId(),
    start: TODAY_STR() +'-04',
    end: TODAY_STR() +'-06',
    title: 'Feast Day',
    backgroundColor: 'rgba(241,0,117,.25)',
    borderColor: '#f10075'
  }
];

let discoveredEvents = [
  {
    id: createEventId(),
    start: TODAY_STR() + '-17T08:00:00',
    end: TODAY_STR() + '-18T11:00:00',
    title: 'Web Design Workshop Seminar',
    backgroundColor: 'rgba(0,204,204,.25)',
    borderColor: '#00cccc'
  }
];

let meetupEvents= [
  {
    id: createEventId(),
    start: TODAY_STR() +'-03',
    end: TODAY_STR() +'-05',
    title: 'UI/UX Meetup Conference',
    backgroundColor: 'rgba(91,71,251,.2)',
    borderColor: '#5b47fb'
  }
];

let otherEvents= [
  {
    id: createEventId(),
    start: TODAY_STR() +'-06',
    end: TODAY_STR() +'-08',
    title: 'My Rest Day',
    backgroundColor: 'rgba(253,126,20,.25)',
    borderColor: '#fd7e14'
  }
];


export const INITIAL_EVENTS: EventInput[] = [ ...exampleEvents, ...birthdayEvents, ...holidayEvents, ...discoveredEvents, ...meetupEvents, ...otherEvents];

// export const INITIAL_EVENTS: EventInput[] = [
//   {
//     id: createEventId(),
//     title: 'All-day event',
//     start: TODAY_STR
//   },
//   {
//     id: createEventId(),
//     title: 'Timed event',
//     start: TODAY_STR + 'T12:00:00'
//   }
// ];

export function createEventId() {
  return String(eventGuid++);
}