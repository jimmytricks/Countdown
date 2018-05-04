# Info 

JS timer to countdown until an event date.

Event date is set through enabling a featured event field in backend, which is then output to DOM through existing API of the CMS (Statmatic v2), 

JS file then works by parsing the event date to a JS date object, then taking the current time and finding the difference. Countdown displays days, hours, minutes and seconds.

If the date of the event, hide <li> items by adding a custom hide class. Then add a show class to the text displaying no event

If the date of event is in the past, set counters to 0
