import React from 'react';
import { StyleSheet, css } from 'aphrodite'
import BodySection from './BodySection';

const style = StyleSheet.create({
    bodySectionWithMargin: {
        marginBottom: '40px',
        width: '100%',
        height: 'auto'
    }
})

export default function BodySectionWithMarginBottom({ ...props }) {
    return <div className={css(style.bodySectionWithMargin)}>
                <BodySection {...props} />
            </div>
}
