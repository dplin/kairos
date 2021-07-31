import React, {useState} from 'react'
import { promises as fs } from 'fs'
import path from 'path'
const headerEn = require('../includes/header/header-en.html').default

export default function Header() {

  return ( 
    <>
      <header dangerouslySetInnerHTML={{__html: headerEn }}></header>
    </>
  );
};