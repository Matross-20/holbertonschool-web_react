import React from "react";
import BodySection from "./BodySection.js";
import { StyleSheet, css } from 'aphrodite';
import PropTypes from "prop-types";


const styles = StyleSheet.create({
    margin: {
        marginBottom: 40
    }
    
})
export default function BodySectionWithMarginBottom(props) {
    return (
      <div className={css(styles.margin)}>
          <BodySection {...props}/>
      </div>
    );
}
BodySectionWithMarginBottom.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};