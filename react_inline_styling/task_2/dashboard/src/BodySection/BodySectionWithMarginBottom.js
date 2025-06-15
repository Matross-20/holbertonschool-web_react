import React from 'react';
import BodySection from './BodySection';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite'

export default function BodySectionWithMarginBottom(props) {
    return (
        <div className={css(styles.margin)}>
            <BodySection {...props}>

            </BodySection>
        </div>
    )
}

BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}

const styles = StyleSheet.create({
    margin: {
        marginBottom: "40px",
    }
});
