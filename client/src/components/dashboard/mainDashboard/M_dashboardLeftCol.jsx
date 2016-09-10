// Left column is going to hold the list of classes, students, or assignments
import React from 'react';

// Components
import DashboardLeftColItem from './M_dashboardLeftColItem.jsx';

const DashboardLeftCol = ({classes}) => {

        return (
            <div className="dashboardLeftCol">
                <ul>
                    {classes.map((classDetails) =>
                        <DashboardLeftColItem
                            key={classDetails.id}
                            classDetails={classDetails}
                        />
                    )}
                </ul>
            </div>

        )
};

export default DashboardLeftCol;