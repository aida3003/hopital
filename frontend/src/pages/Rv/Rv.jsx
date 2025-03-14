import { Container, Row, Col } from 'react-bootstrap';
import Navbare from "../../composants/Navbare/Navbare";
import AppointmentForm from '../../composants/AppointmentForm';
import AppointmentList from '../../composants/AppointmentList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './Rv.css';

function Rv() {
  const [appointments, setAppointments] = useState([]);

  // Récupérer la liste des rendez-vous au montage du composant
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get("http://localhost:5000/appointment/appointments");
        setAppointments(response.data);  // Mettre à jour l'état avec les rendez-vous récupérés
      } catch (error) {
        console.error("Erreur lors de la récupération des rendez-vous", error);
      }
    };

    fetchAppointments();  // Appel à la fonction de récupération des rendez-vous
  }, []);

  const handleNewAppointment = (appointment) => {
    setAppointments(prevAppointments => [...prevAppointments, appointment]);
  };

  return (
    <div className="rv">
      <Navbare />
      <Container className="py-5">
        <h1 className="text-center mb-5">Système de Gestion des Rendez-vous</h1>
        <Row>
          <Col md={5}>
            <AppointmentForm onSubmit={handleNewAppointment} />
          </Col>
          <Col md={7}>
            <AppointmentList appointments={appointments} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Rv;
