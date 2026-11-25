import { useState } from 'react'

function Office() {
  const [officeName, setOfficeName] = useState('')
  const [officeNumber, setOfficeNumber] = useState('')
  const [deleteNumber, setDeleteNumber] = useState('')
  const [offices, setOffices] = useState(() => {
    const savedOffices = localStorage.getItem('offices')
    return savedOffices ? JSON.parse(savedOffices) : []
  })

  function saveOffice(event) {
    event.preventDefault()

    const newOffice = {
      name: officeName.trim(),
      officeNumber: officeNumber.trim(),
    }

    if (offices.some((office) => office.officeNumber === newOffice.officeNumber)) {
      alert('That office number is already being used.')
      return
    }

    const updatedOffices = [...offices, newOffice]

    try {
      localStorage.setItem('offices', JSON.stringify(updatedOffices))
      setOffices(updatedOffices)
      setOfficeName('')
      setOfficeNumber('')
      alert('Office saved in this browser.')
    } catch {
      alert('Could not save the office in this browser.')
    }
  }

  function deleteOffice(event) {
    event.preventDefault()
    const number = deleteNumber.trim()

    if (!offices.some((office) => office.officeNumber === number)) {
      alert('No office was found with that number.')
      return
    }

    if (!window.confirm(`Delete office ${number}?`)) {
      return
    }

    const updatedOffices = offices.filter((office) => office.officeNumber !== number)

    try {
      localStorage.setItem('offices', JSON.stringify(updatedOffices))
      setOffices(updatedOffices)
      setDeleteNumber('')
      alert('Office deleted from this browser.')
    } catch {
      alert('Could not delete the office from this browser.')
    }
  }

  return (
    <section className="office-management" aria-labelledby="office-heading">
      <h2 id="office-heading">Office Management</h2>
      <p className="office-intro">
        Demo mode: offices are saved in this browser only, not in a server database.
      </p>

      <div className="office-forms">
        <form className="office-form" onSubmit={saveOffice}>
          <h3>Save Office</h3>
          <label htmlFor="office-name">Office name</label>
          <input
            id="office-name"
            type="text"
            value={officeName}
            onChange={(event) => setOfficeName(event.target.value)}
            required
          />

          <label htmlFor="office-number">Office number</label>
          <input
            id="office-number"
            type="text"
            value={officeNumber}
            onChange={(event) => setOfficeNumber(event.target.value)}
            required
          />

          <button type="submit">Save Office</button>
        </form>

        <form className="office-form" onSubmit={deleteOffice}>
          <h3>Delete Office</h3>
          <label htmlFor="delete-office-number">Office number</label>
          <input
            id="delete-office-number"
            type="text"
            value={deleteNumber}
            onChange={(event) => setDeleteNumber(event.target.value)}
            required
          />

          <button className="delete-office-button" type="submit">
            Delete Office
          </button>
        </form>
      </div>

      <div className="office-list">
        <h3>Saved Offices</h3>
        {offices.length === 0 ? (
          <p>No offices saved yet.</p>
        ) : (
          <ul>
            {offices.map((office) => (
              <li key={office.officeNumber}>
                {office.name} — Office {office.officeNumber}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}

export default Office
