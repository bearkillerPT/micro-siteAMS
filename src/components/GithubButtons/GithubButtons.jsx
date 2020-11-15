import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/bearkillerPT/micro-siteAMS/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Github deste site"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/bearkillerPT/micro-siteAMS"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Github deste site"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
