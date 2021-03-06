import React from 'react';
import AddButton from './AddBtn/AddBtn.jsx';
import CurrentDate from './CurrentDate/CurrentDate.jsx';
import MonthNavigation from './MonthNavigation/MonthNavigation.jsx';
import TableTitle from './TableNavigation/TableNavigation.jsx';
import './header.scss';

const Header = ({
    currDate,
    viewedDate,
    goToNextWeek,
    goToPrevWeek,
    goToCurrent,
    showPopUp,
    popupIsShow, }) => {

    return (
        <header className={`header ${popupIsShow ? 'show' : 'hide'}`}>
            <nav className="header-navigatin">
                <div className="header-navigatin__wr">
                    <AddButton showPopUp={showPopUp} />
                    <CurrentDate goToCurrent={goToCurrent} />
                    <MonthNavigation
                        viewedDate={viewedDate}
                        goToNextWeek={goToNextWeek}
                        goToPrevWeek={goToPrevWeek}
                    />
                </div>
            </nav>

            <TableTitle
                currDate={currDate}
                viewedDate={viewedDate}
            />
        </header>
    )
}


export default Header;