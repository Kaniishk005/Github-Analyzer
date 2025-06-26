async function fetchProfile() {
  const username = document.getElementById('username').value;
  const profileDiv = document.getElementById('profile');

  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) throw new Error('User not found');
    
    const data = await res.json();

    document.getElementById('avatar').src = data.avatar_url;
    document.getElementById('name').textContent = data.name || data.login;
    document.getElementById('repos').textContent = `Public Repos: ${data.public_repos}`;
    document.getElementById('followers').textContent = `Followers: ${data.followers}`;
    document.getElementById('following').textContent = `Following: ${data.following}`;

    profileDiv.classList.remove('hidden');
  } catch (err) {
    alert(err.message);
    profileDiv.classList.add('hidden');
  }
}
