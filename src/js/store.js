export let currentEvents = [];

export function setCurrentEvents(events) {
  currentEvents = [...events];
}

export function addCurrentEvents(events) {
  currentEvents.push(...events);
}