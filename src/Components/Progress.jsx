export default function Progress({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const percent = total ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="progress-tracker">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${percent}%` }} />
      </div>
      <div style={{ marginTop: 8, color: '#555' }}>
        {completed} of {total} tasks completed ({percent}%)
      </div>
    </div>
  );
}