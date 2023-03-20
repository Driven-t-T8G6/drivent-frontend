import QueryString from 'qs';

export default function useGitHubAuth() {
  const gitHubAuthData = {
    client_id: '247b6bcb261263dac55e',
    redirect_uri: 'http://localhost:3000/githubAuth',
    scope: 'user',
    response_type: 'code'
  };
  
  const stringfiedData = QueryString.stringify(gitHubAuthData);

  const githubURL = 'https://github.com/login/oauth/authorize?' + stringfiedData;
  return githubURL;
}
