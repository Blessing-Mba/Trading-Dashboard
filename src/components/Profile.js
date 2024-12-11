import React, { useState } from 'react';
import md5 from 'crypto-js/md5';
import Gravatar from './Gravatar';
import './Auth.css';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [gravatarUrl, setGravatarUrl] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hash = md5(email.trim().toLowerCase()).toString();
    setGravatarUrl(`https://www.gravatar.com/avatar/${hash}`);
    fetchGitHubRepos(email);
  };

  const fetchGitHubRepos = (email) => {
    fetch(`https://api.github.com/search/users?q=${email}`)
      .then(response => response.json())
      .then(data => {
        if (data.items && data.items.length > 0) {
          const username = data.items[0].login;
          return fetch(`https://api.github.com/users/${username}/repos`);
        } else {
          throw new Error('No associated GitHub user found.');
        }
      })
      .then(response => response.json())
      .then(repos => setRepos(repos))
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <div id="user-info">
        <Gravatar url={gravatarUrl} />
        <div id="github-repos">
          {repos.length > 0 && <h2>GitHub Repositories</h2>}
          {repos.map((repo) => (
            <div key={repo.id}>{repo.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Auth;
