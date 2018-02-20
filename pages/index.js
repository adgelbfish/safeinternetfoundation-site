import React from 'react'
import {Link} from 'react-router'
import {prefixLink} from 'gatsby-helpers'
import Helmet from "react-helmet"
import {config} from 'config'



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
          <br/><br/>
          My dream is that we can all get together to stay safe in an evolving world, because everybody wants to be
          safe, and we’re better together.
          <br/><br/>
          With the understanding that no two people are the same, the goal is to create a framework that assists in
          people getting what they want while keeping what they don’t out.
          <br/><br/>
          It is my firm belief that mature adults are capable of making their own decisions about what is good or not,
          and I want to leave that decision to each individual person. The idea here is to give people the power to act
          on their decisions about what they want on their devices.
          <br/><br/>
          Get involved!
          <br/><br/>
          <a
            href="https://join.slack.com/t/safeinternetfdn/shared_invite/enQtMzE2MDU4MzY3MzAwLTk5NTEzMzJmYWZjZDhhYmNjNWIxNTQ4YzQ3OWExMDc2ZjM2MmIxYjgwZjllOGIxNmUxZjNmYzRhZTNhZTgyYjM">Join
            the slack team</a> or send me an email for info at avraham@safeinternet.foundation
        </p>
      </div>
    )
  }
}
