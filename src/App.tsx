import './App.css'

const profile = {
  name: 'Duraibabu S',
  rollNo: '250278',
  stream: 'BTech AIDS',
  batch: '2025-29',
  phone: '7397178106',
  school: 'Chanakya Vidyashram CBSE School',
  schoolLocation: 'Marakkanam, Tamil Nadu',
  college: 'Mailam Engineering College',
  collegeTagline: 'Best Engineering College in Tamil Nadu | Mailam',
}

const highlights = [
  { label: 'Roll No', value: profile.rollNo },
  { label: 'Stream', value: profile.stream },
  { label: 'Batch', value: profile.batch },
]

const journey = [
  {
    title: 'Schooling',
    place: profile.school,
    detail: `CBSE School, ${profile.schoolLocation}`,
  },
  {
    title: 'College',
    place: profile.college,
    detail: profile.collegeTagline,
  },
]

function App() {
  return (
    <main className="portfolio-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Student Portfolio</p>
          <h1>{profile.name}</h1>
          <p className="intro">
            Ambitious AI and Data Science student building a strong academic
            foundation with a clear focus on growth, discipline, and future-ready
            skills.
          </p>

          <div className="highlight-grid">
            {highlights.map((item) => (
              <article className="info-chip" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </article>
            ))}
          </div>
        </div>

        <aside className="profile-card">
          <div className="avatar-badge" aria-hidden="true">
            DS
          </div>
          <p className="card-label">Academic Identity</p>
          <h2>{profile.stream}</h2>
          <p className="card-note">Batch {profile.batch}</p>

          <div className="contact-card">
            <span>Phone</span>
            <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          </div>
        </aside>
      </section>

      <section className="content-grid">
        <article className="panel panel-accent">
          <p className="section-tag">About</p>
          <h2>Focused on learning, consistency, and innovation.</h2>
          <p>
            Duraibabu is currently pursuing {profile.stream} and is part of the{' '}
            {profile.batch} batch. His academic journey reflects a strong start in
            school and a forward-looking step into engineering education.
          </p>
        </article>

        <article className="panel">
          <p className="section-tag">Education Journey</p>
          <div className="timeline">
            {journey.map((item) => (
              <div className="timeline-item" key={item.title}>
                <span className="timeline-dot" aria-hidden="true"></span>
                <div>
                  <p className="timeline-label">{item.title}</p>
                  <h3>{item.place}</h3>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        <article className="panel">
          <p className="section-tag">Student Snapshot</p>
          <div className="snapshot-grid">
            <div>
              <span>Current Program</span>
              <strong>{profile.stream}</strong>
            </div>
            <div>
              <span>College</span>
              <strong>{profile.college}</strong>
            </div>
            <div>
              <span>School</span>
              <strong>{profile.school}</strong>
            </div>
            <div>
              <span>Location</span>
              <strong>{profile.schoolLocation}</strong>
            </div>
          </div>
        </article>

        <article className="panel contact-panel">
          <p className="section-tag">Contact</p>
          <h2>Let's connect for academic and career opportunities.</h2>
          <a className="contact-link" href={`tel:${profile.phone}`}>
            {profile.phone}
          </a>
          <p>
            This portfolio presents the current academic profile and educational
            background available for Duraibabu S.
          </p>
        </article>
      </section>
    </main>
  )
}

export default App
