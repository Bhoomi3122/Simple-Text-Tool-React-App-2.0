import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Alert(props) {
    useEffect(() => {
        // If there is an alert, set a timer to hide it after 1.5 seconds
        if (props.alert) {
            const timer = setTimeout(() => {
                // Call a function to clear the alert after the timer expires
                props.clearAlert(); 
            }, 1500); // 1.5 seconds

            // Cleanup function to clear the timer if the component unmounts
            return () => clearTimeout(timer);
        }
    }, [props.alert, props.clearAlert]);

    return (
        <div style={{ height: "60px" }}>
            {props.alert &&
                <div className="alert alert-success" role="alert">
                    {props.alert.type}: {props.alert.msg}
                </div>}
        </div>
    );
}

// Define PropTypes for the component
Alert.propTypes = {
    alert: PropTypes.shape({
        type: PropTypes.string.isRequired,
        msg: PropTypes.string.isRequired
    }),
    clearAlert: PropTypes.func.isRequired
};
