import React from 'react'
import Link from 'gatsby-link'
import './p2.css'

import { Anchor } from 'antd'

const p2 = () => (
  <div className="content">
    <h1>Hi from the second page</h1>
    <p>Welcome to p2</p>
    <Link to="/">Go back to the homepage</Link>
    <Anchor>
    <Link href="#components-anchor-demo-basic" title="Basic demo" />
    <Link href="#components-anchor-demo-static" title="Static demo" />
    <Link href="#API" title="API">
      <Link href="#Anchor-Props" title="Anchor Props" />
      <Link href="#Link-Props" title="Link Props" />
    </Link>
  </Anchor>
  </div>
)

export default p2
