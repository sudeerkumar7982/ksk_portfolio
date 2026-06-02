import React, { useEffect, useState } from 'react';
import { FiGitCommit, FiStar, FiBook, FiUsers, FiExternalLink } from 'react-icons/fi';

const GITHUB_USERNAME = 'sudeerkumar7982';

const GithubActivity = () => {
  const [stats, setStats] = useState({ repos: '-', stars: '-', followers: '-', commits: '-' });
  const [activity, setActivity] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        const userData = await userRes.json();

        const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`);
        const reposData = await reposRes.json();

        const totalStars = Array.isArray(reposData)
          ? reposData.reduce((acc, r) => acc + r.stargazers_count, 0)
          : 0;

        setStats({
          repos: userData.public_repos ?? '-',
          stars: totalStars,
          followers: userData.followers ?? '-',
          commits: reposData.length ?? '-',
        });

        const eventsRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/events/public?per_page=10`);
        const eventsData = await eventsRes.json();

        if (Array.isArray(eventsData)) {
          const formatted = eventsData
            .filter(e => ['PushEvent', 'CreateEvent', 'WatchEvent', 'ForkEvent'].includes(e.type))
            .slice(0, 5)
            .map(e => ({
              id: e.id,
              type: e.type,
              repo: e.repo.name,
              date: new Date(e.created_at).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
            }));
          setActivity(formatted);
        }
      } catch (err) {
        console.error('GitHub API error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const eventLabel = (type) => {
    switch (type) {
      case 'PushEvent': return 'Pushed commits to';
      case 'CreateEvent': return 'Created repository';
      case 'WatchEvent': return 'Starred';
      case 'ForkEvent': return 'Forked';
      default: return 'Activity on';
    }
  };

  const eventIcon = (type) => {
    switch (type) {
      case 'PushEvent': return <FiGitCommit size={16} />;
      case 'WatchEvent': return <FiStar size={16} />;
      case 'ForkEvent': return <FiBook size={16} />;
      default: return <FiGitCommit size={16} />;
    }
  };

  return (
    <section id="github-activity" className="github-section">
      <h2 className="section-title">GitHub Activity</h2>

      <div className="github-stats-grid">
        <div className="github-stat-card">
          <div className="github-stat-number">{stats.repos}</div>
          <div className="github-stat-label">Public Repositories</div>
        </div>
        <div className="github-stat-card">
          <div className="github-stat-number">{stats.stars}</div>
          <div className="github-stat-label">Total Stars</div>
        </div>
        <div className="github-stat-card">
          <div className="github-stat-number">{stats.followers}</div>
          <div className="github-stat-label">Followers</div>
        </div>
        <div className="github-stat-card">
          <div className="github-stat-number">{stats.commits}</div>
          <div className="github-stat-label">Repositories</div>
        </div>
      </div>

      <div className="github-activity-feed">
        <div className="feed-header">
          <h3>Recent Activity</h3>
          <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer">
            View Profile <FiExternalLink size={14} style={{ marginLeft: 4, verticalAlign: 'middle' }} />
          </a>
        </div>

        {loading ? (
          <div className="github-loading">Loading activity...</div>
        ) : activity.length === 0 ? (
          <div className="github-loading">No recent public activity found.</div>
        ) : (
          activity.map(item => (
            <div key={item.id} className="activity-item">
              <div className="activity-icon">{eventIcon(item.type)}</div>
              <div className="activity-text">
                <div className="activity-title">{eventLabel(item.type)} <strong>{item.repo}</strong></div>
                <div className="activity-meta">{item.date}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default GithubActivity;
