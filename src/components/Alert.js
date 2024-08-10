import React from 'react'
import PropTypes from 'prop-types'
export default function Alert(props) {
    return (
        props.alert &&
             <div className="alert alert-success alert-dismissible fade show" role="alert">
                {props.alert.type}: {props.alert.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
    )
}
