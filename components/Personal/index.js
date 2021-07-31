

export default function Personal({ personalInformation }) {
  return (
    <div>
      <h2 className="section-title">Personal</h2>
      {personalInformation.map(info => (
        <div className="content-block" key={info.type}>
          <h3>{info.type}</h3>
          <p>{info.value}</p>
        </div>
      ))}
    </div>
  )
}