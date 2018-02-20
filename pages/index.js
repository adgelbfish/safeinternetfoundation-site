import React from 'react'
import {Link} from 'react-router'
import {prefixLink} from 'gatsby-helpers'
import Helmet from "react-helmet"
import {config} from 'config'

!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/b17bb4f8571c5a3c4c162f730/a57b32c343e45dd796cc62435.js");

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            {"name": "description", "content": "Sample"},
            {"name": "keywords", "content": "sample, something"},
          ]}
        />
        <h1>
          Help make the internet a safe place for people
        </h1>
        <p>
          The internet is a great way to get a lot of good things… and a lot of unwanted and dangerous things.

          My dream is that we can all get together to stay safe in an evolving world, because everybody wants to be safe, and we’re better together.

          With the understanding that no two people are the same, the goal is to create a framework that assists in people getting what they want while keeping what they don’t out.

          It is my firm belief that mature adults are capable of making their own decisions about what is good or not, and I want to leave that decision to each individual person. The idea here is to give people the power to act on their decisions about what they want on their devices.

          Get involved!

          <a href="https://join.slack.com/t/safeinternetfdn/shared_invite/enQtMzE2MDU4MzY3MzAwLTk5NTEzMzJmYWZjZDhhYmNjNWIxNTQ4YzQ3OWExMDc2ZjM2MmIxYjgwZjllOGIxNmUxZjNmYzRhZTNhZTgyYjM">Join the slack team</a> or send me an email for info at avraham@safeinternet.foundation
        </p>
      </div>
    )
  }
}
