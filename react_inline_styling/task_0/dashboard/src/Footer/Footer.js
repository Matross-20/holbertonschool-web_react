import React from 'react'
import './Footer.css'
import {getFooterCopy, getFullYear} from '../utils/utils'

export default function Footer() {
    return (
      <p>Copyright { getFullYear() } - { getFooterCopy() }</p>
    )
}