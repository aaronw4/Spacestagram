import React from 'react';
import moment from "moment";
moment().format();

export function DateBotton(props) {
    let today = moment().format('YYYY-MM-DD');
    let difference = moment(today).diff(moment(props.date), 'days');
    
    let threeDaysBack = moment(props.date).add(3, 'days').format('YYYY-MM-DD');
    let twoDaysBack = moment(props.date).add(2, 'days').format('YYYY-MM-DD');
    let oneDayBack = moment(props.date).add(1, 'days').format('YYYY-MM-DD');
    let oneDay = moment(props.date).subtract(1, 'days').format('YYYY-MM-DD');
    let twoDays = moment(props.date).subtract(2, 'days').format('YYYY-MM-DD');
    let threeDays = moment(props.date).subtract(3, 'days').format('YYYY-MM-DD');
    let fourDays = moment(props.date).subtract(4, 'days').format('YYYY-MM-DD');
    let fiveDays = moment(props.date).subtract(5, 'days').format('YYYY-MM-DD');
    let sixDays = moment(props.date).subtract(6, 'days').format('YYYY-MM-DD');
    let sevenDays = moment(props.date).subtract(7, 'days').format('YYYY-MM-DD');

return(
<div className="dropdown">
    <button className="dropbtn text">Change Date</button>
        <div className="dropdown-content">
            {difference > 2 ? <button onClick={props.changeDate} value={threeDaysBack} id='three'>{threeDaysBack}</button> : null}
            {difference > 1 ? <button onClick={props.changeDate} value={twoDaysBack} id='two'>{twoDaysBack}</button> : null}
            {difference > 0 ? <button onClick={props.changeDate} value={oneDayBack} id='one'>{oneDayBack}</button> : null}
            <button id='active'>{props.date}</button>
            <button onClick={props.changeDate} value={oneDay}>{oneDay}</button>
            <button onClick={props.changeDate} value={twoDays}>{twoDays}</button>        
            <button onClick={props.changeDate} value={threeDays}>{threeDays}</button>
            <button onClick={props.changeDate} value={fourDays}>{fourDays}</button>
            {difference > 2 ? null : <button onClick={props.changeDate} value={fiveDays}>{fiveDays}</button>}
            {difference > 1 ? null : <button onClick={props.changeDate} value={sixDays}>{sixDays}</button>}
            {difference > 0 ? null : <button onClick={props.changeDate} value={sevenDays}>{sevenDays}</button>} 
        </div>
</div>
)}