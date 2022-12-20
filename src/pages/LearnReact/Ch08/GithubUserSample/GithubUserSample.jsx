import React, { useState } from 'react'
import GitHubUser from '../components/GitHubUser'

export default function GithubUserSample() {
  const [login, setLogin] = useState('moonhighway')
  return <GitHubUser login={login} />
}
