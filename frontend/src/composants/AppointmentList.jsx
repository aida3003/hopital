import { Table } from 'react-bootstrap';

const AppointmentList = ({ appointments }) => {  // Déstructure appointments depuis les props
  // Vérification si 'appointments' est un tableau et s'il contient des éléments
  if (!Array.isArray(appointments) || appointments.length === 0) {
    return (
      <div className="p-4 bg-white rounded shadow">
        <h2 className="mb-4">Liste des Rendez-vous</h2>
        <p className="text-muted">Aucun rendez-vous programmé</p>
      </div>
    );
  }

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="mb-4">Liste des Rendez-vous</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Patient</th>
            <th>Médecin</th>
            <th>Service</th>
            <th>Date</th>
            <th>Heure</th>
            <th>Motif</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment._id}>  {/* Utilisation de '_id' comme clé unique */}
              <td>{appointment.patientName}</td>
              <td>{appointment.doctorName}</td>
              <td>{appointment.service}</td>
              <td>{new Date(appointment.date).toLocaleDateString()}</td> {/* Formatage de la date */}
              <td>{appointment.time}</td>
              <td>{appointment.reason}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AppointmentList;
